import fs from 'fs';
import path from 'path';
/*
* We denote by host modules here, packages that are already
* installed within the react native app. These have the same
* behavior on the server side as client component but the
* difference is that the host app will not need to fetch them
* as they are locally available.
*/
export const hostModules = [
  'react-native',
  '@rsc/design-system'
]

export const isModuleHostComponent = (encodedId: string) => {
  return hostModules.some((hostModule) =>
    encodedId.includes(`node_modules/${hostModule}`) || encodedId.includes(`libs/${hostModule}`));
}

type HostComponentConfiguration = {
  packageName: string // Ex: react-native, react-native-animated, ...
  componentName: string; // Ex: View, Text, ...
  id: string; // Ex: react-native#Text
  chunk: string; // Ex: node_modules/react-native/index.js
}

const getHostComponentConfigurationFromEncodedId = (encodedId: string): HostComponentConfiguration => {
  const [_, componentName] = encodedId.split('#');

  const packageName = hostModules.find((module) => encodedId.includes(module));

  if (!packageName) {
    throw new Error(`Trying to use a package not declared in the list of host modules ${packageName}`);
  }

  return {
    packageName,
    componentName,
    id: packageName,
    chunk: packageName
  }
}

export const bundlerConfig = new Proxy(
  {},
  {
    get(_target, encodedId) {
      if (!isModuleHostComponent(encodedId.toString())) {
        const manifest = fs.readFileSync(
          path.resolve("./public/react-client-manifest.json"),
          "utf8"
        );

        const moduleMap = JSON.parse(manifest);
        for (const [_key, value] of Object.entries(moduleMap)) {
          // @ts-expect-error missing type
          value.chunks = value.chunks.filter((chunk: string) => chunk.includes('.js'))
        }
        return moduleMap[encodedId];
      }

      // Here we construct the host component configuration
      const hostComponentConfiguration = getHostComponentConfigurationFromEncodedId(encodedId.toString());
      return {
        id: hostComponentConfiguration.id,
        name: hostComponentConfiguration.componentName,
        chunks: [
          hostComponentConfiguration.chunk
        ],
        async: true
      }

    },
  }
);


import 'text-encoding-polyfill';
import './react-native-rsc-webpack-runtime';
//@ts-expect-error missing type
import { polyfillGlobal } from 'react-native/Libraries/Utilities/PolyfillFunctions';
//@ts-expect-error missing type
import { polyfill as polyfillFetch } from 'react-native-polyfill-globals/src/fetch';
import { registerHostPackage, initReactNativeRscWebpackRuntime } from './react-native-rsc-webpack-runtime';

try {
  polyfillGlobal(
    'ReadableStream',
    () => require('web-streams-polyfill').ReadableStream
  );
} catch { }

polyfillFetch();

// We init rsc webpack runtime
initReactNativeRscWebpackRuntime({ clientModuleHostingBaseUrl: 'http://localhost:3000/' });

// We register host packages
registerHostPackage('react-native', require('react-native'));
registerHostPackage('react', require('react'));
registerHostPackage('@rsc/design-system', require('@rsc/design-system'));


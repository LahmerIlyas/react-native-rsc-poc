import { webpackRequire, registerHostPackage } from './webpack-require';
import { webpackLoadChunk } from './webpack-load-chunk';
import { setBaseUrl } from './build-url-for-bundle';
// @ts-expect-error missing type
global.__webpack_require__ = webpackRequire;
// @ts-expect-error missing type
global.__webpack_chunk_load__ = webpackLoadChunk;

export { registerHostPackage };

export type ReactNativeRscWebpackRuntimeConfiguration = {
  clientModuleHostingBaseUrl: string;
}

export const initReactNativeRscWebpackRuntime = (config: ReactNativeRscWebpackRuntimeConfiguration) => {
  setBaseUrl(config.clientModuleHostingBaseUrl);
};

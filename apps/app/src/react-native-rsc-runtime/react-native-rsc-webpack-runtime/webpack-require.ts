type WebpackModuleCacheItem = {
  id?: string;
  loaded?: boolean;
  exports: Record<string, unknown>;
}
var __webpack_module_cache__: Record<string, WebpackModuleCacheItem> = {};


export type WebpackRequireFunction = (moduleId: string) => unknown;

export type WebpackModule = (module: WebpackModuleCacheItem, exports?: Record<string, unknown>, requireFn?: WebpackRequireFunction) => unknown;

var __webpack_modules__: Record<string, WebpackModule> = {};


export function webpackRequire(moduleId: string) {
  // Check if module is in cache
  var cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  // Create a new module (and put it into the cache)
  var module = __webpack_module_cache__[moduleId] = {
    id: moduleId,
    loaded: false,
    exports: {},
  };

  // Execute the module function
  __webpack_modules__[moduleId](module, module.exports, webpackRequire);

  // Return the exports of the module
  return module.exports;
}

export const registerHostPackage = (hostPackageId: string, requiredPackage: unknown) => {
  __webpack_modules__[hostPackageId] = (module) => {
    // @ts-expect-error wrong type
    module.exports = requiredPackage;
  };
};

export const isChunkLoaded = (chunkId: string) => {
  return Boolean(__webpack_modules__[chunkId]);
};

export const getLoadedChunk = (chunkId: string) => {
  const module = { exports: {} };
  __webpack_modules__[chunkId](module);
  return module.exports;
};

export const registerClientChunks = (moduleId: string, initFunction: WebpackModule) => {
  __webpack_modules__[moduleId] = initFunction;
};

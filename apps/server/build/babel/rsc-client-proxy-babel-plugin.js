const { template } = require('@babel/core');
const url = require('url');
module.exports = function({ types: t }) {
  return {
    visitor: {
      Program(path, state) {
        const isUseClient = path.node.directives.some(
          (directive) =>
            directive.value.value === 'use client');

        if (!isUseClient) {
          return;
        }
        const filePath = state.file.opts.filename;

        const outputKey = url.pathToFileURL(filePath).href;

        // We need to add all of the exports to support `export * from './module'` which iterates the keys of the module.
        const proxyModule = [
          `const proxy = /*@__PURE__*/ require("react-server-dom-webpack/server").createClientModuleProxy(${JSON.stringify(
            outputKey
          )});`,
          `module.exports = proxy;`,
        ];

        path.node.body = [];
        path.node.directives = [];

        path.pushContainer('body', template.ast(proxyModule.join('\n')));
      },
    },
  };
};


import { isModuleHostComponent } from "./bundler.config";

const Module = require('module');
const register = require("react-server-dom-webpack/node-register");
register();

const originalCompile = Module.prototype._compile;

Module.prototype._compile = function(
  this: any,
  content: string,
  filename: string,
): void {
  const isHostModule = isModuleHostComponent(filename);
  if (!isHostModule) {
    return originalCompile.apply(this, arguments);
  }

  // We inject the `use client` for host modules
  const modifiedContent = `'use client';\n` + content;
  return originalCompile.apply(this, [modifiedContent, filename]);
}





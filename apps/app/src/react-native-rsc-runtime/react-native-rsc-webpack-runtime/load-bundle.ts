import { buildUrlForBundle } from './build-url-for-bundle';
import { fetchThenEvalAsync } from './fetch-then-eval-async';
import { WebpackModule, registerClientChunks } from './webpack-require';


type WebpackChunkserver = [[string], Record<string, WebpackModule>];
const registerLoadedBundleChunks = (webpackChunkserver: Array<WebpackChunkserver>) => {
  for (const chunk of webpackChunkserver) {
    const modules = Object.entries(chunk[1]);
    for (const module of modules) {
      const [id, func] = module;
      registerClientChunks(id, func);
    }
  }
};

export async function loadBundleAsync(bundlePath: string): Promise<void> {
  const requestUrl = buildUrlForBundle(bundlePath);
  const evalResult = await fetchThenEvalAsync(requestUrl);
  // @ts-expect-error missing type
  registerLoadedBundleChunks(self.webpackChunkserver);
  return evalResult;
}

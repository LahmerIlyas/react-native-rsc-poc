import { loadBundleAsync } from './load-bundle';
import { getLoadedChunk, isChunkLoaded } from './webpack-require';

export async function webpackLoadChunk(path: string) {
  if (isChunkLoaded(path)) {
    return getLoadedChunk(path);
  }
  return loadBundleAsync(path);
}

// @ts-expect-error missing types
import { createFromFetch } from 'react-server-dom-webpack/client';

type RenderRscPageProps = {
  url: string;
}

export const renderRscPage = (options: RenderRscPageProps) => {
  // @ts-expect-error missing types
  return createFromFetch(fetch(options.url, { reactNative: { textStreaming: true } }));
};

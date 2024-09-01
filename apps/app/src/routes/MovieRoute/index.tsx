// @ts-expect-error missing types
import React, { use } from 'react';
import { renderRscPage } from '../../react-native-rsc-runtime/render-rsc-page';

const cache = new Map();


export const MovieRoute = () => {
  let content = cache.get('movies');
  if (!content) {
    content = renderRscPage({ url: 'http://localhost:3000/react' });
    cache.set('movies', content);
  }

  return (
    <>
      {use(content)}
    </>
  );

};

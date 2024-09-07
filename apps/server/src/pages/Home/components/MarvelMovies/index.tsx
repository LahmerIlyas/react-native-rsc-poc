import React from 'react';
import { getOMDbAPI, TitleSearchResult } from '@rsc/api-client-omdb/server';
import {
  MovieCard,
  SimpleHorizontalCardsList,
} from '@rsc/design-system/server';

export const MarvelMovies = async () => {
  const result = await getOMDbAPI().titleSearch({ s: 'Marvel', y: 2022, page: 1 }) as TitleSearchResult;

  // @ts-expect-error missing type
  const movies = result.Search.map(searchItem => ({
    title: searchItem.Title,
    imageUrl: searchItem.Poster
  })).filter(movie => movie.imageUrl !== 'N/A')

  return (
    <SimpleHorizontalCardsList
      title="Test Marvel Movies"
      component={MovieCard}
      data={movies}
      style={{ marginTop: 24 }}
    />
  )
}

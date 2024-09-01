import React from 'react';
import {
  ScrollViewPageLayout
} from '@rsc/design-system/server';
import { MarvelMovies } from './components/MarvelMovies';
import { DisneyMovies } from './components/DisneyMovies';
import { ProductCard } from '../../components/ProductCard';



const Home = () => {
  return (
    <ScrollViewPageLayout
      headerProps={{
        title: 'Home',
        rightIcon: 'help-circle',
        leftIcon: 'arrow-left'
      }}
    >
      <MarvelMovies />
      <DisneyMovies />
      <ProductCard
        product={{
          imageUrl: 'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg', id: 'adsfjadsfjadsfjadsfjadsfjadsfjadsfjadsfjadsfjadsfj',
          name: 'test',
          price: 12
        }}
      />
    </ScrollViewPageLayout>
  )
}

export default Home;

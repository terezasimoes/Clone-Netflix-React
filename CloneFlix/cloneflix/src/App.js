import React, { useEffect } from 'react';
import MoviesDB from './MoviesDB';

export default () => {
  
  useEffect(() => {
    const loadMovies = async () => {
      let movies = await MoviesDB.getHomeMovies();
      console.log(movies)
    }
    loadMovies();
  }, [])


  return (
    <div>
      Relembrando React!!
    </div>
  )
}
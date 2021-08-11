import React, { useEffect, useState } from 'react';
import MovieLine from './components/MovieLine'
import MoviesDB from './MoviesDB';
import './App.css';

export default () => {

  const [movieList, setMovieList] = useState([]);
  
  useEffect(() => {
    const loadMovies = async () => {
      let movies = await MoviesDB.getHomeMovies();
      setMovieList(movies);    }
    loadMovies();
  }, [])


  return (
    <div className = "container">
      {movieList.map((elem, index) => (
        <div>
					<MovieLine key={index} title={elem.title} items={elem.items} />
        </div>
        )
      )}
    </div>
  )
}
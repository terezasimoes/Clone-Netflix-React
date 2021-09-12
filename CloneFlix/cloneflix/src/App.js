import React, { useEffect, useState } from 'react';
import MovieLine from './components/MovieLine'
import MoviesDB from './MoviesDB';
import FeatureMovie from './components/FeatureMovie';
import './App.css';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState ([]);
  
  useEffect(() => {
    const loadMovies = async () => {
      // Get All movies
      let movies = await MoviesDB.getHomeMovies();
      setMovieList(movies);
      //Get Featured
      let originals = movies.filter(i => i.slug === 'originals');
      console.log(originals)
      let randonFeatureMovie = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let originalChosen = originals[0].items.results[randonFeatureMovie];
      // console.log(originalChosen)
      let chosenInfo = await MoviesDB.getMovieInfo(originalChosen.id, 'tv');
      // console.log(chosenInfo)
      setFeatureData(chosenInfo);
    }

    loadMovies(); 
  }, [])


  return (
    <div className = "container">
      {featureData &&
        <FeatureMovie item={featureData}/>
      }

      {movieList.map((elem, index) => (
        <div key={index} >
					<MovieLine title={elem.title} items={elem.items} />
        </div>
        )
      )}
    </div>
  )
}
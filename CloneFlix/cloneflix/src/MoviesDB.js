const API_KEY = 'dc5a83559c4f6f5ce27d7c901dea8234';
const API_BASE = 'https://api.themoviedb.org/3/';

const fetchMovies = (endpoint) => (
  fetch(`${API_BASE}${endpoint}`).then((response) => (
    response
    .json()
    .then((json) => (
      response.ok ? Promise.resolve(json) : Promise.reject(json)))
  ))
);

// Data used from the website https://www.themoviedb.org/settings/api
export default {
    getHomeMovies: async () => {
      return [
        {
          slug: 'originals',
          title: 'Netflix Originals', 
          items: await fetchMovies(`/discover/tv?with_network=123&language=us&api_key=${API_KEY}`)
        },
        {
          slug: 'trending',
          title: 'Netflix Trending', 
          items: await fetchMovies(`/trending/all/week?language=us&api_key=${API_KEY}`)
        },
        {
          slug: 'toprated',
          title: 'Top Rated', 
          items: await fetchMovies(`/movie/top_rated?language=us&api_key=${API_KEY}`)
        },
        {
          slug: 'actions',
          title: 'Actions', 
          items: await fetchMovies(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
        },
        {
          slug: 'comedy',
          title: 'Comedy', 
          items: await fetchMovies(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
        },
        {
          slug: 'horror',
          title: 'Horror Movies', 
          items: await fetchMovies(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
        },
        {
          slug: 'romance',
          title: 'Romance', 
          items: await fetchMovies(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
        },
        {
          slug: 'documentary',
          title: 'Documentary', 
          items: await fetchMovies(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
        },
      ];
    }
}

// const fetchMovies = (endpoint) => {
//   const req = await fetch(`${API_BASE}${endpoint}`);
//   const json = await req.json();
//   return json;
// }

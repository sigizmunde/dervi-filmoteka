// module for working with API

// temporary dummy data
import * as genres from './dummy-array-objs/genres.json';
import * as movieDetails from './dummy-array-objs/movie-details.json';
import * as trendingMovies from './dummy-array-objs/trending-movies.json';

export function fetchMovie(id) {
  // returns movie info as an object
  return JSON.parse(movieDetails);
}

export function fetchMovies(params) {
  // search for movies by params and returns an array of objects
  return JSON.parse(trendingMovies);
}

export function getGenres() {
  // returns list of genres in some format (to consider)
  return JSON.parse(genres);
}

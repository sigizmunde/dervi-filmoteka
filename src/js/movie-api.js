// module for working with API

import { API_BASE_URL, API_KEY } from "./global";

// // temporary dummy data
import * as genres from './dummy-array-objs/genres.json';
// import * as movieDetails from './dummy-array-objs/movie-details.json';
// import * as trendingMovies from './dummy-array-objs/trending-movies.json';

// export function fetchMovie(id) {
//   // returns movie info as an object
//   return JSON.parse(movieDetails);
// }

// export function fetchMovies(params) {
//   // search for movies by params and returns an array of objects
//   return JSON.parse(trendingMovies);
// }

// export function getGenres() {
//   // returns list of genres in some format (to consider)
//   return JSON.parse(genres);
// }

export default class APIService {
  constructor() {
    this.searchQuery = "";
  }

  #fetchQuery(pathParams, searchParams) {
      return fetch(`${API_BASE_URL}/${pathParams}?${searchParams}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        });
  }

  // TRENDING
  getTrending(pageNum = 1, isDay = false) {       
    const pathParams = {
      resource: "trending",
      mediaType: "movie", 
      timeWindow: isDay ? "day" : "week",

      get split() {
        return `${this.resource}/${this.mediaType}/${this.timeWindow}`;
      }
    }

    // Search params
    const searchParams = new URLSearchParams({
      api_key: API_KEY,
      page: pageNum,
    });

    return this.#fetchQuery(pathParams.split, searchParams);                 
  }

    // SEARCH
    searchMovie(query, pageNum = 1) {
        // Path params
        const pathParams = {
            resource: "search",
            mediaType: "movie",
            
            get split() {
                return `${this.resource}/${this.mediaType}`;    
            }
        }

        // Search params
        const searchParams = new URLSearchParams({
            api_key: API_KEY,
            page: pageNum,
            query,
        });

        return this.#fetchQuery(pathParams.split, searchParams);
            // .then(response => {
            //     return response.results;
            // });
    }

    // GET MOVIE
    getMovie(movieId) {
        // Path params
        const pathParams = {
            resource: "movie",
            id: movieId,            
            
            get split() {
                return `${this.resource}/${this.id}`;    
            }
        }
        
        // Search params
        const searchParams = new URLSearchParams({
            api_key: API_KEY,
        });
        
        return this.#fetchQuery(pathParams.split, searchParams);
  }
  
  getGenres() {  
    return genres.genres;  
  }
}


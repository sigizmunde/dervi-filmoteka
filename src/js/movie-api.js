// module for working with API

import { API_BASE_URL, API_KEY } from "./global";

export default class APIService {
  constructor() {
    if (APIService._instance) {
      return APIService._instance;
    }
    APIService._instance = this;

    this.searchQuery = "";
    this.genres = [];

    this.#loadGenres();
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
  
  // GENRES
  #loadGenres() {  
    // return genres.genres;  
    const pathParams = {
      resource: "genre",
      mediaType: "movie",
      list: "list",

      get split() {
        return `${this.resource}/${this.mediaType}/${this.list}`;
      }
    }

    // Search params
      const searchParams = new URLSearchParams({
          api_key: API_KEY,
      });
    
    this.#fetchQuery(pathParams.split, searchParams)
                .then(result => this.genres = result.genres);
  }

  getGenres() {
    return this.genres;
  }
}


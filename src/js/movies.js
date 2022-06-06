// main module to manipulate with data inside an application

import { genreList, API_KEY, API_BASE_URL, API_IMG_URL, refs } from './global';
// import { fetchMovie, fetchMovies, getGenres } from 'movie-api';
import { showMovies } from './markup';
import APIService from './movie-api';
// import DataStorage from './data.js';

// const dataStorage = new DataStorage(API_KEY);
const API = new APIService();

// let currentMovieList = [{ film1 }, { film2 }, { film3 }];

export function getMovieList(params) {
  // depending on params requests API or data
  API.getTrending()
    .then(responseData => {      
      showMovies(responseData);
    })
    .catch(result => console.log(result));
}

function getMovieInfo(id) {
  return fetchMovie(id);
}

function search(params) {
  // depending on params searches films in current list

  return fetchMovies();
}

function loadGenres() {
  // genreList = getGenres();
  const genreList = API.getGenres();
  
  return genreList;
}

export function parseGenresByString(genre_ids = [], maxCount = 0) {
  const genreList = loadGenres();
  const genreNames = [];

  for (let i = 0; i < genre_ids.length; i++) {
    if (maxCount && i === maxCount) {
      genreNames.push("others");
      break;
    }

    findValue = genreList.find(item => item.id === genre_ids[i]);

    if (findValue) {
      genreNames.push(findValue.name);
    }
  }
  
  return genreNames.join(", ");  
}

function addQueue(film) {
  // gets dataStorage.getQueue, adds film.id and then sets dataStorage.setQueue
}

function addWatched(film) {
  // gets dataStorage.getQueue, adds film.id and then sets dataStorage.setQueue
}

function removeQueue(film) {
  // gets dataStorage.getQueue, removes film.id and then sets dataStorage.setQueue
}

function removeWatched(film) {
  // gets dataStorage.getQueue, removes film.id and then sets dataStorage.setQueue
}


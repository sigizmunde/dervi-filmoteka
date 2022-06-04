// main module to manipulate with data inside an application

import { genreList, API_KEY } from 'global';
import { fetchMovie, fetchMovies, getGenres } from 'movie-api';
import DataStorage from 'data.js';

const dataStorage = new DataStorage(API_KEY);

let currentMovieList = [{ film1 }, { film2 }, { film3 }];

function getMovieList(params) {
  // depending on params requests API or data
}

function getMovieInfo(id) {
  return fetchMovie(id);
}

function search(params) {
  // depending on params searches films in current list

  return fetchMovies();
}

function loadGenres() {
  genreList = getGenres();
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

// module for interface elements and their event listeners

import { API_KEY, refs } from './global';
import { getMovieList } from './movies';

export function init() {
  //refs, event listeners, genres request, popular movies request
  // refs.cardsBox = document.querySelector(".cards-box");
  getMovieList();
}

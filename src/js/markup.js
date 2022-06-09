// module for all the functions generating markup
const cardSection = document.querySelector('.card-section');

import { API_IMG_URL, refs } from './global';
import { parseGenresByString } from './movies';

export function showMovies(responseData) {
  responseData.results.map(movie => {
    const genreString = parseGenresByString(movie.genre_ids, 2);
    refs.cardsBox.innerHTML += `
          <li class="card">
            <a href="" class="card-link" movie-id="${movie.id}">
              <div class="card-button-slider">
                <img
                  src="${API_IMG_URL}${movie.poster_path}"
                  class="card-image"
                  alt=""
                />
                <div class="card-button-background">
                  <button class="card-button in-watched">watched</button>
                  <button class="card-button in-queue">queue</button>
                </div>
              </div>
              <div class="card-label-wrapper">
                <div class="card-label-in-watched"></div>
                <div class="card-label-in-queue"></div>
              </div>
              <div class="card-body">
                <p class="card-title"><b>${movie.original_title}</b></p>
                <p class="card-genres"><b>${genreString} | ${movie.release_date.substr(
      0,
      4
    )}</b></p>
              </div>
            </a>
          </li>`;
  });
}

export function showMovieInfo() {}
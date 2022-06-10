// module for all the functions generating markup
const cardSection = document.querySelector('.card-section');

import { API_IMG_URL, refs } from './global';
import { parseGenresByString } from './movies';

export function showMovies(objectsArray) {
  objectsArray.map(movie => {
    refs.cardsBox.innerHTML += `
        <li class="card ${movie.wachedOrQueueClass}">
          <a href="" class="card-link" movie-id="${movie.id}">
            <div class="card-button-slider">
              <img
                src="${movie.posterPath}"
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
              <p class="card-title"><b>${movie.title}</b></p>
              <p class="card-genres"><b>${movie.genresInRow} | ${movie.releaseDate}</b></p>
            </div>
          </a>
        </li>`;
  })
}

export function showMovieInfo() {}

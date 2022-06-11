// module for all the functions generating markup
const cardSection = document.querySelector('.card-section');

import { API_IMG_URL, refs } from './global';
import { parseGenresByString } from './movies';

export function showMovies(objectsArray) {
  objectsArray.map(movie => {
    refs.cardsBox.innerHTML += `
        <li class="card ${movie.watchedOrQueueClass}">
          <a href="" class="card-link card-button-slider" movie-id="${movie.id}">
            
              <img
                src="${movie.posterPath}"
                class="card-image"
                alt=""
              />
              <div class="card-button-background">
                <button class="card-button in-watched">watched</button>
                <button class="card-button in-queue">queue</button>
              </div>
            
              </a>
              <div class="card-label-wrapper">
                <div class="card-label-in-watched"></div>
                <div class="card-label-in-queue"></div>
              </div>
            <div class="card-body">
              <p class="card-title"><b>${movie.title}</b></p>
              <p class="card-genres"><b>${movie.genresInRow} | ${movie.releaseDate}</b></p>
            </div>
        </li>`;
  });
}

export function showMovieInfo() {}

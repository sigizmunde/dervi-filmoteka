// module for all the functions generating markup
const cardSection = document.querySelector('.card-section');

import { API_IMG_URL, refs } from './global';
import { parseGenresByString } from './movies';
import { openModal, printToModal } from './modal';

export function clearMovies() {
  refs.cardsBox.innerHTML = '';
}

export function showMovies(objectsArray) {
  let codeHTML = '';
  objectsArray.map(movie => {
    codeHTML += `
        <li class="card ${movie.watchedOrQueueClass}">
          <a href="" class="card-link card-button-slider" movie-id="${
            movie.id
          }">
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
              <p class="card-genres"><b>${movie.genresInRow(3)} | ${
      movie.releaseDate
    }</b></p>
        </li>`;
  });

  printHTMLmarkup(codeHTML);
}

// Show elements on page
function printHTMLmarkup(codeHTML) {
  refs.cardsBox.innerHTML = codeHTML;
}

export function showMovieInfo(movieObject) {
  let codeHTML = `
      <div class="movie-picture-box">
        <img
          src="${movieObject.posterPath}"
          alt="movie-picture"
          class="movie-picture"
        />
      </div>
      <div class="info-container">
        <h1 class="movie-title">${movieObject.title}</h1>
        <ul class="movie-list">
          <li class="movie-items item-right">
            <div class="description-box">
              <p class="movie-description">Vote / Votes</p>
              <p class="movie-description">Popularity</p>
              <p class="movie-description">Original Title</p>
              <p class="movie-description">Genre</p>
            </div>
          </li>
          <li class="movie-items">
            <div class="property-box">
              <div class="vote-box property">
                <p class="property-vote property-accent" id="vote">${
                  movieObject.voteAverage
                }</p>
                <span class="vote-slash">/</span>
                <p class="property-vote property-vote-alt" id="votes">${
                  movieObject.voteCount
                }</p>
              </div>
              <p class="property" id="popularity">${movieObject.popularity}</p>
              <p class="property" id="title">${movieObject.title}</p>
              <p class="property" id="genre">${movieObject.genresInRow()}</p>
            </div>
          </li>
        </ul>
        <article class="article">
          <p class="article-caption">About</p>
          <p class="article-text">
            ${movieObject.overview}
          </p>
        </article>
        <div class="button-box">
          <button class="movie-button primary-btn">add to Watched</button>
          <button class="movie-button">add to queue</button>
        </div>
      </div>`;

  printToModal(codeHTML);
  openModal();
}

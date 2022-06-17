import { splide } from './slider';
import { DataStorage } from './data';
import { refs, moviesCashe } from './global';
import { ref } from '@firebase/database';

const data = new DataStorage();
let movieModal = document.querySelector('.movie-modal');
let backdrop = document.querySelector('.backdrop');
let closeBtn = movieModal.querySelector('[data-close]');
let queueBtnModal;
let watchedBtnModal;

export function modalInit() {
  movieModal = document.querySelector('.movie-modal');
  backdrop = document.querySelector('.backdrop');
  closeBtn = movieModal.querySelector('[data-close]');

  //movieModal.addEventListener('click', onCloseClick);
  backdrop.addEventListener('click', onCloseClick);
  closeBtn.addEventListener('click', onCloseClick);
}

export function openModal() {
  movieModal.classList.remove('is-hidden');
  movieModal.classList.add('open');
  document.body.classList.add('modal-open');
  splide.Components.AutoScroll.pause();
}

export function closeModal() {
  movieModal.classList.remove('open');
  movieModal.classList.add('is-hidden');
  movieModal.classList.remove('modal-register');
  document.body.classList.remove('modal-open');
  splide.Components.AutoScroll.play();
  refs.tempCardWrap.innerHTML = '';
}

function onCloseClick() {
  closeModal();
}

export function printToModal(HTMLString) {
  const modalContent = document.querySelector('.modal-content');
  modalContent.innerHTML = HTMLString;

  // get modal action buttons
  queueBtnModal = modalContent.querySelector('[data-queue-btn]');
  watchedBtnModal = modalContent.querySelector('[data-watched-btn]');
  const movieId = Number(queueBtnModal.dataset.movieId);

  if (data.getQueue().find(item => item.id === movieId)) {
    queueBtnModal.classList.add('active-btn');
  }
  if (data.getWatched().find(item => item.id === movieId)) {
    watchedBtnModal.classList.add('active-btn');
  }

  queueBtnModal.addEventListener('click', onQueueBtnModal);
  watchedBtnModal.addEventListener('click', onWatchedBtnModal);
}

// action btn in the movie modal
function onQueueBtnModal(event) {
  const currentMovieId = event.target.dataset.movieId;
  const currentMovieIdNum = Number(currentMovieId);

  let movie = data.getQueue().find(item => item.id === currentMovieIdNum);
  if (movie) {
    data.removeFromQueue(currentMovieIdNum);
    event.target.classList.remove('active-btn');
    if (refs.currentMovieLi) {
      refs.currentMovieLi.classList.remove('in-queue');
    }
    showHideMovieCard(currentMovieIdNum);
    // add notify
    return;
  }

  if (!movie) {
    movie = moviesCashe.state.find(item => item.id === currentMovieIdNum);
  }

  if (
    data.getWatched().find(item => item.id === currentMovieIdNum) &&
    !queueBtnModal.classList.contains('active-btn')
  ) {
    data.removeFromWatched(currentMovieIdNum);
    watchedBtnModal.classList.remove('active-btn');
    if (refs.currentMovieLi) {
      refs.currentMovieLi.classList.remove('in-watched');
    }
  }

  data.addToQueue(movie);
  event.target.classList.add('active-btn');

  // add label on a movie card
  if (refs.currentMovieLi) {
    refs.currentMovieLi.classList.add('in-queue');
  }

  showHideMovieCard(currentMovieIdNum);
  // add notify
}

function onWatchedBtnModal(event) {
  const currentMovieId = event.target.dataset.movieId;
  const currentMovieIdNum = Number(currentMovieId);

  let movie = data.getWatched().find(item => item.id === currentMovieIdNum);
  if (movie) {
    data.removeFromWatched(currentMovieIdNum);
    event.target.classList.remove('active-btn');
    // hideMovieCard();
    if (refs.currentMovieLi) {
      refs.currentMovieLi.classList.remove('in-watched');
    }

    showHideMovieCard(currentMovieIdNum);
    // add notify
    return;
  }

  if (!movie) {
    movie = moviesCashe.state.find(item => item.id === currentMovieIdNum);
  }

  if (
    data.getQueue().find(item => item.id === currentMovieIdNum) &&
    !watchedBtnModal.classList.contains('active-btn')
  ) {
    data.removeFromQueue(currentMovieIdNum);
    queueBtnModal.classList.remove('active-btn');
    if (refs.currentMovieLi) {
      refs.currentMovieLi.classList.remove('in-queue');
    }
  }

  data.addToWatched(movie);
  event.target.classList.add('active-btn');
  // showMovieCard();

  if (refs.currentMovieLi) {
    refs.currentMovieLi.classList.add('in-watched');
  }

  showHideMovieCard(currentMovieIdNum);
  // add notify
}

// hide a movie card after some action in the movie modal if we are in the library page
function showHideMovieCard(movieId, movieLi = refs.currentMovieLi) {
  if (!refs.header.classList.contains('header-library')) {
    return;
  }
  if (refs.header.querySelector('#lib-w').classList.contains('accent-btn')) {
    if (data.getWatched().find(item => item.id === movieId)) {
      refs.cardsBox.prepend(movieLi);
      return;
    } else {
      refs.tempCardWrap.append(movieLi);
      return;
    }
  }
  if (refs.header.querySelector('#lib-q').classList.contains('accent-btn')) {
    if (data.getQueue().find(item => item.id === movieId)) {
      refs.cardsBox.prepend(movieLi);
      return;
    } else {
      refs.tempCardWrap.append(movieLi);
      return;
    }
  }
}

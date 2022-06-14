import { DataStorage } from './data';
import { refs } from './global';

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
}

export function closeModal() {
  movieModal.classList.remove('open');
  movieModal.classList.add('is-hidden');
  document.body.classList.remove('modal-open');
}

function onCloseClick(event) {
  closeModal();
}

export function printToModal(HTMLString) {
  const modalContent = document.querySelector('.modal-content');
  modalContent.innerHTML = HTMLString;

  // get modal action buttons
  queueBtnModal = modalContent.querySelector('[data-queue-btn]');
  watchedBtnModal = modalContent.querySelector('[data-watched-btn]');
  const movieId = Number(queueBtnModal.dataset.movieId);

  if (data.getQueue().includes(movieId)) {
    queueBtnModal.classList.add('active-btn');
  }
  if (data.getWatched().includes(movieId)) {
    watchedBtnModal.classList.add('active-btn');
  }

  queueBtnModal.addEventListener('click', onQueueBtnModal);
  watchedBtnModal.addEventListener('click', onWatchedBtnModal);
}

// action btn in the movie modal
function onQueueBtnModal(event) {
  const currentMovieId = event.target.dataset.movieId;
  const currentMovieIdNum = Number(currentMovieId);

  if (
    data.getWatched().includes(currentMovieIdNum) &&
    !queueBtnModal.classList.contains('active-btn')
  ) {
    data.removeFromWatched(currentMovieIdNum);
    watchedBtnModal.classList.remove('active-btn');
    refs.currentMovieLi.classList.remove('in-watched');
  }

  if (event.target.classList.contains('active-btn')) {
    data.removeFromQueue(currentMovieIdNum);
    event.target.classList.remove('active-btn');
    refs.currentMovieLi.classList.remove('in-queue');
  } else {
    data.addToQueue(currentMovieIdNum);
    event.target.classList.add('active-btn');
    refs.currentMovieLi.classList.add('in-queue');
  }
  // add notify
}

function onWatchedBtnModal(event) {
  const currentMovieId = event.target.dataset.movieId;
  const currentMovieIdNum = Number(currentMovieId);

  if (
    data.getQueue().includes(currentMovieIdNum) &&
    !watchedBtnModal.classList.contains('active-btn')
  ) {
    data.removeFromQueue(currentMovieIdNum);
    queueBtnModal.classList.remove('active-btn');
    refs.currentMovieLi.classList.remove('in-queue');
  }

  if (event.target.classList.contains('active-btn')) {
    data.removeFromWatched(currentMovieIdNum);
    event.target.classList.remove('active-btn');
    refs.currentMovieLi.classList.remove('in-watched');
  } else {
    data.addToWatched(currentMovieIdNum);
    event.target.classList.add('active-btn');
    refs.currentMovieLi.classList.add('in-watched');
  }
  // add notify
}

export function checkMovieCardLabel(movieCardLi) {
  movieCardLi.classList.contains('in-queue');
}

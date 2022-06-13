import { DataStorage } from './data';

const data = new DataStorage();
let movieModal = document.querySelector('.movie-modal');
let backdrop = document.querySelector('.backdrop');
let closeBtn = movieModal.querySelector('[data-close]');
export let queueBtnModal;
export let watchedBtnModal;

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
  movieId = Number(queueBtnModal.dataset.movieId);

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
    watchedBtnModal.classList.remove('active-btn')
  ) {
    data.removeFromWatched(currentMovieIdNum);
    watchedBtnModal.classList.remove('active-btn');
  }

  event.target.classList.toggle('active-btn');

  event.target.classList.contains('active-btn')
    ? data.removeFromQueue(currentMovieIdNum)
    : data.addToQueue(currentMovieIdNum);
  // add notify
}

function onWatchedBtnModal(event) {
  const currentMovieId = event.target.dataset.movieId;
  const currentMovieIdNum = Number(currentMovieId);

  if (
    data.getQueue().includes(currentMovieIdNum) &&
    queueBtnModal.classList.remove('active-btn')
  ) {
    data.removeFromQueue(currentMovieIdNum);
    queueBtnModal.classList.remove('active-btn');
  }

  event.target.classList.toggle('active-btn');

  event.target.classList.contains('active-btn')
    ? data.removeFromWatched(currentMovieIdNum)
    : data.addToWatched(currentMovieIdNum);
  // add notify
}

import { refs } from './global';
import { onQueueBtnModal, onWatchedBtnModal } from './actions-library';

// draft file
const movieModal = document.querySelector('.movie-modal');
const backdrop = document.querySelector('.backdrop');

export function modalInit() {
  movieModal.addEventListener('click', onCloseClick);
  backdrop.addEventListener('click', onCloseClick);
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
  if (event.target.nodeName === 'BUTTON') {
    return;
  }
  closeModal();
}

export function printToModal(HTMLString) {
  const modalContent = document.querySelector('.modal-content');
  modalContent.innerHTML = HTMLString;

  // get modal action buttons
  const queueBtnModal = modalContent.querySelector('.queue-btn');
  const watchedBtnModal = modalContent.querySelector('.watched-btn');

  queueBtnModal.addEventListener('click', console.log(queueBtnModal));
  watchedBtnModal.addEventListener('click', console.log(watchedBtnModal));
  //   queueBtnModal.addEventListener('click', onQueueBtnModal);
  //   watchedBtnModal.addEventListener('click', onWatchedBtnModal);
}

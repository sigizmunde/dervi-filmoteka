// draft file
let movieModal = document.querySelector('.movie-modal');
let backdrop = document.querySelector('.backdrop');
let closeBtn = movieModal.querySelector('[data-close]');

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
  const modalWatchedBtn = modalContent.querySelector('[data-watched-btn]');
  const modalQueueBtn = modalContent.querySelector('[data-queue-btn]');
  modalWatchedBtn.addEventListener('click', onModalWatchedBtnClick);
  modalQueueBtn.addEventListener('click', onModalQueueBtnClick);
}

function onModalWatchedBtnClick(event) {
  //write here
}

function onModalQueueBtnClick(event) {
  //write here
}

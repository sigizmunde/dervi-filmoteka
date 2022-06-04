// draft file

const movieModal = document.querySelector('.modal');

export function openModal() {
  movieModal.classList.remove('is-hidden');
  movieModal.classList.add('open');
}

function closeModal() {
  movieModal.classList.remove('open');
  movieModal.classList.add('is-hidden');
}

movieModal.addEventListener('click', onCloseClick);

function onCloseClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  closeModal();
}

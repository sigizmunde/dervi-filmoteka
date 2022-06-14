import { moviesCashe } from './global.js';
import { refs } from './global.js';
import { DataStorage } from './data.js';
const data = new DataStorage();
export let timerID = null;

// action btn on the movie card
export function onQueueBtnCard(btn, id) {
  console.log('cashe is ', moviesCashe);
  const movieCard = btn.closest('.card');

  if (data.getQueue().find(item => item.id === id)) {
    cancelBtnApperingAndPlacement(movieCard);

    timerID = setTimeout(() => {
      refs.cancelBtn.classList.add('is-hidden');
      data.removeFromQueue(id);
      movieCard.classList.remove('in-queue');
      movieCard.remove();
    }, 3000);

    return;
  }

  let movie = data.getWatched().find(item => item.id === id);
  console.log(movie);
  if (movie) {
    data.removeFromWatched(id);
    movieCard.classList.remove('in-watched');
  }

  if (!movie) {
    movie = moviesCashe.find(item => item.id === id);
  }
  data.addToQueue(movie);
  movieCard.classList.add('in-queue');
  // add notify
}

export function onWatchedBtnCard(btn, id) {
  console.log('cashe is ', moviesCashe);
  const movieCard = btn.closest('.card');

  if (data.getWatched().find(item => item.id === id)) {

    cancelBtnApperingAndPlacement(movieCard);

    timerID = setTimeout(() => {
      refs.cancelBtn.classList.add('is-hidden');
      data.removeFromWatched(id);
      movieCard.classList.remove('in-watched');
      movieCard.remove();
    }, 3000);
    return;
  }

  let movie = data.getQueue().find(item => item.id === id);
  if (movie) {
    data.removeFromQueue(id);
    movieCard.classList.remove('in-queue');
  }

  if (!movie) {
    movie = moviesCashe.find(item => item.id === id);
  }
  data.addToWatched(movie);
  movieCard.classList.add('in-watched');
  // add notify
}

function cancelBtnApperingAndPlacement(movieCard) {
  refs.cancelBtn.classList.remove('is-hidden');
  refs.cancelBtn.classList.add('cancel-animation');
  refs.cancelBtn.style.top = `${movieCard.offsetTop}px`;
  refs.cancelBtn.style.left = `${Math.floor(movieCard.offsetLeft - 1)}px`;
}

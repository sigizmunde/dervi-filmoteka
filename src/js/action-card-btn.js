import { DataStorage } from './data.js';
const data = new DataStorage();

// action btn on the movie card
export function onQueueBtnCard(btn, id) {
  const movieCard = btn.closest('.card');

  if (movieCard.classList.contains('in-queue')) {
    data.removeFromQueue(id);
    movieCard.classList.remove('in-queue');
    return;
  }

  if (movieCard.classList.contains('in-watched')) {
    data.removeFromWatched(id);
    movieCard.classList.remove('in-watched');
  }

  movieCard.classList.add('in-queue');
  data.addToQueue(id);
  // add notify
}

export function onWatchedBtnCard(btn, id) {
  const movieCard = btn.closest('.card');

  if (movieCard.classList.contains('in-watched')) {
    data.removeFromWatched(id);
    movieCard.classList.remove('in-watched');
    return;
  }

  if (movieCard.classList.contains('in-queue')) {
    data.removeFromQueue(id);
    movieCard.classList.remove('in-queue');
  }

  movieCard.classList.add('in-watched');
  data.addToWatched(id);
  // add notify
}

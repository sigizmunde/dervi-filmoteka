import { DataStorage } from './data.js';
const data = new DataStorage();

// action btn on the movie card
export function onQueueBtnCard(btn, id) {
  const movieCard = btn.closest('.card');

  if (movieCard.classList.contains('in-watched')) {
    data.removeFromWatched(id);
    movieCard.classList.remove('in-watched');
  }

  movieCard.classList.toggle('in-queue');

  movieCard.classList.contains('in-queue')
    ? data.removeFromQueue(id)
    : data.addToQueue(id);

  // add notify
}

export function onWatchedBtnCard(btn, id) {
  const movieCard = btn.closest('.card');

  if (movieCard.classList.contains('in-queue')) {
    data.removeFromQueue(id);
    movieCard.classList.remove('in-queue');
  }

  movieCard.classList.toggle('in-watched');

  movieCard.classList.contains('in-watched')
    ? data.removeFromWatched(id)
    : data.addToWatched(id);

  // add notify
}

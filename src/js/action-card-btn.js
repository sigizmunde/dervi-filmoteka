import { moviesCashe } from './global.js';
import { DataStorage } from './data.js';
const data = new DataStorage();

// action btn on the movie card
export function onQueueBtnCard(btn, id) {
  console.log('cashe is ', moviesCashe);
  const movieCard = btn.closest('.card');

  if (data.getQueue().find(item => item.id === id)) {
    data.removeFromQueue(id);
    movieCard.classList.remove('in-queue');
    return;
  }

  if (data.getWatched().find(item => item.id === id)) {
    data.removeFromWatched(id);
    movieCard.classList.remove('in-watched');
  }

  const movie = moviesCashe.find(item => item.id === id);
  data.addToQueue(movie);
  movieCard.classList.add('in-queue');
  // add notify
}

export function onWatchedBtnCard(btn, id) {
  console.log('cashe is ', moviesCashe);
  const movieCard = btn.closest('.card');

  if (data.getWatched().find(item => item.id === id)) {
    data.removeFromWatched(id);
    movieCard.classList.remove('in-watched');
    return;
  }

  if (data.getQueue().find(item => item.id === id)) {
    data.removeFromQueue(id);
    movieCard.classList.remove('in-queue');
  }

  movieCard.classList.add('in-watched');
  const movie = moviesCashe.find(item => item.id === id);
  data.addToWatched(movie);
  // add notify
}

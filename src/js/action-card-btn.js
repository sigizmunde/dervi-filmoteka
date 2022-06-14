import { moviesCashe } from './global.js';
import { DataStorage } from './data.js';
const data = new DataStorage();

// action btn on the movie card
export function onQueueBtnCard(btn, id) {
  console.log('cashe is ', moviesCashe.state);
  const movieCard = btn.closest('.card');

  if (data.getQueue().find(item => item.id === id)) {
    data.removeFromQueue(id);
    movieCard.classList.remove('in-queue');
    return;
  }

  let movie = data.getWatched().find(item => item.id === id);
  if (movie) {
    data.removeFromWatched(id);
    movieCard.classList.remove('in-watched');
  }

  if (!movie) {
    movie = moviesCashe.state.find(item => item.id === id);
  }
  data.addToQueue(movie);
  movieCard.classList.add('in-queue');
  // add notify
}

export function onWatchedBtnCard(btn, id) {
  console.log('cashe is ', moviesCashe.state);
  const movieCard = btn.closest('.card');

  if (data.getWatched().find(item => item.id === id)) {
    data.removeFromWatched(id);
    movieCard.classList.remove('in-watched');
    return;
  }

  let movie = data.getQueue().find(item => item.id === id);
  if (movie) {
    data.removeFromQueue(id);
    movieCard.classList.remove('in-queue');
  }

  if (!movie) {
    movie = moviesCashe.state.find(item => item.id === id);
  }
  data.addToWatched(movie);
  movieCard.classList.add('in-watched');
  // add notify
}

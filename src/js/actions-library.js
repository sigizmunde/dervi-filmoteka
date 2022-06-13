import { DataStorage } from './data.js';
import { refs } from './global.js';
const data = new DataStorage();

// export function onQueueBtn() {
//   console.log('onQueueBtn');
// }
// export function onWatchedBtn() {
//   console.log('onWatchedBtn');
// }

// action btn on the movie card
export function onQueueBtnCard(btn, id) {
  const movieCard = btn.closest('.card');

  movieCard.classList.toggle('in-queue');

  movieCard.classList.contains('in-queue')
    ? data.removeFromQueue(id)
    : data.addToQueue(id);

  // add notify
}

export function onWatchedBtnCard(btn, id) {
  const movieCard = btn.closest('.card');

  movieCard.classList.toggle('in-watched');

  movieCard.classList.contains('in-watched')
    ? data.removeFromWatched(id)
    : data.addToWatched(id);

  // add notify
}

// action btn in the movie modal
export function onQueueBtnModal(event) {
  const currentMovieId = event.target.dataset.movieid;
  const currentMovieIdNum = Number(currentMovieId);

  console.log('queueBtnModal', event.target.classlist);
  event.target.classlist.toggle('active-btn');

  event.target.classlist.contains('active-btn')
    ? data.removeFromQueue(currentMovieIdNum)
    : data.addToQueue(currentMovieIdNum);
  // add notify
}

export function onWatchedBtnModal(event) {
  const currentMovieId = event.target.dataset.movieid;
  const currentMovieIdNum = Number(currentMovieId);

  console.log('watchedBtnModal', event.target.classlist);
  event.target.classlist.toggle('active-btn');

  event.target.classlist.contains('active-btn')
    ? data.removeFromWatched(currentMovieIdNum)
    : data.addToWatched(currentMovieIdNum);
  // add notify
}

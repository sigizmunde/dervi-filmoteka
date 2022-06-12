import { DataStorage } from './data.js';
// import { refs } from './global.js';
const data = new DataStorage();

// action btn on the movie card
export function onQueueBtnCard(btn, id) {
  const movieCard = btn.closest('.card');

  if (movieCard.classList.contains('in-queue')) {
    data.removeFromQueue(id);
    movieCard.classList.remove('in-queue');

    // movieModalBtn.classList.remove('active-btn');
    // add notify
    return;
  }

  if (movieCard.classList.contains('in-watched')) {
    data.removeFromWatched(id);
    movieCard.classList.remove('in-watched');
    // movieModalBtn.classList.remove('active-btn');
  }

  movieCard.classList.add('in-queue');
  // movieModalBtn.classList.add('active-btn');
  data.addToQueue(id);
  // add notify
}

export function onWatchedBtnCard(btn, id) {
  const movieCard = btn.closest('.card');

  if (movieCard.classList.contains('in-watched')) {
    data.removeFromWatched(id);
    movieCard.classList.remove('in-watched');
    // movieModalBtn.classList.remove('active-btn');
    // add notify
    return;
  }

  if (movieCard.classList.contains('in-queue')) {
    data.removeFromQueue(id);
    movieCard.classList.remove('in-queue');
    // movieModalBtn.classList.remove('active-btn');
  }

  movieCard.classList.add('in-watched');
  data.addToWatched(id);
  // // movieModalBtn.classList.add('active-btn');
  // add notify
}

// action btn in the movie modal
// export function onQueueBtnModal(id) {
//   const queueBtn = document.querySelector('.queue-btn');
//   console.log('queueBtn', queueBtn);
//     if (movieModalBtn.contains('active-btn')) {
//       data.removeFromQueue(id);
//     }
//     movieModalBtn.classList.add('active-btn');
//     data.addToQueue(id);
// }

// export function onWatchedBtnModal(id) {
//   const watchedBtn = document.querySelector('.watched-btn');
//   console.log('watchedBtn', watchedBtn);
//     if (movieModalBtn.contains('active-btn')) {
//       data.removeFromWatched(id);
//     }
//     movieModalBtn.classList.add('active-btn');
//     data.addToWatched(id);
// }

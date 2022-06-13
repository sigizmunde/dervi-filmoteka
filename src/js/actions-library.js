import { DataStorage } from './data.js';
import { refs } from './global.js';
const data = new DataStorage();
export let timerID = null;

// action btn on the movie card
export function onQueueBtnCard(btn, id) {
  const movieCard = btn.closest('.card');

  if (movieCard.classList.contains('in-queue')) {
    undoBtnApperingAndPlacement(movieCard);

    timerID = setTimeout(() => {
      refs.undoBtn.classList.add('is-hidden');
      data.removeFromQueue(id);
      movieCard.classList.remove('in-queue');
      movieCard.remove();
      // add notify
    }, 3000);

    // data.removeFromQueue(id);
    // movieCard.classList.remove('in-queue');
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
    undoBtnApperingAndPlacement(movieCard);

    timerID = setTimeout(() => {
      refs.undoBtn.classList.add('is-hidden');
      data.removeFromWatched(id);
      movieCard.classList.remove('in-watched');
      movieCard.remove();
      // add notify
    }, 3000);

    // data.removeFromWatched(id);
    // movieCard.classList.remove('in-watched');
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
  // movieModalBtn.classList.add('active-btn');
  // add notify
}

function undoBtnApperingAndPlacement(movieCard) {
  refs.undoBtn.classList.remove('is-hidden');
  refs.undoBtn.style.top = `${movieCard.offsetTop}px`;
  refs.undoBtn.style.left = `${Math.floor(movieCard.offsetLeft - 1)}px`;
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

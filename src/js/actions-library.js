import { DataStorage } from './data.js';
const data = new DataStorage();

function addDeleteMovieQueue(moviedId) {
  const queueBtn = document.querySelector('.queue-btn');
  if (queueBtn.contains('active-btn')) {
    data.removeFromQueue(moviedId);
  }
  data.addToQueue(moviedId);
  queueBtn.classList.add('active-btn');
}

function addDeleteMovieWatched(movieId) {}

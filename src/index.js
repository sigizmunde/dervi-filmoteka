import './sass/main.scss'; // draft file
import { init } from './js/controller'; // movies

document.addEventListener('DOMContentLoaded', init);

//================================= test field =======================================
import { DataStorage } from './js/data';
const data = new DataStorage();
export const watchedMovieData = data.getWatched();
export const queueMovieData = data.getQueue();
// console.log(watchedMovieData);
// console.log(queueMovieData);

const temporaryWatchedList = [
  299536, 383498, 500664, 466282, 455980, 62286, 338953, 51,
];
// const temporaryWatchedList = [];
const temporaryQueueList = [489931, 454283, 421792, 429300, 857, 470918];
// const temporaryQueueList = [];

for (let i = 0; i < temporaryWatchedList.length; i += 1) {
  data.addToWatched(temporaryWatchedList[i]);
}
for (let i = 0; i < temporaryQueueList.length; i += 1) {
  data.addToQueue(temporaryQueueList[i]);
}
// console.log(data.getWatched());
// console.log(data.getQueue());
//====================================================================================

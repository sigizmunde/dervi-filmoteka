import './sass/main.scss'; // draft file
import { init } from './js/controller'; // movies

document.addEventListener('DOMContentLoaded', init);

//================================= test field =======================================

import { DataStorage } from './js/data';
const data = new DataStorage();

const temporaryWatchedList = [
  299536, 383498, 500664, 466282, 455980, 62286, 631843,
];
const temporaryQueueList = [
  489931, 454283, 421792, 429300, 857, 470918, 379686,
];
// for (let i = 0; i < temporaryWatchedList.length; i += 1) {
//   data.addToWatched(temporaryWatchedList[i]);
// }
// for (let i = 0; i < temporaryQueueList.length; i += 1) {
//   data.addToQueue(temporaryQueueList[i]);
// }
// console.log(data.getWatched());
// console.log(data.getQueue());
//====================================================================================

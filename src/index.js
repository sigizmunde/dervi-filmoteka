import './sass/main.scss'; // draft file
// import './js/draft'; // draft file
import { init } from './js/controller'; // movies

document.addEventListener('DOMContentLoaded', init);

//================================= test field =======================================
import { DataStorage } from './js/data';
const data = new DataStorage();
const watchedMovieData = data.getWatched();
const queueMovieData = data.getQueue();
// console.log(watchedMovieData);
// console.log(queueMovieData);

// data.addToWatched(51);
// console.log(data.getWatched());
data.addToWatched(507086);
data.addToWatched(675353);
data.addToWatched(648579);
data.addToWatched(338953);

data.addToWatched(13);
// data.addToWatched(51);
data.addToWatched(27);
// console.log(data.getWatched());

data.removeFromWatched(15);
data.removeFromWatched(13);
data.addToWatched(18);
data.addToWatched(26);
data.removeFromWatched(26);
data.addToWatched(33);
// console.log(data.getWatched());

data.addToQueue(831946);
data.addToQueue(705861);
data.addToQueue(453395);
// console.log(data.getQueue());

//====================================================================================

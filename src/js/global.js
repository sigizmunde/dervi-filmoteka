// module for all the global constants and variables

// export const API_KEY = '8302862792abaeee103b53516f1a680a';
export const API_KEY = 'ed9b8dd4dcf22d9d746c4e21c6321e97';
export const API_BASE_URL = 'https://api.themoviedb.org/3';
export const API_IMG_URL = 'http://image.tmdb.org/t/p/w500';
export const NOPOSTER_IMG_URL = './images/noposter.jpg';
import { DataStorage } from './data';

export const refs = {};
// export let watchedIdArr = JSON.parse(localStorage.getItem('watched'));
export let watchedIdArr = new DataStorage().getWatched();
export let queueIdArr = JSON.parse(localStorage.getItem('queue'));
// console.log(watchedIdArr);

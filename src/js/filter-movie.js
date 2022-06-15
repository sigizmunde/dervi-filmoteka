import { fetchGenres, setToStorage, getFromStorage } from './fetch-genres';
// import { renderImages } from './render-main-list';
// import { getGenresFromLocalStorage } from './genre-local-storage';

function setGenresToStorage() {
  // let query = `genre/movie/list?`;
  fetchGenres();
}
setGenresToStorage()


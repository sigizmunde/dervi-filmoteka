// draft file

// todo fetching the genres och loging out--------------------------
const API_KEY = '8302862792abaeee103b53516f1a680a';
const BASE_URL = 'https://api.themoviedb.org/3/';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w342/';

fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    fetchGenres(data.genres);
  })
  .catch(error => {
    console.log(error);
  });

function fetchGenres(data) {
  // console.log(data);
}
// *------------------------------------------------------------------

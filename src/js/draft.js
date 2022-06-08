// // draft file

// import { openModal } from './modal.js';
// // import dummy from './dummy-array-objs/trending-movies.json';
// const v4Auth =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzAyODYyNzkyYWJhZWVlMTAzYjUzNTE2ZjFhNjgwYSIsInN1YiI6IjYyOTYzY2FiZDQ4Y2VlMGQ3MTIzM2MwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M248raofLEo0F8tv67xOg13dzslsK-jehk_QOEqvYj8';

// const API_KEY = '8302862792abaeee103b53516f1a680a';
// const BASE_URL = 'https://api.themoviedb.org/3/';
// const IMAGE_PATH = 'https://image.tmdb.org/t/p/w342/';

// const cardSection = document.querySelector('.card-section');
// const searchForm = document.querySelector('.movie-search');
// const homePage = document.querySelector('.nav-home');
// console.log(homePage);

// searchForm.addEventListener('submit', onSearchForm);
// // homePage.addEventListener('click', onFetchPopulary);

// // * this function is randering the first page

// function onFetchPopulary() {
//   fetch(`${BASE_URL}trending/all/day?api_key=${API_KEY}`)
//     .then(resolve => resolve.json())
//     .then(data => {
//       console.log(data);
//     });
// }

// // * this submit-event function throwing forward "search word"
// function onSearchForm(event) {
//   event.preventDefault();
//   const query = event.target.elements.query.value;

//   getMovieByQuery(query);
// }

// // * this function is taking "search word" and fetching
// function getMovieByQuery(searchQuery) {
//   fetch(
//     `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`
//   )
//     .then(resolve => resolve.json())
//     .then(data => {
//       console.log(data.genres);
//       cardSection.innerHTML = '';
//       cardMarkup(data.results);
//     })
//     .catch(err => {
//       alert(err);
//     });
// }

// // * this function is marking up the movie card into a div"container"
// // cardMarkup(dummy.results);

// function cardMarkup(results) {
//   console.log(results);
//   const markup = results
//     .map(
//       ({ poster_path, title, name }) => `
//       <li class="card">
//         <a href="" class="card-link">
//           <div class="card-button-slider">
//             <img src="${IMAGE_PATH}${poster_path}" class="card-image" alt="" />
//             <div class="card-button-background">
//              <button class="card-button in-watched">watched</button>
//               <button class="card-button in-queue">queue</button>
//              </div>
//           </div>
//           <div class="card-label-wrapper">
//             <div class="card-label-in-watched"></div>
//             <div class="card-label-in-queue"></div>
//           </div>
//           <div class="card-body">
//             <p class="card-title"><b>${title || name}</b></p>          
//            <p class="card-genres"><b>Genres..</b></p>          
//           </div>
//         </a>
//       </li>`
//     )
//     .join('');
//   // console.log(markup);

//   return cardSection.insertAdjacentHTML('beforeend', markup);
// }

// // openModal();

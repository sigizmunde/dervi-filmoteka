import APIService from './movie-api';
import { API_IMG_URL } from './global';

const api = new APIService();

const genres = api.getGenres().map(genre => {
  return {
    [genre.id]: genre.name,
  };
});

console.log(genres);

export function showSliderMovies(selector) {
  api
    .getTrending()
    .then(res => res.results)
    .then(data => {
      sliderCardsTpl(data, selector);
      slider();
    });
}

function sliderCardsTpl(objectsArray, selector) {
  objectsArray.map(movie => {
    selector.innerHTML += `
        <li class="card splide__slide">
          <a href="" class="card-link" movie-id="${movie.id}">
            <div class="splide__img-container">
              <img
                src="${API_IMG_URL}${movie.poster_path}"
                class="splide__img"
                alt=""
              />
            </div>
            <div class="splide__card-body">
              <p class="splide__card-title"><b>${movie.title}</b></p>
              <p class="splide__card-genres"><b>${movie.genre_ids} | ${movie.release_date}</b></p>
            </div>
          </a>
        </li>`;
  });
}

function slider() {
  const splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    gap: '20px',
    width: '100vw',
    pagination: false,
    perPage: 3,
    autoScroll: {
      speed: 1,
    },
  });

  splide.mount(window.splide.Extensions);
}

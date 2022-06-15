import APIService from './movie-api';
import { API_IMG_URL, moviesCashe } from './global';
import { Movie } from './movies';
import { DataStorage } from './data';

const api = new APIService();
const genres = api.getGenres().reduce((acc, genre) => {
  return { ...acc, [genre.id]: genre.name };
}, {});

export function showSliderMovies(selector) {
  // api
  //   .getPremiers()
  //   .then(res => res.results)
  //   .then(data => {
  //     sliderCardsTpl(data, selector);
  //     splide.mount(window.splide.Extensions);
  //   })
  //   .catch(reject => console.log(reject));
  const data = new DataStorage();
  sliderCardsTpl(data.getWatched(), selector);
  splide.mount(window.splide.Extensions);
}

export const splide = new Splide('.splide', {
  type: 'loop',
  drag: 'free',
  focus: 'center',
  gap: '20px',
  pagination: false,
  perPage: 10,
  autoScroll: {
    speed: 1,
  },
});

function getGenresForSlider(genreArr, genres) {
  const showedGenres = [];
  let index = 0;
  for (item of genreArr) {
    index++;
    if (index > 2) {
      showedGenres.push('others');
      break;
    }
    showedGenres.push(genres[item]);
  }

  return showedGenres.join(', ');
}

function sliderCardsTpl(objectsArray, selector) {
  objectsArray.map(obj => {
    const movie = new Movie(obj);
    moviesCashe.state.push(movie);
    const gendersList = getGenresForSlider(obj.genres, genres); //!!!!!!!!
    selector.innerHTML += `
        <li class="card splide__slide">
          <a href="" class="card-link" data-id="${obj.id}">
            <div class="splide__img-container">
              <img
                src="${API_IMG_URL}${obj.posterPath}" 
                class="splide__img"
                alt=""
              />
            </div>
            <div class="splide__card-body">
              <p class="splide__card-title"><b>${obj.title}</b></p>
              <p class="splide__card-genres"><b>${gendersList} | ${obj.releaseDate.slice(
      // !!!!!!!
      0,
      4
    )}</b>
              </p>
            </div>
          </a>
        </li>`;
  });
}

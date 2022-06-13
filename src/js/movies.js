/*
      ОПИСАНИЕ РАБОТЫ МОДУЛЯ

      В модуле прописан класс "Movie" для работы с каждой карточкой фильма

      --Получить список трендов (популярных фильмов за неделю):

        В модуле "controller.js", при инициализации (функция "init()"") визвана функция "getMovieList()".

*/

// main module to manipulate with data inside an application

import {
  API_KEY,
  API_BASE_URL,
  API_IMG_URL,
  NOPOSTER_IMG_URL,
  refs,
  watchedIdArr,
  queueIdArr,
} from './global';

// import { fetchMovie, fetchMovies, getGenres } from 'movie-api';
import { showMovies, showMovieInfo } from './markup';
import APIService from './movie-api';
import * as initialGenres from './dummy-array-objs/genres.json';
import { DataStorage } from './data.js';
const dataStorage = new DataStorage();

class Movie {
  constructor(responseData) {
    // console.log(responseData);
    this.id = responseData.id;
    this.posterPath = this.#getPosterPath(responseData.poster_path);
    this.title = responseData.title;
    this.originalTitle = responseData.original_title;
    this.popularity = responseData.popularity;
    this.genres = responseData.genre_ids;
    this.releaseDate = responseData.release_date.substr(0, 4);
    this.inWatched = this.#getInWatched();
    this.inQueue = this.#getInQueue();
    this.voteAverage = responseData.vote_average;
    this.voteCount = responseData.vote_count;
    this.popularity = responseData.popularity;
    this.overview = responseData.overview;
    this.video = null; 

  

    // В API метод getMovie возвращает жанры в свойстве "genres", значением которого есть массив объектов
    // Поэтому, если не удалось получить список жанров - получаем из метода "genres"
    if (!this.genres) {
      this.genres = [];
      responseData.genres.map(item => {
        this.genres.push(item.id);
      });
    }
  }

  // Genres in row
  genresInRow(maxCount = 0) {
    return this.#parseGenresByString(maxCount);
  }

  get watchedOrQueueClass() {
    return this.inWatched ? 'in-watched' : this.inQueue ? 'in-queue' : '';
  }

  // Private methods

  #parseGenresByString(maxCount = 0) {
    const genreList = this.#getGenres();
    const genreNames = [];

    for (let i = 0; i < this.genres.length; i++) {
      if (maxCount && i === maxCount - 1 && i < this.genres.length - 1) {
        genreNames.push('others');
        break;
      }

      const findValue = genreList.find(item => item.id === this.genres[i]);

      if (findValue) {
        genreNames.push(findValue.name);
      }
    }

    return genreNames.join(', ');
  }

  #getInWatched() {
    return !!dataStorage.getWatched().find(item => item === this.id);
  }

  #getInQueue() {
    return !!dataStorage.getQueue().find(item => item === this.id);
  }

  #getGenres() {
    return API.getGenres();
  }

  #getPosterPath(poster_path) {
    const fullPosterPatch = `${API_IMG_URL}${poster_path}`;
    return fullPosterPatch;
    // return NOPOSTER_IMG_URL;

    // const poster = new Image();
    // poster.src = fullPosterPatch;
    //
    // poster.onload = () => fullPosterPatch;
    // poster.onerror = () => alert("NoImage");
  }

  
  getVideos(number = 0) {
    // API.getVideos(this.id)
    //   .then(video => {
    //     console.log(video.results);
    //     this.video = `https://www.youtube.com/watch?v=${video.results[number].key}`;
    //   })    

    return API.getVideos(this.id);
  }
}

// const dataStorage = new DataStorage(API_KEY);
const API = new APIService();

// let currentMovieList = [{ film1 }, { film2 }, { film3 }];

export function getMovieList(params) {
  // depending on params requests API or data
  if (!params) {
    API.getTrending()
      .then(responseData => {
        console.log(
          `Current page: ${responseData.page}, total page: ${responseData.total_pages}`
        ); // --> for pagination
        return responseData.results;
      })
      .then(movieList => {
        const objectsArray = [];

        movieList.map(movieItem => {
          const movie = new Movie(movieItem); // class instance

          objectsArray.push(movie);
        });

        showMovies(objectsArray);
      })
      .catch(result => console.log(result));
  }
}

export function getAndShowLibrary(idArray) {
  let promisesMovies = [];
  idArray.map(movieId => {
    try {
      promisesMovies.push(
        API.getMovie(movieId).then(response => {
          const libMovie = new Movie(response);
          response.genres = response.genres.map(item => {
            return item.id;
          });
          return libMovie;
        })
      );
    } catch (err) {
      console.log(err);
    }
  });
  Promise.all(promisesMovies)
    .then(response => {
      showMovies(response);
    })
    .catch(result => console.log(result));
}

export function getMovieInfo(id) {
  if (id) {    
    API.getMovie(id).then(movieDetails => {         // Get movie info
      const movie = new Movie(movieDetails);
      movie.getVideos().then(video => {             // Get movie video
        movie.video = `https://www.youtube.com/watch?v=${video.results[0].key}`;
        showMovieInfo(movie);
      })      
    });
    refs.movieModal.classList.remove('is-hidden');
    
  }
}

export function searchMovies(params, page = 1) {
  // depending on params searches films in current list
  if (params) {
    API.searchMovie(params, page)
      .then(responseData => {
        console.log(
          `Current page: ${responseData.page}, total page: ${responseData.total_pages}`
        ); // --> for pagination
        return responseData.results;
      })
      .then(movieList => {
        const objectsArray = [];
        movieList.map(movieItem => {
          const movie = new Movie(movieItem); // class instance

          objectsArray.push(movie);
        });

        showMovies(objectsArray);
      })
      .catch(result => console.log(result));
  }
}

export function getPremiers() {
  // depending on params requests API or data
  API.getPremiers()
    .then(responseData => {
      console.log(
        `Current page: ${responseData.page}, total page: ${responseData.total_pages}`
      ); // --> for pagination
      return responseData.results;
    })
    .then(movieList => {
      const objectsArray = [];

      movieList.map(movieItem => {
        const movie = new Movie(movieItem); // class instance

        objectsArray.push(movie);
      });

      /* ------------------

      В это место можно добавить обработчик вывода трендов
      Переменная "objectsArray" содержит массив объектов фильмов (массив карточек)
      Структура объекта:
      {
        id:             [ Идентификатор фильма ]
        inQueue:        [ Фильм находиться в очереди на просмотр ]
        inWatched:      [ Фильм находиться в просмотренных ]
        originalTitle:  [ Оригинальное название фильма ]
        overview:       [ Описание фильма ]
        popularity:     [ Популярность фильма ]
        posterPath:     [ Ссылка на постер фильма ]
        releaseDate:    [ Год фильма ]
        title:          [ Название фильма ]
        voteAverage:    [ Рейтинг фильма ]
        voteCount:      [ Количество проголосовавших ]
      }

      Пример: 
        showMovies(objectsArray) - вывод списка на лгавную страницу
        
      ------------------ */
      
      console.log(objectsArray);     
    })
    .catch(result => console.log(result));
  
}
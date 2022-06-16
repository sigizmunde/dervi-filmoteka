import { get, set, ref, child } from 'firebase/database';
import { db } from './firebase';

export class DataStorage {
  constructor() {
    // singleton pattern
    if (DataStorage._instance) {
      return DataStorage._instance;
    }
    DataStorage._instance = this;
    // singleton pattern
    this.user = null;
    this.functionData = null;
  }

  getWatched() {
    try {
      const serializedData = localStorage.getItem('watched');
      const movieArr =
        serializedData === null ? [] : JSON.parse(serializedData);
      if (movieArr) {
        return movieArr.filter(item => item && item.hasOwnProperty('id'));
      }
    } catch (err) {
      console.log('Get library error: ', err);
    }
    return [];
  }

  getQueue() {
    try {
      const serializedData = localStorage.getItem('queue');
      const movieArr =
        serializedData === null ? [] : JSON.parse(serializedData);
      if (movieArr) {
        return movieArr.filter(item => item && item.hasOwnProperty('id'));
      }
    } catch (err) {
      console.log('Get library error: ', err);
    }
    return [];
  }

  #setWatched(watchedArr) {
    try {
      localStorage.setItem(
        'watched',
        JSON.stringify(
          watchedArr.filter(item => item && item.hasOwnProperty('id'))
        )
      );
    } catch (err) {
      console.error(err);
    }
  }

  #setQueue(queueArr) {
    try {
      localStorage.setItem(
        'queue',
        JSON.stringify(
          queueArr.filter(item => item && item.hasOwnProperty('id'))
        )
      );
    } catch (err) {
      console.error(err);
    }
  }

  addToWatched(movie) {
    const watchedArr = this.getWatched();
    let check = false;
    try {
      check = watchedArr.find(item => item && item.id === movie.id);
    } catch (err) {
      console.log(err);
    }
    if (check) {
      return;
    }
    watchedArr.unshift(movie);
    this.#setWatched(watchedArr);
  }

  removeFromWatched(movie) {
    let id = 0;
    if (typeof movie === 'number') {
      id = movie;
    } else {
      id = movie.id;
    }
    const watchedArr = this.getWatched();
    const newWatchedArr = watchedArr.filter(item => item && item.id !== id);
    this.#setWatched(newWatchedArr);
  }

  addToQueue(movie) {
    const queueArr = this.getQueue();
    if (queueArr.find(item => item && item.id === movie.id)) {
      return;
    }
    queueArr.unshift(movie);
    this.#setQueue(queueArr);
  }

  removeFromQueue(movie) {
    let id = 0;
    if (typeof movie === 'number') {
      id = movie;
    } else {
      id = movie.id;
    }
    const queueArr = this.getQueue();
    const newQueueArr = queueArr.filter(item => item && item.id !== id);
    this.#setQueue(newQueueArr);
  }

  //! getDatabase - если база пустая  - создать два пустьіх массива и записать в ls с помощью setWatch, setQueue, если пользователь есть - положить из firebase данньіе и записать их в ls. Вьвзьввается при регистрации в блоке регистрации. Окно закрьівается только после ее вьіполнения
  getDatabase() {
    if (this.user) {
      get(child(ref(db), 'users/' + this.user.uid)).then(snapshot => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          const library = JSON.parse(snapshot.val().library);

          if (library.watched) {
            this.#setWatched(library.watched);
          }
          if (library.queue) {
            this.#setQueue(library.queue);
          }
        } else {
          console.log('got no data');
        }
      });
    }
  }

  //! setDatabase - берет массивьі из ls, пишет их в fb - вьізьівается при методах изменения БД
  setDatabase() {
    if (this.user) {
      const libraryData = {
        watched: this.getWatched(),
        queue: this.getQueue(),
      };
      set(ref(db, 'users/' + this.user.uid), {
        library: JSON.stringify(libraryData),
      })
        .then(() => console.log('Firebase Realtime Database synchronized'))
        .catch(err => console.log('Oops! Database has not synchronized', err));
    }
  }
}

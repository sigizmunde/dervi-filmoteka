export class DataStorage {
  constructor() {
    // singleton pattern
    if (DataStorage._instance) {
      return DataStorage._instance;
    }
    DataStorage._instance = this;
    // singleton pattern
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
}

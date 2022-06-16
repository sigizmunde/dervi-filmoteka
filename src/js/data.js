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
      return movieArr.filter(item => item.hasOwnProperty('id'));
    } catch (err) {
      console.error('Get library error: ', err);
    }
    return [];
  }

  getQueue() {
    try {
      const serializedData = localStorage.getItem('queue');
      const movieArr =
        serializedData === null ? [] : JSON.parse(serializedData);
      return movieArr.filter(item => item.hasOwnProperty('id'));
    } catch (err) {
      console.error('Get library error: ', err);
    }
    return [];
  }

  #setWatched(watchedArr) {
    try {
      localStorage.setItem('watched', JSON.stringify(watchedArr));
    } catch (err) {
      console.error(err);
    }
  }

  #setQueue(queueArr) {
    try {
      localStorage.setItem('queue', JSON.stringify(queueArr));
    } catch (err) {
      console.error(err);
    }
  }

  addToWatched(movie) {
    const watchedArr = this.getWatched();
    let check = false;
    try {
      check = watchedArr.find(item => item.id === movie.id);
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
      console.log('number!');
    } else {
      id = movie.id;
      console.log('not a number!');
    }
    const watchedArr = this.getWatched();
    const newWatchedArr = watchedArr.filter(item => item.id !== id);
    this.#setWatched(newWatchedArr);
  }

  addToQueue(movie) {
    const queueArr = this.getQueue();
    if (queueArr.find(item => item.id === movie.id)) {
      return;
    }
    queueArr.unshift(movie);
    this.#setQueue(queueArr);
  }

  removeFromQueue(movie) {
    let id = 0;
    if (typeof movie === 'number') {
      id = movie;
      console.log('number!');
    } else {
      id = movie.id;
      console.log('not a number!');
    }
    const queueArr = this.getQueue();
    const newQueueArr = queueArr.filter(item => item.id !== id);
    this.#setQueue(newQueueArr);
  }
}

//! getDatabase - если база пустая  - создать два пустьіх массива и записать в ls с помощью setWatch, setQueue, если пользователь есть - положить из firebase данньіе и записать их в ls. Вьвзьввается при регистрации в блоке регистрации. Окно закрьівается только после ее вьіполнения
//! setDatabase - берет массивьі из ls, пишет их в fb - вьізьівается при методах изменения БД

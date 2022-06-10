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
      return serializedData === null ? [] : JSON.parse(serializedData);
    } catch (err) {
      console.error('Get state error: ', err);
    }
    return [];
  }

  getQueue() {
    try {
      const serializedData = localStorage.getItem('queue');
      return serializedData === null ? [] : JSON.parse(serializedData);
    } catch (err) {
      console.error('Get state error: ', err);
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

  addToWatched(id) {
    const watchedArr = this.getWatched();
    if (watchedArr.includes(id)) {
      return;
    }
    watchedArr.push(id);
    this.#setWatched(watchedArr);
  }

  removeFromWatched(id) {
    const watchedArr = this.getWatched();
    const index = watchedArr.indexOf(id);
    if (index < 0) {
      return;
    }
    watchedArr.splice(index, 1);
    this.#setWatched(watchedArr);
  }

  addToQueue(id) {
    const queueArr = this.getQueue();
    if (queueArr.includes(id)) {
      return;
    }
    queueArr.push(id);
    this.#setQueue(queueArr);
  }

  removeFromQueue(id) {
    const queueArr = this.getQueue();
    const index = queueArr.indexOf(id);
    if (index < 0) {
      return;
    }
    queueArr.splice(index, 1);
    this.#setQueue(queueArr);
  }
}

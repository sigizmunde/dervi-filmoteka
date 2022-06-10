 const KEY_WATCHED = 'Watched';
 const KEY_QUEUE = 'Queue';

export class DataStorage {

  constructor(apiKey) {
    // singleton pattern
    if (DataStorage._instance) {
      return DataStorage._instance;
    }
    DataStorage._instance = this;
    // singleton pattern

    this.apiKey = apiKey;
  }

  getWatched() {

      try {
        const serializedData = localStorage.getItem('watched');
        return serializedData === null ? [] : JSON.parse(serializedData);
      } catch (err) {
        console.error('Get state error: ', err);
      }
      return watchedArr;
    
  };

  getQueue() {
    
      try {
        const serializedData = localStorage.getItem('queue');
        return serializedData === null ? [] : JSON.parse(serializedData);
      } catch (err) {
        console.error('Get state error: ', err);
    }
    return queueArr;
    }
    

  setWatched(value) {
    localStorage.setItem(KEY_WATCHED, JSON.stringify(value));
  };

  setQueue(value) {
    localStorage.setItem(KEY_QUEUE, JSON.stringify(value))
  }
};

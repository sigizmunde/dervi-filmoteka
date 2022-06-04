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

  getWatched() {}

  getQueue() {}

  setWatched() {}

  setQueue() {}
}

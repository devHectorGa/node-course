import axios from 'axios';

export default class Searches {
  constructor() {
    this._history = [];
  }

  get getParamsMapBox() {
    return {
      language: 'es',
      limit: 5,
      access_token: process.env.MAPBOX_KEY,
    };
  }

  async city(place = '') {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
        params: this.getParamsMapBox,
      });

      const resp = await instance.get();
      console.log(resp.data);
      return [];
    } catch (error) {}
  }
}

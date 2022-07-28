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
      return resp.data.features.map((place) => ({
        id: place.id,
        place_name: place.place_name,
        lng: place.center[0],
        lat: place.center[1],
      }));
    } catch (error) {
      throw error;
    }
  }
}

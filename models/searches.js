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

  get getParamsWeather() {
    return {
      appId: process.env.OPEN_WEATHER_KEY,
      units: 'metric',
      lang: 'es',
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

  async placeWeather(lat, lon) {
    try {
      const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather`,
        params: { ...this.getParamsWeather, lat, lon },
      });
      const resp = await instance.get();
      if (resp.data.cod === 200) {
        return {
          description: resp.data.weather[0].description,
          temp_min: resp.data.main.temp_min,
          temp_max: resp.data.main.temp_max,
          temp: resp.data.main.temp,
        };
      }
      throw 'Algo salio mal al traer la información del clima';
    } catch (error) {
      console.log(error);
    }
  }
}

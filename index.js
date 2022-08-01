import { config } from 'dotenv';
import {
  inquirerMenu,
  listPlaces,
  pause,
  readInput,
} from './helpers/inquirer.js';
import Searches from './models/searches.js';
config();

const main = async () => {
  let opt = '';
  const searches = new Searches();
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        const search = await readInput('Ciudad:');
        const places = await searches.city(search);
        const id = await listPlaces(places);
        if (!id) continue;
        const selectPlace = places.find((place) => place.id === id);
        searches.addPlaceToHistory(selectPlace.place_name);
        const weather = await searches.placeWeather(
          selectPlace.lat,
          selectPlace.lng
        );
        console.clear();
        console.log('\nInformación de la ciudad\n'.green);
        console.log('Ciudad:', selectPlace.place_name.green);
        console.log('Lat:', selectPlace.lat);
        console.log('Lng:', selectPlace.lng);
        console.log('Temperatura:', weather.temp);
        console.log('Máxima:', weather.temp_max);
        console.log('Mínima:', weather.temp_min);
        console.log('Cómo está el clima:', weather.description.green);
        break;
      case 2:
        searches.showHistory();
        break;
    }
    opt !== 0 && (await pause());
  } while (opt !== 0);
};

main();

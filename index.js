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
        const selectPlace = places.find((place) => place.id === id);
        console.log(selectPlace);
        break;
      case 2:
        console.log('Historial');
        break;
    }

    opt !== 0 && (await pause());
  } while (opt !== 0);
};

main();

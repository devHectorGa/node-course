import { inquirerMenu, pause, readInput } from './helpers/inquirer.js';
import Searches from './models/searches.js';

const main = async () => {
  let opt = '';
  const searches = new Searches();
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        const place = await readInput('Ciudad:');
        const cities = await searches.city(place);
        break;
      case 2:
        console.log('Historial');
        break;
    }

    opt !== 0 && (await pause());
  } while (opt !== 0);
};

main();

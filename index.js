import { inquirerMenu, pause, readInput } from './helpers/inquirer.js';

const main = async () => {
  let opt = '';
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        const desc = await readInput('Ciudad a buscar:');
        break;
      case 2:
        console.log('Historial');
        break;
    }

    opt !== 0 && (await pause());
  } while (opt !== 0);
};

main();

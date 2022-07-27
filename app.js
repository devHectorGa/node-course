import 'colors';
import { inquirerMenu, pause, readInput } from './helpers/inquirer.js';
import { saveDB } from './helpers/saveFile.js';
import Tasks from './models/tasks.js';

const main = async () => {
  let opt = '';
  const tasks = new Tasks();

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const desc = await readInput('Descripción:');
        tasks.createTask(desc);
        break;
      case '2':
        console.log(tasks.getList);
        break;
    }

    saveDB(tasks.getList);

    await pause();
  } while (opt !== '0');
};

main();

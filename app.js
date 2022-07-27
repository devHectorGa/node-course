import 'colors';
import {
  deleteTask,
  inquirerMenu,
  pause,
  readInput,
} from './helpers/inquirer.js';
import { readDB, saveDB } from './helpers/saveFile.js';
import Tasks from './models/tasks.js';

const main = async () => {
  let opt = '';
  const tasks = new Tasks();
  const data = await readDB();
  if (data) tasks.setTasksFromArray(data);

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        const desc = await readInput('Descripción:');
        tasks.createTask(desc);
        break;
      case '2':
        tasks.listComplete();
        break;
      case '3':
        tasks.listForState();
        break;
      case '4':
        tasks.listForState(false);
        break;
      case '6':
        const id = await deleteTask(tasks.getList);
        break;
    }

    saveDB(tasks.getList);

    await pause();
  } while (opt !== '0');
};

main();

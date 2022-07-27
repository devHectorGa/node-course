import 'colors';
import inquirer from 'inquirer';
import { separator } from './constants.js';

const menuOpts = [
  {
    type: 'list',
    name: 'option',
    message: '¿Qué desea hacer?',
    choices: ['opt1', 'opt2', 'opt3'],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log(separator.green);
  console.log('Seleccione una opción'.green);
  console.log(`${separator}\n`.green);

  const opt = await inquirer.prompt(menuOpts);
  return opt;
};

export { inquirerMenu };

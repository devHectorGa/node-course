import 'colors';
import inquirer from 'inquirer';
import { separator } from './constants.js';

const menuOpts = [
  {
    type: 'list',
    name: 'option',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: '1',
        name: '1. Crear tarea',
      },
      {
        value: '2',
        name: '2. Listar tareas',
      },
      {
        value: '3',
        name: '3. Listar tareas completada',
      },
      {
        value: '4',
        name: '4. Listar tareas pendientes',
      },
      {
        value: '5',
        name: '5. Completar tarea(s)',
      },
      {
        value: '6',
        name: '6. Borrar tarea',
      },
      {
        value: '0',
        name: '0. Salir',
      },
    ],
  },
];

export const inquirerMenu = async () => {
  console.clear();
  console.log(separator.green);
  console.log('Seleccione una opción'.green);
  console.log(`${separator}\n`.green);

  const { option } = await inquirer.prompt(menuOpts);
  return option;
};

export const pause = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'enter'.green} para continuar`,
    },
  ];
  console.log('\n');
  await inquirer.prompt(question);
};

export const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate: (value) => (!!value ? true : 'Por favor ingrese un valor'),
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

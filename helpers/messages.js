require('colors');
const { separator } = require('./constants');

const showMenu = () =>
  new Promise((resolve) => {
    console.clear();
    console.log(separator.green);
    console.log('Seleccione una opción'.green);
    console.log(`${separator}\n`.green);

    console.log(`${'1.'.green} Crear tarea`);
    console.log(`${'2.'.green} Listar tareas`);
    console.log(`${'3.'.green} Listar tareas completadas`);
    console.log(`${'4.'.green} Listar tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar tarea`);
    console.log(`${'0.'.green} Salir\n`);

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question(`Seleccione una opción: `, (opt) => {
      readline.close();
      resolve(opt);
    });
  });

const pause = () =>
  new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`Presione ${'ENTER'.green} para continuar.`, (opt) => {
      readline.close();
      resolve();
    });
  });

module.exports = {
  showMenu,
  pause,
};

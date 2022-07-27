const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola',
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Hasta que número queremos mostrar la tabla',
  })
  .check(({ b, h }) => {
    if (isNaN(b)) throw new Error('La base tiene que ser un número');
    if (isNaN(h)) throw new Error('El parámetro hasta tiene que ser un número');
    return true;
  }).argv;

module.exports = argv;

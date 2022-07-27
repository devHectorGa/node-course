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
  .check(({ b }) => {
    if (isNaN(b)) throw new Error('La base tiene que ser un número');
    return true;
  }).argv;

module.exports = argv;

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
  })
  .check(({ b }) => {
    if (isNaN(b)) throw new Error('La base tiene que ser un número');
    return true;
  }).argv;

console.clear();
console.log(argv);
console.log('base: yargs ', argv.base);

crearArchivo(argv.b, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
  .catch((err) => console.error(err));

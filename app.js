const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();
console.log(argv);
console.log('base: yargs ', argv.base);

crearArchivo(argv.b, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
  .catch((err) => console.error(err));

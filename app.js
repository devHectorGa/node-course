const { crearArchivo } = require('./helpers/multiplicar');

const base = 5;
crearArchivo(base)
  .then((fileName) => console.log(`Archivo ${fileName} creado exitosamente`))
  .catch((err) => console.log(err));

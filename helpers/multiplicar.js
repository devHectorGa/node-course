require('colors');
const fs = require('fs');

const crearArchivo = (base, listar = false) =>
  new Promise((resolve, reject) => {
    try {
      let salida = '===================\n'.green;
      salida += `   Tabla del ${base}    \n`.blue;
      salida += '===================\n\n'.green;

      for (let i = 1; i <= 10; i++) {
        salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
      }
      const nameFile = `tabla-${base}.txt`;

      listar && console.log(salida);

      fs.writeFileSync(nameFile, salida);

      resolve(nameFile);
    } catch (err) {
      reject(err);
    }
  });

module.exports = {
  crearArchivo,
};

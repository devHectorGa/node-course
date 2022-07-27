require('colors');
const fs = require('fs');

const crearArchivo = (base = 5, hasta = 10, listar = false) =>
  new Promise((resolve, reject) => {
    try {
      let salida = '===================\n';
      let consola = salida.green;
      salida += `   Tabla del ${base}    \n`;
      consola += `   Tabla del ${base}    \n`.blue;
      salida += '===================\n\n';
      consola += '===================\n\n'.green;

      for (let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
        consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
      }
      const nameFile = `tabla-${base}.txt`;

      listar && console.log(consola);

      fs.writeFileSync(nameFile, salida);

      resolve(nameFile);
    } catch (err) {
      reject(err);
    }
  });

module.exports = {
  crearArchivo,
};

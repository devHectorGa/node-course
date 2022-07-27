const fs = require('fs');

const crearArchivo = (base, listar = false) =>
  new Promise((resolve, reject) => {
    try {
      let salida = '===================\n';
      salida += `   Tabla del ${base}    \n`;
      salida += '===================\n\n';

      for (let i = 1; i <= 10; i++) {
        salida += `${base} * ${i} = ${base * i}\n`;
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

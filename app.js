require('colors');
const { showMenu, pause } = require('./helpers/messages');
console.clear();

const main = async () => {
  let opt = '';

  do {
    opt = await showMenu();
    console.log({ opt });
    await pause();
  } while (opt !== '0');
};

main();

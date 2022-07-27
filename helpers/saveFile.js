import fs from 'fs';

const dir = './db';
const fileName = 'db.json';
const pathToSave = `${dir}/${fileName}`;

export const saveDB = (data) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  fs.writeFileSync(pathToSave, JSON.stringify(data));
};

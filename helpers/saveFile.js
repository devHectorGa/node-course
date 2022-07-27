import fs from 'fs';

const dir = './db';
const fileName = 'db.json';
const pathFile = `${dir}/${fileName}`;

export const saveDB = (data) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  fs.writeFileSync(pathFile, JSON.stringify(data));
};

export const readDB = () => {
  if (!fs.existsSync(pathFile)) return null;

  const info = fs.readFileSync(pathFile, { encoding: 'utf-8' });
  const data = JSON.parse(info);

  return data;
};

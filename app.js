import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import hbs from 'hbs';
import { config } from 'dotenv';

config();

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const params = {
  title: 'Node Course',
  name: 'devHectorGa',
};

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (_, res) => {
  res.render('home', params);
});

app.get('/generic', (_, res) => {
  res.render('generic', { ...params, headerClass: 'alt' });
});

app.get('/elements', (_, res) => {
  res.render('elements', { ...params, headerClass: 'alt' });
});

app.get('*', (_, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

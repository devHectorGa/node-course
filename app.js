import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
const app = express();
const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (_, res) => {
  res.render('home');
});

app.get('/generic', (_, res) => {
  res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (_, res) => {
  res.sendFile(__dirname + '/public/elements.html');
});

app.get('*', (_, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

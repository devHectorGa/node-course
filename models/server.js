import { config } from 'dotenv';
import express from 'express';
const PORT = process.env.PORT || 3000;
config();

export default class Server {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.get('/api', (req, res) => {
      res.send('Hola Mundo');
    });
  }
  listen() {
    this.app.listen(PORT, () => {
      console.log(`Example app listening at http://localhost:${PORT}`);
    });
  }
}

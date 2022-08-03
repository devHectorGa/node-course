import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';

config();

const PORT = process.env.PORT || 3000;

export default class Server {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.get('/api', (req, res) => {
      res.json({
        message: 'get API',
      });
    });
    this.app.put('/api', (req, res) => {
      res.json({
        message: 'put API',
      });
    });
    this.app.post('/api', (req, res) => {
      res.status(201).json({
        message: 'post API',
      });
    });
    this.app.delete('/api', (req, res) => {
      res.json({
        message: 'delete API',
      });
    });
    this.app.patch('/api', (req, res) => {
      res.json({
        message: 'patch API',
      });
    });
  }

  listen() {
    this.app.listen(PORT, () => {
      console.log(`Example app listening at http://localhost:${PORT}`);
    });
  }
}

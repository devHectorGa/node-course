import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';

import authRoutes from '../routes/auth.js';
import usersRoutes from '../routes/users.js';
import { dbConnection } from '../database/config.js';

config();

const PORT = process.env.PORT || 3000;

export default class Server {
  constructor() {
    this.app = express();
    this.connectDB();
    this.middleware();
    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use('/api/auth', authRoutes);
    this.app.use('/api/users', usersRoutes);
  }

  listen() {
    this.app.listen(PORT, () => {
      console.log(`Example app listening at http://localhost:${PORT}`);
    });
  }
}

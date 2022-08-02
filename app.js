import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { config } from 'dotenv';

config();

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

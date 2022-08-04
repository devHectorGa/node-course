import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

export const dbConnection = async () => {
  await mongoose
    .connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Base de datos online'))
    .catch((err) => console.log('Error al conectar db', err))
    .finally(() => console.log('Proceso de conectar db finalizado'));
};

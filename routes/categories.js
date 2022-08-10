import { Router } from 'express';
import { check } from 'express-validator';
import { createCategory } from '../controllers/index.js';
import { validateJWT, validateUserData } from '../middlewares/index.js';

export const categoriesRoutes = Router();

categoriesRoutes.get('/', (_, res) => {
  res.json({ message: 'get' });
});

categoriesRoutes.get('/:id', (_, res) => {
  res.json({ message: 'get id' });
});

categoriesRoutes.post(
  '/',
  [
    validateJWT,
    check('name', 'Name es obligatorio').notEmpty(),
    validateUserData,
  ],
  createCategory
);

categoriesRoutes.put('/:id', (_, res) => {
  res.json({ message: 'put' });
});

categoriesRoutes.delete('/:id', (_, res) => {
  res.json({ message: 'delete' });
});

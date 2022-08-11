import { Router } from 'express';
import { check } from 'express-validator';
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from '../controllers/index.js';
import { existCategoryById } from '../helpers/db-validators.js';
import {
  isAdminRole,
  validateJWT,
  validateUserData,
} from '../middlewares/index.js';

export const categoriesRoutes = Router();

categoriesRoutes.get('/', getCategories);

categoriesRoutes.get(
  '/:id',
  [
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(existCategoryById),
    validateUserData,
  ],
  getCategory
);

categoriesRoutes.post(
  '/',
  [
    validateJWT,
    check('name', 'Name es obligatorio').notEmpty(),
    validateUserData,
  ],
  createCategory
);

categoriesRoutes.put(
  '/:id',
  [
    validateJWT,
    check('name', 'Name es obligatorio').notEmpty(),
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(existCategoryById),
    validateUserData,
  ],
  updateCategory
);

categoriesRoutes.delete(
  '/:id',
  [
    validateJWT,
    isAdminRole,
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(existCategoryById),
    validateUserData,
  ],
  deleteCategory
);

import { Router } from 'express';
import { check } from 'express-validator';
import {
  createProduct,
  deleteProduct,
  getProducts,
  getProduct,
  updateProduct,
} from '../controllers/index.js';
import {
  existCategoryById,
  existProductById,
} from '../helpers/db-validators.js';
import {
  isAdminRole,
  validateJWT,
  validateUserData,
} from '../middlewares/index.js';

export const productsRoutes = Router();

productsRoutes.get('/', getProducts);

productsRoutes.get(
  '/:id',
  [
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(existProductById),
    validateUserData,
  ],
  getProduct
);

productsRoutes.post(
  '/',
  [
    validateJWT,
    check('name', 'Name es obligatorio').notEmpty(),
    check('price', 'Price debe ser numérico').optional().isNumeric(),
    check('category', 'Formato categoria no es válido.').isMongoId(),
    check('category').custom(existCategoryById),
    check('description', 'Description is an string and less 6 characters')
      .isString()
      .isLength({ min: 6 })
      .optional(),
    check('available', 'Available is a boolean format').isBoolean().optional(),
    validateUserData,
  ],
  createProduct
);

productsRoutes.put(
  '/:id',
  [
    validateJWT,
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(existProductById),
    check('name', 'Name es obligatorio').notEmpty().optional(),
    check('price', 'Price debe ser numérico').optional().isNumeric(),
    check('category', 'Formato categoria no es válido.').optional().isMongoId(),
    check('category').optional().custom(existCategoryById),
    check('description', 'Description is an string and less 6 characters')
      .isString()
      .isLength({ min: 6 })
      .optional(),
    check('available', 'Available is a boolean format').isBoolean().optional(),
    validateUserData,
  ],
  updateProduct
);

productsRoutes.delete(
  '/:id',
  [
    validateJWT,
    isAdminRole,
    check('id', 'No es un id válido').isMongoId(),
    check('id').custom(existProductById),
    validateUserData,
  ],
  deleteProduct
);

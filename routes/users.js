import { Router } from 'express';
import { check } from 'express-validator';
import {
  usersDelete,
  usersGet,
  usersPatch,
  usersPost,
  usersPut,
} from '../controllers/index.js';
import { isValidId, isValidRole } from '../helpers/db-validators.js';
import {
  validateExistUserWithEmail,
  validateUserData,
  validateJWT,
} from '../middlewares/index.js';

export const usersRoutes = Router();

usersRoutes.get('/', usersGet);

usersRoutes.put(
  '/:id',
  [
    check('id', 'No es un id Valido').isMongoId(),
    check('id').custom(isValidId),
    check('rol', 'El correo no es válido').optional().custom(isValidRole),
    validateUserData,
  ],
  usersPut
);

usersRoutes.post(
  '/',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser más de 6 caracteres.').isLength({
      min: 6,
    }),
    check('email', 'El correo no es válido').isEmail(),
    check('rol', 'El rol no es válido').optional().custom(isValidRole),
    validateExistUserWithEmail,
    validateUserData,
  ],
  usersPost
);

usersRoutes.delete(
  '/:id',
  [
    validateJWT,
    check('id', 'No es un id Valido').isMongoId(),
    check('id').custom(isValidId),
    validateUserData,
  ],
  usersDelete
);

usersRoutes.patch('/', usersPatch);

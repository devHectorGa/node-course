import { Router } from 'express';
import { check } from 'express-validator';
import {
  usersDelete,
  usersGet,
  usersPatch,
  usersPost,
  usersPut,
} from '../controllers/users.js';
import { isValidRole } from '../helpers/db-validators.js';
import {
  validateExistUserWithEmail,
  validateUserData,
} from '../middlewares/validate-data.js';

const router = Router();

router.get('/', usersGet);

router.put('/:id', usersPut);

router.post(
  '/',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser más de 6 caracteres.').isLength({
      min: 6,
    }),
    check('email', 'El correo no es válido').isEmail(),
    check('rol', 'El correo no es válido').optional().custom(isValidRole),
    validateUserData,
    validateExistUserWithEmail,
  ],
  usersPost
);

router.delete('/', usersDelete);

router.patch('/', usersPatch);

export default router;

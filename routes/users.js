import { Router } from 'express';
import { check } from 'express-validator';
import {
  usersDelete,
  usersGet,
  usersPatch,
  usersPost,
  usersPut,
} from '../controllers/users.js';
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
    check('password', 'El password debe ser más de 6 caracteres.').isLength({
      min: 6,
    }),
    check('role', 'El password debe ser más de 6 caracteres.').isIn([
      'ADMIN',
      'USER',
    ]),
    check('email', 'El correo no es válido').isEmail(),
    validateUserData,
    validateExistUserWithEmail,
  ],
  usersPost
);

router.delete('/', usersDelete);

router.patch('/', usersPatch);

export default router;

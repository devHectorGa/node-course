import { Router } from 'express';
import { check } from 'express-validator';
import {
  usersDelete,
  usersGet,
  usersPatch,
  usersPost,
  usersPut,
} from '../controllers/users.js';

const router = Router();

router.get('/', usersGet);

router.put('/:id', usersPut);

router.post(
  '/',
  [check('email', 'El correo no es válido').isEmail()],
  usersPost
);

router.delete('/', usersDelete);

router.patch('/', usersPatch);

export default router;

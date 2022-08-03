import { Router } from 'express';
import {
  usersDelete,
  usersGet,
  usersPatch,
  usersPost,
  usersPut,
} from '../controllers/users.js';

const router = Router();

router.get('/', usersGet);

router.put('/', usersPut);

router.post('/', usersPost);

router.delete('/', usersDelete);

router.patch('/', usersPatch);

export default router;

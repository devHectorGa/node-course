import { Router } from 'express';
import { check } from 'express-validator';
import { login } from '../controllers/auth.js';
import { validateUserData } from '../middlewares/validate-data.js';

const router = Router();

router.post(
  '/login',
  [
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').notEmpty(),
    check('password', 'La contraseña debe tener mínimo 6 caracteres').isLength({
      min: 6,
    }),
    validateUserData,
  ],
  login
);

export default router;

import { Router } from 'express';
import { check } from 'express-validator';
import { googleSignIn, login } from '../controllers/index.js';
import { validateUserData } from '../middlewares/index.js';

export const productsRoutes = Router();

productsRoutes.post(
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
productsRoutes.post(
  '/google',
  [check('id_token', 'El token es obligatorio').notEmpty(), validateUserData],
  googleSignIn
);

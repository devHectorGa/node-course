import { validationResult } from 'express-validator';
import { UserModel } from '../models/user.js';

export const validateUserData = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json(errors);
  next();
};

export const validateExistUserWithEmail = ({ body: { email } }, res, next) => {
  const existUser = UserModel.findOne({ email });
  if (existUser) {
    return res.status(400).json({ message: 'El correo ya está registrado' });
  }
  next();
};

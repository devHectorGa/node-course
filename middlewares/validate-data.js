import { validationResult } from 'express-validator';
import { UserModel } from '../models/user.js';

export const validateUserData = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json(errors);
  next();
};

export const validateExistUserWithEmail = async (
  { body: { email } },
  res,
  next
) => {
  const existUser = await UserModel.findOne({ email });
  if (existUser) {
    return res.status(400).json({ message: 'El correo ya está registrado' });
  }
  next();
};

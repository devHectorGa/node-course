import { UserModel } from '../models/user.js';
import bcryptjs from 'bcryptjs';
import { validationResult } from 'express-validator';

export const usersGet = ({ query }, res) => {
  res.json({
    message: 'get API',
    ...query,
  });
};

export const usersPost = async (req, res) => {
  const {
    body: { name, email, password },
  } = req;
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json(errors);
  if (existUser) {
    return res.status(400).json({ message: 'El correo ya está registrado' });
  }
  const salt = bcryptjs.genSaltSync();
  const existUser = UserModel.findOne({ email });
  const cryptPass = bcryptjs.hashSync(password, salt);
  const user = new UserModel({ name, email, password: cryptPass });

  await user.save();
  res.status(201).json({
    message: 'post API',
    ...user,
  });
};

export const usersPut = ({ params: { id } }, res) => {
  res.json({
    message: 'put API',
    id,
  });
};

export const usersDelete = (req, res) => {
  res.json({
    message: 'delete API',
  });
};

export const usersPatch = (req, res) => {
  res.json({
    message: 'patch API',
  });
};

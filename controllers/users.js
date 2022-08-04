import { UserModel } from '../models/user.js';
import bcryptjs from 'bcryptjs';

export const usersGet = ({ query }, res) => {
  res.json({
    message: 'get API',
    ...query,
  });
};

export const usersPost = async ({ body: { name, email, password } }, res) => {
  const salt = bcryptjs.genSaltSync();
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

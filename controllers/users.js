import { UserModel } from '../models/user.js';

export const usersGet = ({ query }, res) => {
  res.json({
    message: 'get API',
    ...query,
  });
};

export const usersPost = async ({ body }, res) => {
  const user = new UserModel(body);
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

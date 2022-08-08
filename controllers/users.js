import { UserModel } from '../models/user.js';
import bcryptjs from 'bcryptjs';

const activeUsers = { state: true };

export const usersGet = async ({ query: { limit, page } }, res) => {
  const startFrom = (page - 1) * limit;

  const [users, count] = await Promise.all([
    UserModel.find(activeUsers)
      .skip(+startFrom || 0)
      .limit(+limit || 5),
    UserModel.countDocuments(activeUsers),
  ]);

  res.json({
    message: 'get API',
    users,
    count,
  });
};

export const usersPost = async (req, res) => {
  const {
    body: { name, email, password },
  } = req;
  const salt = bcryptjs.genSaltSync();
  const cryptPass = bcryptjs.hashSync(password, salt);
  const user = new UserModel({ name, email, password: cryptPass });

  await user.save();
  res.status(201).json({
    message: 'post API',
    user,
  });
};

export const usersPut = async ({ params: { id }, body }, res) => {
  const { _id, password, google, email, ...rest } = body;
  if (password) {
    const salt = bcryptjs.genSaltSync();
    rest.password = bcryptjs.hashSync(password, salt);
  }
  const user = await UserModel.findByIdAndUpdate(id, rest);

  res.json({
    message: 'put API',
    user,
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

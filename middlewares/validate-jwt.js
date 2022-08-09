import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user.js';

export const validateJWT = async (req, res, next) => {
  try {
    const token = req.header('x-token');
    if (!token) throw new Error('No receive token');
    const { uid } = jwt.verify(token, process.env.SECRET_JWT_KEY);
    req.user = await UserModel.findById(uid);
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: `Necesita autenticación` });
  }
  next();
};

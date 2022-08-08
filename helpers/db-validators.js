import { ModelRol } from '../models/rol.js';
import { UserModel } from '../models/user.js';

export const isValidRole = async (rol = '') => {
  const existRol = await ModelRol.findOne({ rol });
  if (!existRol) {
    throw new Error(`El rol ${rol} no existe`);
  }
};
export const isValidId = async (id) => {
  const existUser = await UserModel.findById(id);
  if (!existUser) {
    throw new Error(`El id no existe ${id}`);
  }
};

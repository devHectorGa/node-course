import { ModelRol } from '../models/rol.js';

export const isValidRole = async (rol = '') => {
  const existRol = await ModelRol.findOne({ rol });
  if (!existRol) {
    throw new Error(`El rol ${rol} no existe`);
  }
};

import { UserModel } from '../models/user.js';
import bcryptjs from 'bcryptjs';

const INVALID_CREDENTIAL_MESSAGE = 'Usuario / Correo no son correctos';

export const login = async ({ body: { email, password } }, res) => {
  try {
    const user = await UserModel.findOne({ email, state: true });
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!user || !validPassword) {
      return res.status(400).json({ message: INVALID_CREDENTIAL_MESSAGE });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Error, algo salio mal` });
  }

  res.json({ message: 'Login' });
};

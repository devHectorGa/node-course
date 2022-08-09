import { UserModel } from '../models/index.js';
import bcryptjs from 'bcryptjs';
import { generateJWT } from '../helpers/jwt.js';
import { verifyGoogleToken } from '../helpers/google-verify.js';

const INVALID_CREDENTIAL_MESSAGE = 'Usuario / Correo no son correctos';

export const login = async ({ body: { email, password = '' } }, res) => {
  try {
    const user = await UserModel.findOne({ email, state: true });
    const validPassword = user
      ? bcryptjs.compareSync(password, user.password)
      : false;
    if (!user || !validPassword) {
      return res.status(400).json({ message: INVALID_CREDENTIAL_MESSAGE });
    }
    const token = await generateJWT(user.id);
    res.json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Error, algo salio mal` });
  }
};

export const googleSignIn = async ({ body: { id_token } }, res) => {
  try {
    const userData = await verifyGoogleToken(id_token);
    let user = await UserModel.findOne({ email: userData.email });

    console.log(user);
    if (!user) {
      user = new UserModel({ ...userData, google: true });
      await user.save();
    }
    if (!user.state) {
      return res.status(401).json({
        message: 'Usuario bloqueado hable con el administrador',
      });
    }
    const token = await generateJWT(user.id);
    res.json({ user, token });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: 'No se pudo verificar',
    });
  }
};

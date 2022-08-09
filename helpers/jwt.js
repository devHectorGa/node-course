import jwt from 'jsonwebtoken';

export const generateJWT = (uid = '') => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    jwt.sign(
      payload,
      process.env.SECRET_JWT_KEY,
      { expiresIn: '4h' },
      (err, token) => {
        if (err) {
          console.error(err);
          return reject('No se pudo generar el token');
        }
        resolve(token);
      }
    );
  });
};

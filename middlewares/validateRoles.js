const validUser = (user, res) => {
  if (!user) {
    console.error(
      `Use "isAdminRole" before validate token and include user in request`
    );
    return res
      .status(500)
      .json({ message: 'Error please contact with maintainer' });
  }
};

export const isAdminRole = ({ user }, res, next) => {
  validUser(user, res);
  if (user.rol !== 'ADMIN') {
    return res.status(401).json({ message: 'User is not administrator' });
  }
  next();
};

export const haveRol = (...roles) => {
  return ({ user }, res, next) => {
    validUser(user, res);
    if (!roles.includes(user.role)) {
      return res.status(401).json({ message: `Usuario no autorizado` });
    }
    next();
  };
};

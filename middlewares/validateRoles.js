export const isAdminRole = ({ user }, res, next) => {
  if (!user) {
    console.error(
      `Use "isAdminRole" before validate token and include user in request`
    );
    return res
      .status(500)
      .json({ message: 'Error please contact with maintainer' });
  }
  next();
};

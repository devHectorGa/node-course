export const usersGet = (req, res) => {
  res.json({
    message: 'get API',
  });
};

export const usersPost = ({ body }, res) => {
  res.status(201).json({
    message: 'post API',
    ...body,
  });
};

export const usersPut = (req, res) => {
  res.json({
    message: 'put API',
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

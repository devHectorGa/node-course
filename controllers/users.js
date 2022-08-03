export const usersGet = ({ query }, res) => {
  res.json({
    message: 'get API',
    ...query,
  });
};

export const usersPost = ({ body }, res) => {
  res.status(201).json({
    message: 'post API',
    ...body,
  });
};

export const usersPut = ({ params: { id } }, res) => {
  res.json({
    message: 'put API',
    id,
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

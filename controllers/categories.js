import { ModelCategory } from '../models/index.js';

export const createCategory = async ({ body: { name }, user }, res) => {
  const category = new ModelCategory({ name, user: user._id });
  console.log(category, user);
  // await category.save();
  res.status(201).json({
    message: 'post API',
    category,
  });
};

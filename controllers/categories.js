import { ModelCategory } from '../models/index.js';

export const createCategory = async ({ body, user }, res) => {
  const name = body.name.toUpperCase();
  const categoryDB = await ModelCategory.findOne({ name });

  if (categoryDB) {
    return res.status(400).json({
      message: `Category ${name} already exist`,
    });
  }
  const category = new ModelCategory({
    name,
    user: user._id,
  });

  await category.save();

  res.status(201).json({
    category,
  });
};

import { ModelCategory } from '../models/index.js';

const activeCategories = { state: true };

export const getCategories = async ({ query: { limit, page } }, res) => {
  const startFrom = (page - 1) * limit;

  const [categories, count] = await Promise.all([
    ModelCategory.find(activeCategories)
      .populate('user', 'name')
      .skip(+startFrom || 0)
      .limit(+limit || 5),
    ModelCategory.countDocuments(activeCategories),
  ]);

  res.json({
    categories,
    count,
  });
};

export const getCategory = async ({ params: { id } }, res) => {
  const category = await ModelCategory.findById(id).populate('user', 'name');

  res.json(category);
};

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

export const updateCategory = async ({ params: { id }, body, user }, res) => {
  const name = body.name.toUpperCase();
  const category = await ModelCategory.findByIdAndUpdate(
    id,
    { name, user: user._id },
    { new: true }
  ).populate('user', 'name');

  res.json(category);
};

export const deleteCategory = async ({ params: { id } }, res) => {
  try {
    const deleteCategory = await ModelCategory.findOneAndUpdate(
      { _id: id, state: true },
      { state: false },
      { new: true }
    );
    if (!deleteCategory) {
      throw new Error(`Categoría no existe en la base de datos`);
    }
    res.json({
      message: `Delete category correctly`,
      category: deleteCategory,
    });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: `Token no valido` });
  }
};

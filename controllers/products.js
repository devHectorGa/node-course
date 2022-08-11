import { ModelProduct } from '../models/index.js';

const activeProduct = { state: true };

export const getProducts = async ({ query: { limit, page } }, res) => {
  const startFrom = (page - 1) * limit;

  const [products, count] = await Promise.all([
    ModelProduct.find(activeProduct)
      .populate('user', 'name')
      .populate('category', 'name')
      .skip(+startFrom || 0)
      .limit(+limit || 5),
    ModelProduct.countDocuments(activeProduct),
  ]);

  res.json({
    products,
    count,
  });
};

export const getProduct = async ({ params: { id } }, res) => {
  const product = await ModelProduct.findById(id)
    .populate('user', 'name')
    .populate('category', 'name');

  res.json(product);
};

export const createProduct = async (
  { body: { user: _, ...data }, user },
  res
) => {
  const productDB = await ModelProduct.findOne({ name: data.name });

  if (productDB) {
    return res.status(400).json({
      message: `Product ${data.name} already exist`,
    });
  }
  const product = new ModelProduct({
    ...data,
    user: user._id,
  });

  await product.save();

  res.status(201).json(product);
};

export const updateProduct = async (
  { params: { id }, body: { user: _, ...data }, user },
  res
) => {
  const product = await ModelProduct.findByIdAndUpdate(
    id,
    { ...data, user: user._id },
    { new: true }
  )
    .populate('user', 'name')
    .populate('category', 'name');

  res.json(product);
};

export const deleteProduct = async ({ params: { id } }, res) => {
  try {
    const deleteProduct = await ModelProduct.findOneAndUpdate(
      { _id: id, state: true },
      { state: false },
      { new: true }
    );
    if (!deleteProduct) {
      throw new Error(`Categoría no existe en la base de datos`);
    }
    res.json({
      message: `Delete product correctly`,
      product: deleteProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: `Token no valido` });
  }
};

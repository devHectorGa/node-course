import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ProductSchema = Schema({
  name: {
    type: String,
    required: [true, 'name es obligatorio'],
    unique: true,
  },
  state: {
    type: Boolean,
    default: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  description: {
    type: String,
  },
  available: { type: Boolean, default: true },
});

ProductSchema.methods.toJSON = function () {
  const { __v, state, user, _id, category, ...data } = this.toObject();
  return {
    ...data,
    uid: _id,
    user: { name: user.name },
    category: { name: category.name },
  };
};

export const ModelProduct = model('Product', ProductSchema);

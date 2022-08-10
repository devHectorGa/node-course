import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const CategorySchema = Schema({
  name: {
    type: String,
    required: [true, 'name es obligatorio'],
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
});

export const ModelCategory = model('Category', CategorySchema);

import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const CategorySchema = Schema({
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
});

CategorySchema.methods.toJSON = function () {
  const { __v, state, user, _id, ...data } = this.toObject();
  return { ...data, uid: _id, user: { name: user.name } };
};

export const ModelCategory = model('Category', CategorySchema);

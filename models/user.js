import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = Schema({
  name: { type: String, required: [true, 'El nombre es requerido'] },
  email: {
    type: String,
    required: [true, 'El correo es requerido'],
    unique: true,
  },
  image: { type: String },
  rol: {
    type: String,
    required: [true, 'La contraseña es requerida'],
    enum: ['ADMIN', 'USER'],
    default: 'USER',
  },
  state: { type: Boolean, default: true },
  google: { type: Boolean, default: false },
  password: {
    type: String,
    required: function () {
      console.log(this);
      return !this.google;
    },
  },
});

UserSchema.methods.toJSON = function () {
  const { __v, password, state, google, _id, ...user } = this.toObject();
  return { ...user, uid: _id };
};

export const UserModel = model('User', UserSchema);

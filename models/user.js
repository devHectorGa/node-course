import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const UserSchema = Schema({
  name: { type: String, required: [true, 'El nombre es requerido'] },
  email: {
    type: String,
    required: [true, 'El correo es requerido'],
    unique: true,
  },
  password: { type: String, required: [true, 'La contraseña es requerida'] },
  image: { type: String },
  rol: {
    type: String,
    required: [true, 'La contraseña es requerida'],
    enum: ['ADMIN', 'USER'],
    default: 'USER',
  },
  state: { type: Boolean, default: true },
  google: { type: Boolean, default: false },
});

UserSchema.methods.toJSON = function () {
  const { __v, password, state, google, ...user } = this.toObject();
  return user;
};

export const UserModel = model('User', UserSchema);

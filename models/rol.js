import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const RolSchema = Schema({
  rol: {
    type: String,
    required: [true, 'El rol es obligatorio'],
  },
});

export const ModelRol = model('role', RolSchema);

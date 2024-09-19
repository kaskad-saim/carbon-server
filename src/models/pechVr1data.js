// models/data.js
import mongoose from 'mongoose';

// Создание схемы и модели для данных
const pechVr1Schema = new mongoose.Schema(
  {
    value: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

const PechVr1Model = mongoose.model('pechVr1', pechVr1Schema);

export default PechVr1Model;

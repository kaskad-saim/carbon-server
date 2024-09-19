// models/data.js
import mongoose from 'mongoose';

// Создание схемы и модели для данных
const pechVr2Schema = new mongoose.Schema(
  {
    value: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

const PechVr2Model = mongoose.model('pechVr2', pechVr2Schema);

export default PechVr2Model;

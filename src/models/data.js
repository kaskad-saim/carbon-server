// models/data.js
import mongoose from 'mongoose';

// Создание схемы и модели для данных
const dataSchema = new mongoose.Schema(
  {
    value: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true } // Добавляет поля createdAt и updatedAt автоматически
);

const DataModel = mongoose.model('Data', dataSchema);

export default DataModel;

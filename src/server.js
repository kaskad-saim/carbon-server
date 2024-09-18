// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import dataRoutes from './routes/dataRoutes.js';

dotenv.config(); // Загружаем переменные окружения

const app = express();
const PORT = process.env.PORT || 3000;

// Подключаемся к базе данных
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); 

// Используем маршруты
app.use('/', dataRoutes);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

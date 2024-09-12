import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

// Используем cors для разрешения CORS
app.use(cors());
app.use(bodyParser.json());

// Подключение к MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/laboratory')
  .then(() => console.log('Подключено к MongoDB'))
  .catch((err) => console.error('Ошибка подключения к MongoDB:', err));

// Создание схемы и модели для данных
const dataSchema = new mongoose.Schema({
  value: String,
  createdAt: {
    type: Date,
    default: Date.now, // Заполняем текущей датой и временем
  },
});

const DataModel = mongoose.model('Data', dataSchema);

// Обработка POST-запроса на /submit
app.post('/submit', async (req, res) => {
  try {
    // Получаем значение из тела запроса
    const value = req.body.value;

    // Сохраняем значение в базе данных
    const newData = new DataModel({ value });
    await newData.save();

    console.log('Полученное значение:', value);

    // Отправляем ответ клиенту
    res.json({ message: 'Данные успешно получены и сохранены в базе данных', value });
  } catch (error) {
    console.error('Ошибка при сохранении данных:', error);
    res.status(500).json({ message: 'Произошла ошибка при сохранении данных' });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

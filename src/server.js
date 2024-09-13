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

    // Отправляем ответ клиенту с значением и временем
    res.json({ message: 'Данные успешно получены и сохранены в базе данных', value, createdAt: newData.createdAt });
  } catch (error) {
    console.error('Ошибка при сохранении данных:', error);
    res.status(500).json({ message: 'Произошла ошибка при сохранении данных' });
  }
});

// Обработка GET-запроса на /last
app.get('/last', async (req, res) => {
  try {
    // Получаем последнее значение из базы данных
    const lastData = await DataModel.findOne().sort({ createdAt: -1 }).exec();
    if (lastData) {
      res.json({ value: lastData.value, createdAt: lastData.createdAt });
    } else {
      res.status(404).json({ message: 'Данные не найдены' });
    }
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    res.status(500).json({ message: 'Произошла ошибка при получении данных' });
  }
});

// Обработка GET-запроса на /last-day для получения данных за последние 24 часа
app.get('/last-day', async (req, res) => {
  const now = new Date(); // Текущая дата и время
  const twentyFourHoursAgo = new Date(now.getTime() - (24 * 60 * 60 * 1000)); // Дата 24 часа назад

  try {
    // Получаем все записи, сделанные за последние 24 часа
    const lastDayData = await DataModel.find({
      createdAt: { $gte: twentyFourHoursAgo } // Фильтруем записи по дате
    }).sort({ createdAt: -1 }).exec();

    if (lastDayData.length > 0) {
      res.json(lastDayData); // Отправляем массив записей клиенту
    } else {
      res.status(404).json({ message: 'Данные не найдены за последние сутки' });
    }
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    res.status(500).json({ message: 'Произошла ошибка при получении данных' });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

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
  time: String, // Поле для времени
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const DataModel = mongoose.model('Data', dataSchema);

// Обработка POST-запроса на /submit
app.post('/submit', async (req, res) => {
  try {
    const { value, time } = req.body;

    // Проверка наличия значения и времени
    if (!value || !time) {
      return res.status(400).json({ message: 'Необходимо указать значение и время' });
    }

    // Сохранение данных в базе
    const newData = new DataModel({ value, time });
    await newData.save();

    console.log('Полученные данные:', { value, time });

    res.json({ message: 'Данные успешно сохранены', value, time });
  } catch (error) {
    console.error('Ошибка при сохранении данных:', error);
    res.status(500).json({ message: 'Произошла ошибка при сохранении данных' });
  }
});

// Обработка GET-запроса на /last
app.get('/last', async (req, res) => {
  try {
    const lastData = await DataModel.findOne().sort({ createdAt: -1 }).exec();
    if (lastData) {
      res.json({ value: lastData.value, time: lastData.time });
    } else {
      // Если данных нет, возвращаем null
      res.json({ value: null, time: null });
    }
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    res.status(500).json({ message: 'Произошла ошибка при получении данных' });
  }
});

// Обработка GET-запроса на /last-day
app.get('/last-day', async (req, res) => {
  try {
    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    const lastDayData = await DataModel.find({
      createdAt: { $gte: twentyFourHoursAgo },
    })
      .sort({ createdAt: -1 })
      .exec();

    if (lastDayData.length > 0) {
      res.json(
        lastDayData.map((item) => ({
          value: item.value,
          time: item.time,
        }))
      );
    } else {
      // Если данных нет, возвращаем пустой массив
      res.json([]);
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

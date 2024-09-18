// routes/dataRoutes.js
import express from 'express';
import DataModel from '../models/data.js';

const router = express.Router();

// Обработка POST-запроса на /submit
router.post('/submit', async (req, res) => {
  try {
    const { value, time } = req.body;

    // Проверка наличия значения и времени
    if (!value || !time) {
      return res.status(400).json({ message: 'Необходимо указать значение и время' });
    }

    // Получаем текущую дату в формате 'DD.MM.YYYY'
    const date = new Date().toLocaleDateString('ru-RU');

    // Сохранение данных в базе
    const newData = new DataModel({ value, time, date });
    await newData.save();

    console.log('Полученные данные:', { value, time, date });

    res.json({ message: 'Данные успешно сохранены', value, time, date });
  } catch (error) {
    console.error('Ошибка при сохранении данных:', error);
    res.status(500).json({ message: 'Произошла ошибка при сохранении данных' });
  }
});

// Обработка GET-запроса на /last
router.get('/last', async (req, res) => {
  try {
    const lastData = await DataModel.findOne().sort({ createdAt: -1 }).lean();
    if (lastData) {
      const { value, time, date } = lastData;
      res.json({ value, time, date });
    } else {
      // Если данных нет, возвращаем null
      res.json({ value: null, time: null, date: null });
    }
  } catch (error) {
    console.error('Ошибка при получении последних данных:', error);
    res.status(500).json({ message: 'Произошла ошибка при получении данных' });
  }
});

// Обработка GET-запроса на /last-day
router.get('/last-day', async (req, res) => {
  try {
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const lastDayData = await DataModel.find({ createdAt: { $gte: twentyFourHoursAgo } })
      .sort({ createdAt: -1 })
      .lean();

    res.json(
      lastDayData.map(({ value, time, date }) => ({
        value,
        time,
        date,
      }))
    );
  } catch (error) {
    console.error('Ошибка при получении данных за последние сутки:', error);
    res.status(500).json({ message: 'Произошла ошибка при получении данных' });
  }
});

export default router;

import express from 'express';
import PechVr1Model from '../models/pechVr1data.js';
import PechVr2Model from '../models/pechVr2data.js';

const router = express.Router();

// Функция для обработки сохранения данных
const saveData = async (model, req, res) => {
  try {
    const { value, time } = req.body;

    if (!value || !time) {
      return res.status(400).json({ message: 'Необходимо указать значение и время' });
    }

    const date = new Date().toLocaleDateString('ru-RU');
    const newData = new model({ value, time, date });
    await newData.save();

    console.log('Полученные данные:', { value, time, date });
    res.json({ message: 'Данные успешно сохранены', value, time, date });
  } catch (error) {
    console.error('Ошибка при сохранении данных:', error);
    res.status(500).json({ message: 'Произошла ошибка при сохранении данных' });
  }
};

// Функция для получения последних данных
const getLastData = async (model, req, res) => {
  try {
    const lastData = await model.findOne().sort({ createdAt: -1 }).lean();
    res.json(lastData || { value: null, time: null, date: null });
  } catch (error) {
    console.error('Ошибка при получении последних данных:', error);
    res.status(500).json({ message: 'Произошла ошибка при получении данных' });
  }
};

// Функция для получения данных за последние 24 часа
const getLastDayData = async (model, req, res) => {
  try {
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const lastDayData = await model
      .find({ createdAt: { $gte: twentyFourHoursAgo } })
      .sort({ createdAt: -1 })
      .lean();

    res.json(lastDayData.map(({ value, time, date }) => ({ value, time, date })));
  } catch (error) {
    console.error('Ошибка при получении данных за последние сутки:', error);
    res.status(500).json({ message: 'Произошла ошибка при получении данных' });
  }
};

// Обработка POST-запросов на /submit
router.post('/pechVr1/submit', (req, res) => saveData(PechVr1Model, req, res));
router.post('/pechVr2/submit', (req, res) => saveData(PechVr2Model, req, res));

// Обработка GET-запросов на /last
router.get('/pechVr1/last', (req, res) => getLastData(PechVr1Model, req, res));
router.get('/pechVr2/last', (req, res) => getLastData(PechVr2Model, req, res));

// Обработка GET-запросов на /last-day
router.get('/pechVr1/last-day', (req, res) => getLastDayData(PechVr1Model, req, res));
router.get('/pechVr2/last-day', (req, res) => getLastDayData(PechVr2Model, req, res));

export default router;

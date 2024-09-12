import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Используем cors для разрешения CORS
app.use(cors());

app.use(bodyParser.json());


app.post('/submit', (req, res) => {
  // Получаем значение из тела запроса
  const value = req.body.value;

  console.log('Полученное значение:', value);

  // Отправляем ответ клиенту
  res.json({ message: 'Данные успешно получены', value });
});


app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

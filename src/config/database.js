import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    // Подключаемся к MongoDB без устаревших опций
    await mongoose.connect(MONGODB_URI);
    console.log('Подключено к MongoDB');
  } catch (error) {
    console.error('Ошибка подключения к MongoDB:', error);
    process.exit(1); // Выход из процесса при ошибке подключения
  }
};

export default connectDB;

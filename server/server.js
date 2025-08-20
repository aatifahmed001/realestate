import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import projectsRouter from './src/routes/projects.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ origin: process.env.ORIGIN?.split(',') || ['http://localhost:5173'] }));

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.use('/api/projects', projectsRouter);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/realestate_db';

mongoose.connect(MONGO_URI).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch(err => {
  console.error('Mongo connection error:', err.message);
  process.exit(1);
});

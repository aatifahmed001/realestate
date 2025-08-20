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

// This should come before your routes
app.use(cors({
  origin: process.env.ORIGIN?.split(','),
  credentials: true,
}));


app.get('/api/health', (req, res) => res.json({ ok: true }));

app.use('/api/projects', projectsRouter);

const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI;

if (MONGO_URI) {
  mongoose.connect(MONGO_URI)
    .then(() => {
      console.log('MongoDB connected');
      app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch(err => {
      console.error('Mongo connection error:', err.message);
      process.exit(1);
    });
} else {
  console.log('No MONGO_URI provided. Skipping MongoDB connection.');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}


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

// Parse allowed origins from .env
const allowedOrigins = process.env.ORIGIN?.split(',') ?? [];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like curl or server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error(`CORS error: Origin ${origin} not allowed`), false);
    }
  },
  credentials: true, // Only needed if you use cookies/auth headers
}));

app.use((req, res, next) => {
  console.log('Request origin:', req.headers.origin);
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Backend API is running 🚀" });
});

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


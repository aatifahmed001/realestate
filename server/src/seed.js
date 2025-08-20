import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const dataPath = path.join(__dirname, 'data', 'projects.json');
const data = JSON.parse(fs.readFileSync(dataPath));

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/realestate_db');
    await Project.deleteMany({});
    await Project.insertMany(data);
    console.log('Seeded', data.length, 'projects');
  } catch (e) {
    console.error(e);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
};

run();

import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GET /api/projects
router.get('/', (req, res) => {
  const projectsPath = path.join(__dirname, '../data/projects.json');
  let projects = [];
  try {
    projects = JSON.parse(fs.readFileSync(projectsPath, 'utf-8'));
  } catch (err) {
    return res.status(500).json({ error: 'Could not read projects data.' });
  }
  res.json(projects);
});

// GET /api/projects/:idOrSlug
router.get('/:idOrSlug', (req, res) => {
  const { idOrSlug } = req.params;
  const projectsPath = path.join(__dirname, '../data/projects.json');
  let projects = [];
  try {
    projects = JSON.parse(fs.readFileSync(projectsPath, 'utf-8'));
  } catch (err) {
    return res.status(500).json({ error: 'Could not read projects data.' });
  }
  const project = projects.find(
    p => p.slug === idOrSlug || p._id === idOrSlug
  );
  if (!project) return res.status(404).json({ error: 'Project not found' });
  res.json(project);
});

export default router;

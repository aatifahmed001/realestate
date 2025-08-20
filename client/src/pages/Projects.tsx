import { useEffect, useState } from 'react';
import api from '../api';
import { Project } from '../types';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    api.get('/projects').then(res => setProjects(res.data));
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => <ProjectCard key={p._id} project={p} />)}
        </div>
      </div>
    </section>
  )
}

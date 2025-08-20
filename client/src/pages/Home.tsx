import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import ProjectCard from '../components/ProjectCard';
import api from '../api';
import { Project } from '../types';

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    api.get('/projects').then(res => setProjects(res.data));
  }, []);

  return (
    <div>
      <Banner />
      <Carousel />
      <section className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <a href="/projects" className="text-blue-600 hover:underline">View all</a>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(p => <ProjectCard key={p._id} project={p} />)}
          </div>
        </div>
      </section>
    </div>
  )
}

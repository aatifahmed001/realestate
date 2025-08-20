import { Link } from 'react-router-dom';
import { Project } from '../types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="group block border rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow">
      <div className="aspect-video overflow-hidden">
        <img src={project.heroImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <p className="text-sm text-gray-600">{project.location}</p>
        <div className="mt-2 text-sm">
          <span>{project.bedrooms} BR • {project.bathrooms} Bath • {project.areaSqft} sqft</span>
        </div>
        <div className="mt-2 font-semibold">₹ {(project.price).toLocaleString('en-IN')}</div>
      </div>
    </Link>
  )
}

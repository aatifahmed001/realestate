import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';
import { Project } from '../types';

export default function ProjectDetail() {
  const { idOrSlug } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  console.log('project:', project)
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!idOrSlug) return; // Only skip fetch if param is missing
    setError(null);
    setProject(null);
    api.get(`/projects/${idOrSlug}`)
      .then(res => {
        if (!res.data) {
          setError('Project not found.');
        } else {
          setProject(res.data);
        }
      })
      .catch(() => setError('Project not found.'));
  }, [idOrSlug]);

  if (!idOrSlug) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10 text-red-600">
        <Link to="/projects" className="text-blue-600 hover:underline block mb-4">← Back to Projects</Link>
        Invalid project identifier.
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10 text-red-600">
        <Link to="/projects" className="text-blue-600 hover:underline block mb-4">← Back to Projects</Link>
        {error}
      </div>
    );
  }

  if (!project) return <div className="max-w-6xl mx-auto px-4 py-10">Loading...</div>;

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <Link to="/projects" className="text-blue-600 hover:underline">← Back to Projects</Link>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div>
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full rounded-lg"
              onError={e => (e.currentTarget.style.display = 'none')}
            />
            <div className="grid grid-cols-3 gap-2 mt-2">
              {project.images.map((img, idx) => {
                console.log('Rendering image:', img);
                return (
                  <img
                    key={idx}
                    src={img}
                    alt={`${project.title}-${idx}`}
                    className="w-full h-24 object-cover rounded"
                    onError={e => (e.currentTarget.style.display = 'none')}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <p className="text-gray-600">{project.location}</p>
            <div className="mt-2">₹ {(project.price).toLocaleString('en-IN')}</div>
            <div className="mt-2 text-sm">{project.bedrooms} BR • {project.bathrooms} Bath • {project.areaSqft} sqft</div>
            <p className="mt-4 text-gray-800">{project.description}</p>
            <div className="mt-6">
              <h3 className="font-semibold">Facilities</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {project.facilities.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
            {project.layoutImage && typeof project.layoutImage === 'string' && project.layoutImage.trim() !== '' && (
              <div className="mt-6">
                <h3 className="font-semibold">Layout / Floor Plan</h3>
                {/* {console.log('Rendering layoutImage:', project.layoutImage)} */}
                <img
                  src={project.layoutImage}
                  alt="Layout"
                  className="w-full rounded-lg mt-2 border border-gray-300"
                  style={{ maxHeight: 400, objectFit: 'contain', background: '#f8fafc' }}
                  onError={e => {
                    e.currentTarget.style.display = 'none';
                    const msg = document.createElement('div');
                    msg.textContent = 'Layout image failed to load.';
                    msg.style.color = 'red';
                    e.currentTarget.parentNode?.appendChild(msg);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

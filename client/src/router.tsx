import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';

const NotFound = () => (
  <div className="max-w-6xl mx-auto px-4 py-10 text-red-600">
    <h1 className="text-2xl font-bold mb-4">404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // Optionally, add errorElement for error boundaries
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Projects /> },
      { path: 'projects/:idOrSlug', element: <ProjectDetail /> }, // removed extra space
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> }, // catch-all 404
    ],
  },
]);

export default router;
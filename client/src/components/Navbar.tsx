import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    'px-3 py-2 rounded hover:bg-gray-100 ' + (isActive ? 'font-semibold text-blue-600' : 'text-gray-700');

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold">RealEstate</NavLink>
        <nav className="hidden md:flex space-x-2">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>

        {/* mobile hamburgur */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-gray-700" />
        </button>
        {/* mobile menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <nav className="flex flex-col space-y-2 p-4">
              <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
              <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
              <NavLink to="/projects" className={linkClass} onClick={() => setMenuOpen(false)}>Projects</NavLink>
              <NavLink to="/contact" className={linkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

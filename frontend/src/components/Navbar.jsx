// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // íconos opcionales
import logo from '../assets/Logoroxo.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
        {/* Logo */}
        {/* <h1 className="text-2xl font-bold uppercase tracking-widest">Agencia Satoshi</h1> */}
        <img src={logo} alt='logo' className='w-40 md:w-36 lg:w-40 h-auto object-contain '/>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="hover:text-purple-300 ">Home</Link>
          <Link to="/services" className="hover:text-purple-300">Servicios</Link>
          <Link to="/projects" className="hover:text-purple-300">Proyectos</Link>
          <Link to="/pricing" className="hover:text-purple-300">Precios</Link>
          <Link to="/blog" className="hover:text-purple-300">Blog</Link>
          <Link to="/about_us" className="hover:text-purple-300">Quién Somos</Link>
          <button className="ml-4 border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
            Pedir un presupuesto
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-4">
          <Link to="/" className="block hover:text-purple-300">Home</Link>
          <Link to="/services" className="block hover:text-purple-300">Servicios</Link>
          <Link to="/projects" className="block hover:text-purple-300">Proyectos</Link>
          <Link to="/pricing" className="block hover:text-purple-300">Precios</Link>
          <Link to="/blog" className="block hover:text-purple-300">Blog</Link>
          <Link to="/about_us" className="block hover:text-purple-300">Quién Somos</Link>
          <button className="w-full border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
            Pedir un presupuesto
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;

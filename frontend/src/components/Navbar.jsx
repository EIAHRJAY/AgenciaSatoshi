// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="w-full fixed top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-900">Satoshi</h1>

        {/* Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-black">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-black">Services</Link>
          <Link to="/about_us" className="text-gray-700 hover:text-black">About us</Link>
          <Link to="/pricing" className="text-gray-700 hover:text-black">Pricing</Link>
          <Link to="/blog" className="text-gray-700 hover:text-black">Blog</Link>
        </nav>

        {/* Button */}
        <button className="ml-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 hidden md:block">
          Let’s talk
        </button>
      </div>
    </header>
  );
}

export default Navbar;

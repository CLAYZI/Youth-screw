import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Music } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Concerts', path: '/concerts' },
    { name: 'Merch', path: '/merch' },
    { name: 'Latest Album', path: '/latest-album' },
    { name: 'About', path: '/about' },
    { name: 'Streaming', path: '/streaming' },
  ];

  return (
    <nav className="bg-black/95 fixed w-full z-50 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              {/*} <Music className="h-8 w-8 text-purple-500" />*/}
              <span className="text-[34px] font-bold font-newrocker select-none">Youth Screw</span> {/* Ajout de select-none ici */}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-300 hover:text-[#d7a739] px-3 py-2 rounded-md text-3xl font-bebas font-medium transition-colors duration-500 ease-in-out select-none" // Ajout de select-none ici
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-black focus:outline-none transition-all duration-[3000ms] ease-in-out transform"
            >
              {isOpen ? <X className="h-6 w-6 transition-all duration-[3000ms] ease-in-out rotate-180" /> : <Menu className="h-6 w-6 transition-all duration-[3000ms] ease-in-out rotate-0" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-1000 ease-in-out ${isOpen ? 'max-h-96 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-3xl font-bebas font-medium transition-all duration-500 ease-in-out select-none" // Ajout de select-none ici
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


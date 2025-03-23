import React from 'react';
import { Youtube, Instagram, Facebook, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#000314] text-white py-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 mb-8">
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              {/* <Music className="h-8 w-8 text-purple-500" />*/}
              <span className="text-xl font-bold font-newrocker">Youth Screw</span>
            </div>
            <p className="mt-4 text-gray-400">
              Official website of Youth Screw. Follow us on social media for the latest updates.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 select-none">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/concerts" 
                  className="text-gray-400 hover:text-white transition-colors hover:underline"
                >
                  Concerts
                </a>
              </li>
              <li>
                <a 
                  href="/merch" 
                  className="text-gray-400 hover:text-white transition-colors hover:underline"
                >
                  Merch
                </a>
              </li>
              <li>
                <a 
                  href="/latest-album" 
                  className="text-gray-400 hover:text-white transition-colors hover:underline"
                >
                  Latest Album
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="text-gray-400 hover:text-white transition-colors hover:underline"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 select-none">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Youth Screw. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { Play, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16 select-none"> {/* Ajout de select-none globalement ici */}
      {/* Hero Section */}
      <section 
        className="h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'url("https://i.imgur.com/P6raVtd.jpeg")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-newrocker mb-6 text-white">
            Youth Screw
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            New Album "Album Title" Out Now
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/latest-album"
              className="inline-flex items-center px-6 py-3 bg-[#cf940c] text-white rounded-lg hover:bg-[#d7a739] transition-colors"
            >
              <Play className="mr-2 h-5 w-5" />
              Listen Now
            </Link>
            <Link
              to="/concerts"
              className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Tour Dates
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Release */}
      <section className="py-20 bg-[#000314]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://i.imgur.com/EghGcO2.jpeg"
                alt="Latest Album Cover"
                className="rounded-2xl border-2 border-white shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Latest Album</h2>
              <p className="text-gray-300 mb-8">
                Experience our newest creation, featuring powerful vocals, intense rhythms, and unforgettable melodies.
              </p>
              <Link
                to="/latest-album"
                className="inline-flex items-center px-6 py-3 bg-[#cf940c] text-white rounded-lg hover:bg-[#d7a739] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;





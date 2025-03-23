import React from 'react';
import { Music2 } from 'lucide-react';

interface StreamingPlatform {
  id: number;
  name: string;
  icon: string;
  url: string;
  color: string;
  iconSize: string; // Ajout d'une propriété iconSize
}

const platforms: StreamingPlatform[] = [
  {
    id: 1,
    name: 'Spotify',
    icon: 'https://www.scdn.co/i/_global/open-graph-default.png',
    url: '#',
    color: 'bg-[#1ed760]',
    iconSize: 'h-24', // Définir une taille d'icône
  },
  {
    id: 2,
    name: 'Apple Music',
    icon: 'https://www.apple.com/newsroom/images/product/apple-music/apple_music-update_hero_08242021_inline.jpg.slideshow-large_2x.jpg',
    url: '#',
    color: 'bg-[#fb233b]',
    iconSize: 'h-32', // Taille différente d'icône
  },
  {
    id: 3,
    name: 'YouTube Music',
    icon: 'https://www.01net.com/app/uploads/2022/08/youtube-music-logo.jpg',
    url: 'https://www.youtube.com/@spacebichon',
    color: 'bg-white',
    iconSize: 'h-24', // Taille plus grande
  },
  {
    id: 4,
    name: 'Amazon Music',
    icon: 'https://play-lh.googleusercontent.com/7CJqz69aGFnVCov8jv5rfvHDb19pK1KSycv3cFPPNuG9mPIqMiMkxgCVDhQUV2LwlpBj',
    url: '#',
    color: 'bg-[#25d1dc]',
    iconSize: 'h-28', 
  },
  {
    id: 5,
    name: 'Deezer',
    icon: 'https://lacartefrancaise.fr//wp-content/uploads/2022/06/deezer-logo-coeur.jpg',
    url: '#',
    color: 'bg-[#a237ff]',
    iconSize: 'h-32', 
  },
  {
    id: 6,
    name: 'SoundCloud',
    icon: 'https://static-00.iconduck.com/assets.00/soundcloud-icon-2048x888-k4c33ssc.png',
    url: '#',
    color: 'bg-[#f84004]',
    iconSize: 'h-12', 
  }
];

const Streaming = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-[#000314] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Music2 className="h-12 w-12 text-purple-500" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Listen Now</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stream our music on your favorite platform. Click any of the services below to start listening.
          </p>
        </div>

        {/* Grille : 2 colonnes et 3 lignes de boutons */}
        <div className="grid grid-cols-2 gap-8">
          {platforms.map((platform) => (
            <a
              key={platform.id}
              href={platform.url}
              className={`${platform.color} rounded-lg p-8 flex items-center justify-center hover:opacity-90 transition-opacity h-32 hover:scale-105 cursor-pointer transition-transform duration-300 ease-in-out`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={platform.icon}
                alt={platform.name}
                className={`w-auto object-contain  ${platform.iconSize}`} // Utilisation de iconSize ici
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Streaming;





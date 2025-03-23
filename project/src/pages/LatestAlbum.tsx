import React, { useRef } from 'react';
import { Play, Pause, Music, Share2 } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  duration: string;
  youtubeID: string;
}

const tracks: Track[] = [
  { 
    id: 1, 
    title: 'Opening Track', 
    duration: '0:05',
    youtubeID: 'qXV8&pp' // Remplacez avec votre fichier MP3
  },
  { 
    id: 2, 
    title: 'Second Song', 
    duration: '4:12',
    youtubeID: '/music/track2.mp3'
  },
  { 
    id: 3, 
    title: 'Third Track', 
    duration: '3:58',
    youtubeID: '/music/track3.mp3'
  },
  { 
    id: 4, 
    title: 'Fourth Song', 
    duration: '4:30',
    youtubeID: '/music/track4.mp3'
  },
  { 
    id: 5, 
    title: 'Fifth Track', 
    duration: '3:22',
    youtubeID: '/music/track5.mp3'
  },
  { 
    id: 6, 
    title: 'Sixth Song', 
    duration: '4:15',
    youtubeID: '/music/track6.mp3'
  },
];

const streamingLinks = {
  spotify: 'https://open.spotify.com/album/albumID',  // Lien Spotify
  deezer: 'https://www.deezer.com/album/albumID'   // Lien Deezer
};

const LatestAlbum = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrack, setCurrentTrack] = React.useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  // Fonction pour jouer un morceau spécifique
  const handlePlayTrack = (track: Track) => {
    if (audioRef.current) {
      if (currentTrack?.id === track.id) {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.play();
          setIsPlaying(true);
        }
      } else {
        audioRef.current.src = track.audioUrl;
        audioRef.current.play();
        setCurrentTrack(track);
        setIsPlaying(true);
      }
    }
  };

  // Fonction pour jouer le premier morceau de l'album
  const handlePlayAlbum = () => {
    if (tracks.length > 0) {
      const firstTrack = tracks[0]; // Obtenir le premier morceau
      handlePlayTrack(firstTrack);   // Jouer ce morceau
    }
  };

  // Fonction pour gérer la fin du morceau actuel et jouer le suivant
  const handleTrackEnded = () => {
    if (currentTrack) {
      const currentIndex = tracks.findIndex((track) => track.id === currentTrack.id);
      const nextTrack = tracks[currentIndex + 1];

      if (nextTrack) {
        handlePlayTrack(nextTrack);  // Jouer le morceau suivant
      } else {
        setIsPlaying(false);  // Si c'est le dernier morceau, mettre en pause
      }
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Album Title',
        text: 'Check out this amazing album!',
        url: window.location.href,
      });
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-[#000314]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src="https://i.imgur.com/EghGcO2.jpeg"
              alt="Album Cover"
              className="rounded-lg shadow-2xl w-full border-2 border-white select-none" // Image non sélectionnable
            />
            <div className="mt-8 space-y-4 select-none">
              <div className="flex gap-4">
                <button 
                  onClick={handlePlayAlbum}  // Lancer le premier morceau quand on clique
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-[#cf940c] text-white rounded-lg hover:bg-[#d7a739] transition-colors hover:scale-105 cursor-pointer transition-transform duration-300 ease-in-out select-none"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Play Album
                </button>
                <button 
                  onClick={handleShare}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:opacity-80 transform hover:scale-105
                  transition-transform duration-300 ease-in-out transition-colors select-none"
                >
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
              <div className="flex gap-4">
                <a 
                  href={streamingLinks.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#1DB954] text-white rounded-lg hover:opacity-80 transition-colors transform hover:scale-105 cursor-pointer transition-transform duration-300 ease-in-out transition-colors flex-1 select-none"
                >
                  Listen on Spotify
                </a>
                <a 
                  href={streamingLinks.deezer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#a237ff] text-white rounded-lg hover:opacity-80 transition-colors transform hover:scale-105 cursor-pointer transition-transform duration-300 ease-in-out transition-colors flex-1 select-none"
                >
                  Listen on Deezer
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h1 className="text-4xl font-bold mb-2 select-none">Album Title</h1>
            <p className="text-gray-400 mb-8 select-none">Released: March 2024</p>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 select-none">Tracklist</h2>
              <div className="space-y-2">
                {tracks.map((track) => (
                  <button
                    key={track.id}
                    onClick={() => handlePlayTrack(track)}  // Jouer le morceau spécifique
                    className={`w-full flex items-center justify-between p-4 bg-gray-900 rounded-lg transition-colors transform active:scale-95 cursor-pointer transition-transform duration-300 ease-in-out ${currentTrack?.id === track.id ? 'scale-95' : 'hover:scale-95'} select-none`}
                  >
                    <div className="flex items-center">
                      <Music className={`h-5 w-5 mr-3 ${currentTrack?.id === track.id && isPlaying ? 'text-purple-400' : 'text-gray-400'}`} />
                      <span className={currentTrack?.id === track.id ? 'text-purple-400' : ''}>{track.title}</span>
                    </div>
                    <span className="text-gray-400">{track.duration}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 select-auto">About the Album</h2>
              <p className="text-gray-400 select-auto">
                Our latest album features a collection of powerful tracks that showcase our musical evolution. 
                Each song tells a unique story while maintaining the signature sound our fans have come to love.
              </p>
            </div>
          </div>
        </div>
      </div>
      <audio 
        ref={audioRef} 
        onEnded={handleTrackEnded}  // Appeler la fonction pour jouer le morceau suivant
      />
    </div>
  );
};

export default LatestAlbum;







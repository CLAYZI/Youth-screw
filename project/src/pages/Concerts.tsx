import React from 'react';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';

interface Concert {
  id: number;
  date: string;
  venue: string;
  city: string;
  time: string;
  ticketLink: string;
  location: string; // Nouveau champ pour spécifier la localisation
}

const concerts: Concert[] = [
  {
    id: 1,
    date: '2024-04-15',
    venue: 'Metropolitan Arena',
    city: 'New York, NY',
    time: '20:00',
    ticketLink: '#',
    location: 'Metropolitan Arena, New York, NY'
  },
  {
    id: 2,
    date: '2024-04-18',
    venue: 'Sunset Stadium',
    city: 'Los Angeles, CA',
    time: '19:30',
    ticketLink: '#',
    location: 'Sunset Stadium, Los Angeles, CA'
  },
  {
    id: 3,
    date: '2024-04-22',
    venue: 'Lakefront Theater',
    city: 'Chicago, IL',
    time: '20:00',
    ticketLink: '#',
    location: 'Lakefront Theater, Chicago, IL'
  }
];

const Concerts = () => {
  const generateMapLink = (location: string) => {
    // Remplacer les espaces par des "+" pour l'URL Google Maps
    const formattedLocation = location.replace(/\s+/g, '+');
    return `https://www.google.com/maps/search/?q=${formattedLocation}`;
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-[#000314]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-white select-none">Upcoming Concerts</h1>
        <div className="grid gap-6">
          {concerts.map((concert) => (
            <div
              key={concert.id}
              className="bg-gray-900 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transform transition-all duration-300 hover:scale-105"
              style={{ userSelect: 'none' }} // Désactive la sélection du texte pour toute la carte
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 text-[#d7a739] mb-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(concert.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2 text-white">{concert.venue}</h2>
                <div className="flex flex-col sm:flex-row gap-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{concert.city}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{concert.time}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={generateMapLink(concert.location)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  View on Google Maps
                </a>
                <a
                  href={concert.ticketLink}
                  className="inline-flex items-center px-6 py-3 bg-[#cf940c] text-white rounded-lg hover:bg-[#d7a739] transition-colors"
                >
                  <Ticket className="mr-2 h-5 w-5" />
                  Get Tickets
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Concerts;











import React, { useState } from 'react';
import { Users } from 'lucide-react';

interface BandMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  link: string;
}

const bandMembers: BandMember[] = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Lead Vocals',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80',
    bio: 'Lead vocalist with over 15 years of experience in the music industry.',
    link: 'https://example.com/john-doe',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Lead Guitar',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
    bio: 'Virtuoso guitarist known for innovative riffs and melodic solos.',
    link: 'https://example.com/jane-smith',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    role: 'Bass Guitar',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80',
    bio: 'Bass guitarist with a deep passion for groove and rhythm.',
    link: 'https://example.com/alex-johnson',
  },
  {
    id: 4,
    name: 'Mike Wilson',
    role: 'Drums',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    bio: 'Drummer extraordinaire with a unique style and powerful beats.',
    link: 'https://example.com/mike-wilson',
  }
];

const About = () => {
  const [selectedMember, setSelectedMember] = useState<BandMember | null>(null);

  const openModal = (member: BandMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-[#000314] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 select-none">
          <div className="flex justify-center mb-4">
            <Users className="h-12 w-12 text-[#d7a739]" />
          </div>
          <h1 className="text-4xl font-bold mb-4">About the Band</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Formed in 2020, we've been pushing the boundaries of modern music with our unique blend of styles and powerful performances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 select-none">
          {bandMembers.map((member) => (
            <div
              key={member.id}
              className="relative cursor-pointer hover:scale-105 transform transition"
              onClick={() => openModal(member)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="p-6 relative z-10">
                <h2 className="text-xl font-bold mb-1 text-white">{member.name}</h2>
                <p className="text-[#d7a739] mb-4">{member.role}</p>
                <p className="text-gray-400">
                  {member.bio.length > 50 ? `${member.bio.slice(0, 50)}...` : member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {selectedMember && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              className="bg-black bg-opacity-80 p-8 rounded-lg max-w-md w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-1 right-4 text-white text-2xl"
              >
                &times;
              </button>
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-bold text-white mb-2">
                <a 
                  href={selectedMember.link}
                  className="text-white hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedMember.name}
                </a>
              </h2>
              <p className="text-[#d7a739] mb-4">{selectedMember.role}</p>
              <p className="text-gray-400">{selectedMember.bio}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div>
            <h2 className="text-2xl font-bold mb-4 select-auto">Behind the Scenes</h2>
            <p className="text-gray-400 mb-4 select-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula, magna nec gravida tincidunt.
            </p>
            <p className="text-gray-400 select-auto">
              Aenean scelerisque turpis non justo tincidunt, et elementum libero placerat. Integer nec malesuada lorem.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 select-auto">Future Plans</h2>
            <p className="text-gray-400 mb-4 select-auto">
              Nulla facilisi. Fusce non fermentum nisi. Cras tincidunt, risus ut consectetur volutpat, libero libero hendrerit justo.
            </p>
            <p className="text-gray-400 select-auto">
              Duis vehicula justo id dolor vulputate, at congue lectus gravida. Aliquam erat volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;










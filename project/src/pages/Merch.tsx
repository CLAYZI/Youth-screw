import React from 'react';

interface MerchItem {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  link: string;
}

const merchItems: MerchItem[] = [
  {
    id: 1,
    name: 'Classic Band T-Shirt',
    price: '$25.00',
    image: 'https://images.unsplash.com/photo-1503342394-61c5748b3ceb?auto=format&fit=crop&q=80',
    description: 'Premium cotton t-shirt featuring our classic logo design.',
    link: 'https://example.com/t-shirt' // Ajoute le lien ici
  },
  {
    id: 2,
    name: 'Tour Hoodie 2024',
    price: '$45.00',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80',
    description: 'Comfortable hoodie with tour dates on the back.',
    link: 'https://example.com/hoodie' // Ajoute le lien ici
  },
  {
    id: 3,
    name: 'Limited Edition Vinyl',
    price: '$35.00',
    image: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?auto=format&fit=crop&q=80',
    description: 'Special edition vinyl featuring exclusive artwork.',
    link: 'https://example.com/vinyl' // Ajoute le lien ici
  }
];

const Merch = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-[#000314]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-white select-none">Official Merchandise</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchItems.map((item) => (
            <a 
              key={item.id} 
              href={item.link}
              target="_blank" // Ouvre le lien dans un nouvel onglet
              rel="noopener noreferrer" // Sécurise l'ouverture du lien
              className="bg-gray-900 rounded-lg overflow-hidden hover:opacity-90 transition-all transform hover:scale-105"
              style={{ userSelect: 'none' }} // Désactive la sélection du texte dans toute la carte
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <span className="text-[#d7a739] font-semibold">{item.price}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Merch;



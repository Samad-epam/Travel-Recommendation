// src/pages/DestinationsPage.tsx
import React, { useEffect, useState } from 'react';
import CardComponent from '../components/CardComponent';
import countries from '../Data/countries.json';

interface Recommendation {
  id: number;
  title: string;
  description: string;
  image: string;
  countryName: string; // Add countryName to the data model
}

const Countries: React.FC = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    setRecommendations(countries);
  }, []);

  return (
    <div className='c'>
      <h1>Recommended destinations</h1>
      <div className="recommendation-list">
        {recommendations.map((rec) => (
          <CardComponent
            key={rec.id}
            title={rec.title}
            image={rec.image}
            description={rec.description}
            countryName={rec.countryName} // Include countryName here
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;

// src/pages/Places.tsx
import React, { useEffect, useState } from 'react';
import CardComponent from '../components/CardComponent';
import India from '../Data/india.json'
interface Place {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Places: React.FC = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setPlaces(India)
  }, []);



  return (
    <div>
      <h1>Places in India</h1>
      <div className="recommendation-list">
        {places.map((place) => (
          <CardComponent
            key={place.id}
            title={place.title}
            image={place.image}
            description={place.description}
            countryName="" // Optionally pass an empty string if not used
          />
        ))}
      </div>
    </div>
  );
};

export default Places;

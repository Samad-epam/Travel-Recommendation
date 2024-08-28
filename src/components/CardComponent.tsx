import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

interface CardComponentProps {
  title: string;
  image: string;
  description: string;
  countryName: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, image, description, countryName }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/places/${countryName}`);
  };

  return (
    <div className="custom-card" onClick={handleClick}>
      <img className="custom-card-img" src={image} alt={title} />
      <div className="custom-card-body">
        <h5 className="custom-card-title">{title}</h5>
        <p className="custom-card-desc">{description}</p>
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={2} readOnly />
      </div>
    </div>
  );
};

export default CardComponent;

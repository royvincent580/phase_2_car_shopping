import { useState } from 'react';
import '../styles/CarCard.css';

function CarCard({ car, onViewDetails }) {
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  return (
    <div className="car-card" onClick={() => onViewDetails(car)}>
      <img 
        src={imageError ? 'https://i.pinimg.com/564x/91/87/47/9187472c200a8f78f93599181f4abb99.jpg' : car.image} 
        alt={${car.year} ${car.make} ${car.model}} 
        className="car-image" 
        onError={handleImageError}
      />
      <div className="car-info">
        <h3>{car.year} {car.make} {car.model}</h3>
        <p className="car-price">KSh {car.price.toLocaleString()}</p>
        <p className="car-mileage">{car.mileage.toLocaleString()} km</p>
        <button className="view-details-btn">View Details</button>
      </div>
    </div>
  );
}

export default CarCard;
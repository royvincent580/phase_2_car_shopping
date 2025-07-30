import '../Styes/CarCard.css';

function CarCard({ car, onClick, onViewDetails }) {
  const handleClick = () => {
    if (onClick) onClick(car);
    if (onViewDetails) onViewDetails(car);
  };
  
  const defaultImage = 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400';
  
  return (
    <div className="car-card" onClick={handleClick}>
      <img 
        src={car.image || defaultImage} 
        alt={`${car.year} ${car.make} ${car.model}`}
        onError={(e) => { e.target.src = defaultImage; }}
      />
      <div className="car-info">
        <h3>{car.year} {car.make} {car.model}</h3>
        <p className="price">KSh {car.price?.toLocaleString() || 'N/A'}</p>
        <p className="mileage">{car.mileage?.toLocaleString() || 'N/A'} km</p>
      </div>
    </div>
  );
}

export default CarCard;
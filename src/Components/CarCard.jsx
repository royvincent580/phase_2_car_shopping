import '../Styes/CarCard.css';

function CarCard({ car, onClick, onViewDetails }) {
  const handleClick = () => {
    if (onClick) onClick(car);
    if (onViewDetails) onViewDetails(car);
  };
  
  return (
    <div className="car-card" onClick={handleClick}>
      <img src={car.image} alt={`${car.year} ${car.make} ${car.model}`} />
      <div className="car-info">
        <h3>{car.year} {car.make} {car.model}</h3>
        <p className="price">KSh {car.price.toLocaleString()}</p>
        <p className="mileage">{car.mileage.toLocaleString()} km</p>
      </div>
    </div>
  );
}

export default CarCard;
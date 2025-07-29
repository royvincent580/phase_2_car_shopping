import '../Styes/CarCard.css';

function CarCard({ car, onClick }) {
  return (
    <div className="car-card" onClick={() => onClick(car)}>
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
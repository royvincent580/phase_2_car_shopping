import { useState, useEffect } from 'react';
import CarCard from '../Components/CarCard';
import CarDetail from '../Components/CarDetail';
import '../Styes/Cars.css';

function Cars() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch('https://car-shopping-backend-fkal.onrender.com/cars')
      .then(res => res.json())
      .then(data => {
        setCars(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);
  
  const handleCarClick = (car) => {
    setSelectedCar(car);
  };
  
  const handleCloseDetail = () => {
    setSelectedCar(null);
  };
  
  if (loading) {
    return <div className="loading">Loading cars...</div>;
  }
  
  return (
    <div className="cars-page">
      <h1>Our Cars</h1>
      <div className="cars-grid">
        {cars.map(car => (
          <CarCard 
            key={car.id} 
            car={car} 
            onClick={handleCarClick}
          />
        ))}
      </div>
      
      {selectedCar && (
        <CarDetail car={selectedCar} onClose={handleCloseDetail} />
      )}
    </div>
  );
}

export default Cars;
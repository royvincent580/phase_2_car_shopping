import { useState, useEffect } from 'react';
import CarCard from '../Components/CarCard';
import CarDetail from '../Components/CarDetail';
import SearchBar from '../Components/SearchBar';
import '../Styes/Cars.css';

function Cars() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('https://car-shopping-backend-fkal.onrender.com/cars')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log('Fetched cars:', data);
        setCars(data);
        setFilteredCars(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
        setError('Failed to load cars. Make sure the JSON server is running on port 3000.');
        setLoading(false);
      });
  }, []);
  
  const handleSearch = (searchTerm) => {
    const term = searchTerm.toLowerCase();
    const filtered = cars.filter(car => 
      car.make.toLowerCase().includes(term) || 
      car.model.toLowerCase().includes(term) || 
      car.year.toString().includes(term)
    );
    setFilteredCars(filtered);
  };
  
  const handleViewDetails = (car) => {
    setSelectedCar(car);
  };
  
  const handleCloseDetails = () => {
    setSelectedCar(null);
  };
  
  if (loading) {
    return <div className="loading">Loading cars...</div>;
  }
  
  if (error) {
    return (
      <div className="error-container">
        <h2>Error Loading Cars</h2>
        <p>{error}</p>
        <p>Please make sure to:</p>
        <ol>
          <li>Start the JSON server: <code>npm run server</code></li>
          <li>Verify the server is running on https://car-shopping-backend-fkal.onrender.com</li>
          <li>Check that db.json exists in the project root</li>
        </ol>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }
  
  return (
    <div className="cars-page">
      <div className="cars-header">
        <h1>Available Cars</h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      
      <div className="cars-container">
        {filteredCars.length > 0 ? (
          filteredCars.map(car => (
            <CarCard 
              key={car.id} 
              car={car} 
              onViewDetails={handleViewDetails} 
            />
          ))
        ) : (
          <div className="no-cars">No cars match your search criteria.</div>
        )}
      </div>
      
      {selectedCar && (
        <CarDetail car={selectedCar} onClose={handleCloseDetails} />
      )}
    </div>
  );
}

export default Cars;
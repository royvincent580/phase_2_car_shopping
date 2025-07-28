import { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';
import CarDetail from '../components/CarDetail';
import SearchBar from '../components/SearchBar';
import '../styles/Cars.css';

function Cars() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch('http://localhost:3000/cars')
      .then(res => {
        if (!res.ok) {
          throw new Error(HTTP error! status: ${res.status});
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
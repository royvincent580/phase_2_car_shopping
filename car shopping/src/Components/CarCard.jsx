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
  
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Find Your Perfect Vehicle</h1>
          <p>Browse our extensive collection of quality pre-owned vehicles</p>
          <Link to="/cars" className="browse-btn">Browse Cars</Link>
        </div>
      </div>
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

 <div className="features-section">
        <div className="feature">
          <h3>Quality Selection</h3>
          <p>Hand-picked vehicles that meet our rigorous standards</p>
        </div>
        <div className="feature">
          <h3>Competitive Pricing</h3>
          <p>Fair market prices on all our inventory</p>
        </div>
        <div className="feature">
          <h3>Financing Options</h3>
          <p>Flexible financing solutions for all credit situations</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
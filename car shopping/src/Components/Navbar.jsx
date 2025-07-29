import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Car Yard</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;
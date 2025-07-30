import '../Styes/Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Car Yard</h1>
          <p>Your premier destination for luxury vehicles</p>
          <a href="/cars" className="cta-button">Browse Cars</a>
        </div>
      </section>
      
      <section className="features">
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Premium Cars</h3>
            <p>Handpicked luxury and sports cars</p>
          </div>
          <div className="feature-card">
            <h3>Best Prices</h3>
            <p>Competitive pricing in KSh</p>
          </div>
          <div className="feature-card">
            <h3>Full Service</h3>
            <p>Complete buying experience</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
import React from 'react';
// import Header from './header';
import Mission from './mission';
import NewsSlider from './newsSlider';
import Footer from './Footer';

function Home() {
  return (
    <div className="home-container" style={{ textAlign: 'center', minHeight: '100vh', backgroundColor: 'black', color: 'white', padding: '50px' }}>
      
      <Header />

      <h1 style={{ color: 'orange', marginTop: '50px' }}>Welcome to My Website</h1>
      <p style={{ color: 'white', marginTop: '20px' }}>
        This is the Home page of your orange-and-black themed React app.
      </p>
      <button
        style={{
          marginTop: '20px',
          backgroundColor: 'orange',
          color: 'black',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Click Me
      </button>

      <Mission />
      <NewsSlider />
      <Footer />
    </div>
  );
};

export default Home;
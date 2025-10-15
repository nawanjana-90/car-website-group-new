// src/components/CarGrid.jsx
import React from "react";
import "./CarGrid.css";
import cars from "../data/cars";

function CarGrid() {
  return (
    // The main container should be 'car-grid-container' as per your CSS, 
    // and it will hold the 'car-grid'
    <div className="car-grid-container"> 
      <div className="car-grid">
        {cars.map((car) => (
          // Changed 'car-card' to 'car-box' to match the CSS
          <div key={car.id} className="car-box">
            <img src={car.image} alt={car.name} className="car-image" />
            
            {/* Added 'car-info' div to wrap the text elements */}
            <div className="car-info">
              {/* Keeping 'car-name' for potential styling, but using 'car-brand' for the brand */}
              <p className="car-brand">{car.brand} - {car.name}</p>
              {/* Using 'car-price' for the price */}
              <p className="car-price">{car.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarGrid;
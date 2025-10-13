import React from "react";
import "./CarGrid.css";

function CarGrid({ cars }) {
  return (
    <div className="car-grid-container">
      <div className="car-grid">
        {cars.map((car) => (
          <div key={car.id} className="car-box">
            <img src={car.image} alt={car.name} className="car-image" />

            {/* Overlay text removed */}

            {/* Bottom info bar */}
            <div className="car-info">
              <p className="car-brand">{car.brand}</p>
              <p className="car-price">{car.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarGrid;

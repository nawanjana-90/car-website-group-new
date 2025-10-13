// src/components/CarGrid.jsx
import React from "react";
import "./CarGrid.css";
import cars from "../data/cars";

function CarGrid() {
  return (
    <div className="car-grid">
      {cars.map((car) => (
        <div key={car.id} className="car-card">
          <img src={car.image} alt={car.name} className="car-image" />
          <h3 className="car-name">{car.name}</h3>
          <p className="car-brand">{car.brand}</p>
          <p className="car-price">{car.price}</p>
        </div>
      ))}
    </div>
  );
}

export default CarGrid;

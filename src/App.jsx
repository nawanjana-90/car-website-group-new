// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CarGrid from "./components/CarGrid";
import Pagination from "./components/pagination";
import Footer from "./components/Footer";
import cars from "./data/cars";
import "./App.css";

function App() {
  const carsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Directly use all cars for grid
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const totalPages = Math.ceil(cars.length / carsPerPage);

  return (
    <div className="App">
      <Navbar />

      {/* Car grid */}
      <CarGrid cars={currentCars} />

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <Footer />
    </div>
  );
}

export default App;

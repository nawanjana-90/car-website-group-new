// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/about";
import CarGrid from "./components/CarGrid";
import Service from "./components/services"; // Correct import
import Footer from "./components/Footer";
import "./App.css";
import Career from "./components/careers";
import Contact from "./components/contact";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<CarGrid />} />
          <Route path="/services" element={<Service />} />
           <Route path="/career" element={<Career />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

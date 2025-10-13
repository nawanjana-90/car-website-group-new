import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Our Car Sale Shop</h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-blue-600">AutoDrive Motors</span> — your trusted destination for 
          high-quality vehicles at unbeatable prices. We specialize in both 
          brand-new and certified pre-owned cars, offering customers a reliable 
          and transparent car-buying experience.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Since our founding in 2020, we have built a reputation for honesty, 
          quality, and service excellence. Our team of automotive experts is 
          passionate about helping you find the perfect vehicle that fits your 
          lifestyle and budget.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Whether you’re buying your first car, upgrading to something new, or 
          selling your old one — <span className="font-semibold text-blue-600">AutoDrive Motors</span> is here to make your 
          journey smooth and enjoyable. Visit our showroom or explore our 
          website to discover our latest collection!
        </p>
      </div>
      <div className="mt-10">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80"
          alt="Car showroom"
          className="rounded-2xl shadow-lg w-full max-w-3xl"
        />
      </div>
    </div>
  );
};

export default About;

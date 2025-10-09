import React from "react";

const Footer = () => (
  <footer className="py-10 mt-12 bg-gray-50">
    <div className="flex flex-col justify-between max-w-6xl px-4 mx-auto text-sm text-gray-600 md:flex-row">
      <p>© {new Date().getFullYear()} CarSale. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>
    </div>
  </footer>
);

export default Footer;

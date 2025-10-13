import React from "react";

const Mission = () => (
  <section id="mission" className="max-w-6xl px-4 py-12 mx-auto">
    <div className="gap-8 p-8 shadow-sm bg-gradient-to-r from-gray-50 to-white rounded-2xl md:flex md:items-center">
      <div className="md:w-1/2">
        <h2 className="mb-3 text-2xl font-bold">Our Mission</h2>
        <p className="mb-4 text-gray-700">
          At CarSale we aim to make buying and selling vehicles easy, transparent and secure.
          We carefully verify listings, support buyers with financing options, and provide fair trade-in estimates.
        </p>
      </div>
      <div className="p-6 mt-6 md:w-1/2 md:mt-0 bg-indigo-50 rounded-xl">
        <h3 className="mb-2 font-semibold">Why choose us?</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>✔ Verified listings</li>
          <li>✔ Local support</li>
          <li>✔ Competitive pricing</li>
          <li>✔ Warranty options</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Mission;

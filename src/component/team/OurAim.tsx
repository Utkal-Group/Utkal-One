"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBuilding, FaRoad, FaWater, FaIndustry, FaHome, FaBriefcase } from "react-icons/fa";

export default function OurAim() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0856c2] min-h-screen flex flex-col items-center py-10 px-5">
      <h1 className="text-4xl text-white font-bold mb-10" data-aos="fade-down">Our Vision & Mission</h1>

      {/* Vision Section */}
      <div className="max-w-4xl text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-lg shadow-blue-500/50 mb-10" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
        <p className="text-gray-200 text-lg">
          To be a trusted leader in infrastructure construction and interior design, creating spaces that inspire, enrich, and stand the test of time.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl text-center bg-gradient-to-r from-green-600 to-green-800 text-white p-6 rounded-xl shadow-lg shadow-green-500/50 mb-10" data-aos="fade-up">
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <ul className="text-gray-200 text-lg space-y-2">
          <li>✅ Delivering innovative and sustainable infrastructure solutions.</li>
          <li>✅ Designing interiors that enhance comfort and functionality.</li>
          <li>✅ Ensuring exceptional quality and customer satisfaction in every project.</li>
        </ul>
      </div>

      {/* Services Section */}
      <h2 className="text-3xl text-white font-bold mb-6" data-aos="fade-down">Services We Offer</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        {/* Infrastructure Construction */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-lg shadow-gray-500/50" data-aos="fade-right">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FaIndustry className="text-yellow-400" /> Infrastructure Construction
          </h3>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center gap-2">
              <FaBuilding className="text-blue-400" /> <span>Building Construction: Residential & Commercial projects.</span>
            </li>
            <li className="flex items-center gap-2">
              <FaRoad className="text-red-400" /> <span>Road Construction: High-quality, long-lasting roads.</span>
            </li>
            <li className="flex items-center gap-2">
              <FaWater className="text-blue-300" /> <span>Drainage Solutions: Efficient water management systems.</span>
            </li>
            <li className="flex items-center gap-2">
              <FaIndustry className="text-green-400" /> <span>Dam Construction: Water storage, flood control, and irrigation.</span>
            </li>
          </ul>
        </div>

        {/* Interior Design */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-lg shadow-gray-500/50" data-aos="fade-left">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <FaHome className="text-pink-400" /> Interior Design
          </h3>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center gap-2">
              <FaHome className="text-purple-400" /> <span>Residential Interiors: Personalized, stylish home spaces.</span>
            </li>
            <li className="flex items-center gap-2">
              <FaBriefcase className="text-orange-400" /> <span>Office Interiors: Elegant & productive workspace designs.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

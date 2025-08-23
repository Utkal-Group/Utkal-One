"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import OurHistory2 from "./OurHistory2";
import OurCompany1 from "./OurCompany1";
import CoreValues from "./CoreValues";
import Leadership from "./Leadership";
import Awards from "./Awards";
import AffiliatesPartners from "./AffiliatesPartners";
import Locations from "./Locations";
import AOS from "aos";
import "aos/dist/aos.css";
import about from "../../../public/assets/home/about-1.jpg";

// Define menu items and their corresponding components
const menuItems = [
  { label: "Our Company", component: <OurCompany1 /> },
  { label: "Our History", component: <OurHistory2 /> },
  { label: "Core Values", component: <CoreValues /> },
  { label: "Leadership", component: <Leadership /> },
  { label: "Awards", component: <Awards /> },
  { label: "Affiliates & Partners", component: <AffiliatesPartners /> },
  { label: "Locations", component: <Locations /> },
];

export default function OurCompany() {
  const [selectedMenu, setSelectedMenu] = useState(menuItems[0].label);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <section
      className="main-container py-12 flex flex-col md:flex-row gap-8 bg-gradient-to-r from-orange-500 via-white to-blue-500"
      data-aos="fade-up"
    >
      {/* Sidebar Navigation */}
      <div
        className="w-full md:w-1/3 bg-gradient-to-r from-orange-200 via-white to-blue-100 shadow-md rounded-lg p-6"
        data-aos="fade-right"
      >
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className={`text-lg font-semibold  cursor-pointer transition ${
                selectedMenu === item.label ? "text-orange-500" : "text-gray-700"
              } hover:text-orange-500`}
              onClick={() => setSelectedMenu(item.label)}
              data-aos="fade-right"
              data-aos-delay="200"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Dynamic Content Section */}
      <div
        className="w-full md:w-2/3 bg-gradient-to-t from-orange-500 via-white to-blue-500 shadow-md rounded-lg p-6"
        data-aos="fade-left"
      >
        <Image
          src={about.src}
          width={400}
          height={100}
          alt="Our Company"
          className="rounded-lg shadow-lg w-full h-auto mb-6"
          data-aos="zoom-in"
        />
        {/* Render Selected Content */}
        {menuItems.find((item) => item.label === selectedMenu)?.component}
      </div>
    </section>
  );
}

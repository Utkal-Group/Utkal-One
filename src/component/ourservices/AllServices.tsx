"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import { construct, local, master, procure, service1, service2, startup, sustain, tech } from "../../../public/assets/home";

const services = [
  {
    title: "Financing & Equity Investment",
    description:
      "In addition to building some of the world's modern marvels, Utkal One plays an important role in developing and financing projects in the fossil-power industry.",
    image: service2,
  },
  {
    title: "Engineering",
    description:
      "We rely on advanced technology to deliver engineering and construction projects to our customers, on any given project in any location.",
    image: service1,
  },
  {
    title: "Master Planning",
    description:
      "The key to a successful project often depends on what happens in its earliest phase. Before any work commences, there is an idea, a vision.",
    image: master,
  },
  {
    title: "Procurement",
    description:
      "Utkal One supply chain organization provides our customers with global procurement and contracts services that are unsurpassed in the industry.",
    image: procure,
  },
  {
    title: "Sustainability Solutions",
    description:
      "We have delivered highly complex projects, in some of the most challenging environments, contributing to the evolution of the engineering industry.",
    image: sustain,
  },
  {
    title: "Local Capacity Development",
    description:
      "Utkal One brings an optimize-and-maximize approach when beginning work in a particular country, tailoring the approach to local conditions.",
    image: local,
  },
  {
    title: "Construction",
    description:
      "Utkal One has the resources and knowledge to undertake just about any job. With projects, people, and offices in more than 40 countries.",
    image: construct,
  },
  {
    title: "Startup & Operations",
    description:
      "Utkal One offers startup programs, management and operations, and maintenance support roles for facilities all around the world.",
    image: startup,
  },
  {
    title: "Technology Licensing & Consulting",
    description:
      "Technology drives our business—it speeds schedules, cuts costs, improves productivity, ensures quality, and delivers long-term value for our customers.",
    image: tech,
  },
];

export default function AllServices() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="w-full py-16 bg-gradient-to-r from-blue-700 to-white"
      data-aos="fade-up"
    >
      {/* Section Title */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-semibold text-gray-900">All Services</h2>
        <div className="w-16 h-[2px] bg-gray-400 mx-auto mt-2"></div>
      </div>

      {/* Services Section */}
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden relative group"
            data-aos="fade-up"
            data-aos-delay={index * 150} // Staggered effect
          >
            {/* Image with Overlay */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
               width={400}   // Adjust width as needed
               height={300}
                src={service.image.src}
                alt={service.title}
                className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>

            {/* Service Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

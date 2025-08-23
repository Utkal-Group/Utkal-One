"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { icon1, icon2, icon3 } from "../../../public/assets/ourservices";


const services = [
  {
    icon: icon1.src,
    title: "Design & Build Package",
    description:
      "Our comprehensive Design & Build package ensures a seamless transition from concept to completion. We integrate innovative design with high-quality construction, managing every detail to bring your vision to life efficiently and cost-effectively.",
  },
  {
    icon: icon2.src,
    title: "Building Renovation",
    description:
      "Revitalize your space with our expert building renovation services. Whether it's a modern upgrade, structural improvement, or a complete transformation, we enhance functionality and aesthetics while preserving the integrity of your property.",
  },
  {
    icon: icon3.src,
    title: "Project Management",
    description:
      "From planning to execution, our project management team ensures your construction project stays on track, on time, and within budget. We handle coordination, risk management, and quality control to deliver exceptional results with minimal hassle.",
  },
];

export default function BestServices() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="w-full py-12 bg-gradient-to-r from-blue-700 to-white"
      data-aos="fade-up"
    >
      {/* Section Title */}
      <div className="text-center mb-10" data-aos="fade-up">
        <h3 className="text-gray-500 uppercase tracking-wide text-sm">
          We Take Care Of Everything
        </h3>
        <h2 className="text-3xl font-semibold text-gray-900 mt-2">
          We Bring You The Best Services
        </h2>
      </div>

      {/* Services List */}
      <div
        className="max-w-5xl mx-auto space-y-8 sm:space-y-6 md:space-y-8 lg:space-y-10"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center space-x-6 sm:flex-col sm:space-x-0 sm:space-y-4 md:flex-row md:space-x-6 border-b pb-6"
            data-aos="fade-up"
            data-aos-delay={index * 200} // Staggered animation
          >
            {/* Icon */}
            <Image
            width={100}
            height={0}
              src={service.icon}
              alt={service.title}
              className="w-16 h-16 object-contain sm:w-20 sm:h-20"
              data-aos="zoom-in"
            />

            {/* Text Content */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

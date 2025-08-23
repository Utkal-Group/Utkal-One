"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  construct,
  local,
  master,
  procure,
  service1,
  startup,
  sustain,
  tech,
} from "../../../public/assets/home";

const services = [
  {
    title: "Engineering",
    description:
      "We leverage advanced technology to deliver engineering solutions worldwide.",
    image: service1,
  },
  {
    title: "Master Planning",
    description:
      "Strategic planning ensures a strong foundation before execution.",
    image: master,
  },
  {
    title: "Procurement",
    description:
      "We provide unmatched global procurement and contracts services.",
    image: procure,
  },
  {
    title: "Sustainability Solutions",
    description:
      "Delivering complex projects with innovative sustainability strategies.",
    image: sustain,
  },
  {
    title: "Local Capacity Development",
    description:
      "We tailor our approach to optimize and maximize local resources.",
    image: local,
  },
  {
    title: "Construction",
    description:
      "Expertise in large-scale projects across 40+ countries.",
    image: construct,
  },
  {
    title: "Startup & Operations",
    description:
      "Providing management and operational support globally.",
    image: startup,
  },
  {
    title: "Technology Licensing",
    description:
      "Driving efficiency with cutting-edge technology solutions.",
    image: tech,
  },
];

export default function Services() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const handleReadMore = (title: string) => {
    const slug = title.toLowerCase().replace(/ /g, "-");
    router.push(`/services/${slug}`);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= services.length ? 0 : prev + itemsPerPage));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - itemsPerPage < 0 ? services.length - itemsPerPage : prev - itemsPerPage));
  };

  return (
    <section className="w-full lg:h-screen italic pt-10 flex flex-col lg:flex-row items-center bg-gradient-to-t from-gray-900 via-blue-700 to-gray-900 text-white py-24">
      
      {/* Left Section - Services */}
      <div className="w-full lg:w-2/3 p-6 full main-container">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-white" data-aos="fade-right">Our Services</h1>
          <div className="flex gap-2" data-aos="fade-left">
            <ArrowCircleLeftIcon className="cursor-pointer text-white hover:text-blue-300 transition" onClick={handlePrev} />
            <ArrowCircleRightIcon className="cursor-pointer text-white hover:text-blue-300 transition" onClick={handleNext} />
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.slice(currentIndex, currentIndex + itemsPerPage).map((service, index) => (
            <div
              key={index}
              className="relative bg-gray-800 shadow-xl p-6 rounded-xl overflow-hidden group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="relative w-full h-60 rounded-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-300 mt-2">{service.description}</p>
                <button
                  onClick={() => handleReadMore(service.title)}
                  className="mt-4 text-blue-400 hover:text-orange-500 font-semibold transition"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Quick Quote Form */}
      <div className="w-full lg:w-1/3 p-6 bg-gradient-to-r from-blue-500 via-blue-800 to-gray-800 rounded-xl shadow-2xl text-center">
        <h2 className="text-3xl font-bold mb-4" data-aos="fade-in">Get A Quick Quote</h2>
        <p className="text-lg text-gray-200 mb-6" data-aos="fade-in">Need a quality contractor for your next project?</p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400"
            data-aos="fade-up"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <textarea
            placeholder="Your Message"
            className="p-4 h-32 rounded-lg bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-blue-400"
            data-aos="fade-up"
            data-aos-delay="300"
          ></textarea>
          <button
            type="submit"
            className="py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Send Message
          </button>
        </form>
      </div>
      
    </section>
  );
}

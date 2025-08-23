"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Building } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { design1, design2, design3, design4 } from "../../../public/assets/project";


const imageList = [
  design2.src,
  design1.src,
  design3.src,
  design4.src,
];

export default function GetInTouch() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  return (
    <section
      className="main-container  py-12 grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 text-white"
    >
      {/* Left: Clickable Image Carousel */}
      <div
        className="relative w-full h-64 md:h-72 lg:h-80 bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
        data-aos="fade-up"
      >
        <Image
          src={imageList[currentIndex]}
          alt="Company Building"
          layout="fill"
          objectFit="cover"
          className="rounded-lg transition-transform duration-300 hover:scale-105"
          onClick={() => setIsModalOpen(true)}
        />
        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          ▶
        </button>
      </div>

      {/* Middle: Google Map Embed */}
      <div className="w-full h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden" data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.033069523474!2d85.81867477501065!3d20.298898281173987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c2e0a39ec9%3A0xe46791b69959a045!2sGIET%20Bhubaneswar%20Ghangapatana%20City%20Office!5e0!3m2!1sen!2sin!4v1738584502938!5m2!1sen!2sin"
          width="900"
          height="450"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Right: Contact Details */}
      <div data-aos="fade-up">
        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Get In Touch</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3">
            <MapPin className="text-orange-500" />
            <span>Plot no-HIG-42, Jayadev Vihar, Bhubaneshwar, Odisha, 751013</span>
          </li>
          <li className="flex items-center space-x-3">
            <Phone className="text-orange-500" />
            <span>9668862999</span>
          </li>
          <li className="flex items-center space-x-3">
            <Mail className="text-orange-500" />
            <span>info@utkalone.net</span>
          </li>
          <li className="flex items-center space-x-3">
            <Building className="text-orange-500" />
            <span>9668862999</span>
          </li>
          <li>Mon - Sat: 9:00 - 6:00</li>
        </ul>
      </div>

      {/* Modal for Enlarged Image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative">
            <button
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full shadow-lg"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              ◀
            </button>
            <Image
              src={imageList[currentIndex]}
              alt="Expanded View"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

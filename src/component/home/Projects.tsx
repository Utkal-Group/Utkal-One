"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import { art, design, exte, exterior, interior } from "../../../public/assets/home";

const images = [
  { id: "art", src: art.src, alt: "Art", title: "Art", description: "A mesmerizing fusion of colors and textures.", category: "Art" },
  { id: "design", src: design.src, alt: "Design", title: "3D Design", description: "An awe-inspiring 3D representation.", category: "3D Design" },
  { id: "exterior-1", src: exte.src, alt: "Exte", title: "Exterior", description: "A modern marvel of design.", category: "Exterior" },
  { id: "exterior-2", src: exterior.src, alt: "Exterior", title: "The Montparnasse Tower", description: "Historic charm meets modern innovation.", category: "Exterior" },
  { id: "interior", src: interior.src, alt: "Interior", title: "Interior", description: "A blend of classical and modern designs.", category: "Interior" },
];

const proItems = [
  { title: "All", category: "All" },
  { title: "3D Design", category: "3D Design" },
  { title: "Art", category: "Art" },
  { title: "Exterior", category: "Exterior" },
  { title: "Interior", category: "Interior" },
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(images);
  const [isFading, setIsFading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    setIsFading(true);
    setTimeout(() => {
      setFilteredImages(selectedCategory === "All" ? images : images.filter((img) => img.category === selectedCategory));
      setIsFading(false);
    }, 300);
  }, [selectedCategory]);

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-black w-full min-h-screen py-10">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Title Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-6" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-white">Latest Projects</h1>
          <span className="hidden md:block w-full border-t border-gray-500 mx-6"></span>
        </div>

        {/* Navigation Menu */}
        <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">
          {proItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(item.category)}
              className={`px-4 py-2 text-lg transition-all duration-300 rounded-md ${
                selectedCategory === item.category ? "bg-orange-500 text-white font-bold" : "bg-gray-700 text-gray-300 hover:bg-orange-500 hover:text-white"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Image Grid */}
      <div
        className={`mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}
      >
        {filteredImages.length > 0 ? (
          filteredImages.map((image) => (
            <div key={image.id} className="relative group overflow-hidden rounded-xl shadow-lg" data-aos="zoom-in">
              <Image src={image.src} alt={image.alt} width={800} height={700} className="w-full h-[250px] object-cover rounded-lg transition-transform duration-500 group-hover:scale-105" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 px-4">
                <h1 className="text-lg sm:text-xl font-bold">{image.title}</h1>
                <p className="text-sm sm:text-base mt-1 text-center">{image.description}</p>
                <button
                  className="mt-3 px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition"
                  onClick={() => router.push(`/portfolio/${image.id}`)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-lg text-center col-span-full py-10">No projects found.</p>
        )}
      </div>
    </section>
  );
}

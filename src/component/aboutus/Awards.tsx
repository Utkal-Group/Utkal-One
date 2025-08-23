
import Image from "next/image";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { award1, award2, award3, award4, award5, award6 } from "../../../public/assets/aboutus";

const awards = [
  { image: award1.src, alt: "Construction Awards" },
  { image: award2.src, alt: "Modern Architecture" },
  { image: award3.src, alt: "5 Star Award" },
  { image: award4.src, alt: "Construction Awards 2014" },
  { image: award5.src, alt: "Gold Star Award" },
  { image: award6.src, alt: "Winner Badge" },
];

export default function Awards() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 py-6">
      {/* Left Button */}
      <button onClick={scrollLeft} className="bg-orange-500 p-2 rounded-full text-white">
        <FaChevronLeft />
      </button>

      {/* Carousel */}
      <div ref={carouselRef} className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {awards.map((award, index) => (
          <div key={index} className="min-w-[100px] sm:min-w-[120px] md:min-w-[150px]">
            <Image src={award.image} width={400}   // Adjust width as needed
               height={400} alt={award.alt} className="w-24 h-24 sm:w-28 sm:h-28 object-cover" />
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button onClick={scrollRight} className="bg-orange-500 p-2 rounded-full text-white">
        <FaChevronRight />
      </button>
    </div>
  );
}

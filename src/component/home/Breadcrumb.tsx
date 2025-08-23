"use client";

import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Use relative imports from "public" (Next.js handles this)
import wallpaper from "./../../../public/assets/home/604.jpg";
import wallpaper1 from "./../../../public/assets/home/1598.jpg";
import wallpaper2 from "./../../../public/assets/home/2991.jpg";
import wallpaper3 from "./../../../public/assets/home/3932.jpg";

// ✅ Image array
const images = [wallpaper, wallpaper1, wallpaper2, wallpaper3];

export default function ImageSlider() {
  const [, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false, // Hides arrows for cleaner UI
    beforeChange: (_oldIndex: number, newIndex: number) => setCurrentIndex(newIndex),
  };

  return (
    <div className="relative w-full h-screen md:h-[500px] lg:h-screen overflow-hidden">
      {/* React Slick Slider */}
      <Slider {...settings} className="w-full h-full">
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-screen lg:h-screen md:h-[500px]">
            <Image 
              src={src} 
              alt={`Slider Image ${index}`} 
              layout="fill" 
              objectFit="cover" 
              priority
              className="w-full h-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

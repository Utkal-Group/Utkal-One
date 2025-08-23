// Design.tsx
"use client";
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AOS from "aos";
import { art, design, exte, exterior, interior } from '../../../public/assets/home';
import { design1, design2,  design3, design4, design5 } from '../../../public/assets/project';
interface ImageType {
  id:string,
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
}

const images: ImageType[] = [
  { id: "art", src: art.src, alt: "Art", title: "Art", description: "The Shared Landlord", category: "Art" },
  { id: "design", src: design.src, alt: "Design", title: "3D Design", description: "Burj Khalifa in Dubai", category: "3D Design" },
  { id: "exterior-1", src: exte.src, alt: "Exterior", title: "Exterior", description: "Shanghai Wheel Lock", category: "Exterior" },
  { id: "exterior-2", src: exterior.src, alt: "Exterior", title: "The Montparnasse Tower", description: "In Paris", category: "Exterior" },
  { id: "interior-1", src: interior.src, alt: "Interior", title: "Interior", description: "White House in Washington", category: "Interior" },
  { id: "new-art", src: design1.src, alt: "New Art", title: "Modern Art", description: "A stunning abstract painting", category: "Art" },
  { id: "new-design", src: design2.src, alt: "New Design", title: "Futuristic Design", description: "A concept for future cities", category: "3D Design" },
  { id: "new-exterior", src: design3.src, alt: "New Exterior", title: "Glass Skyscraper", description: "A beautiful skyscraper", category: "Exterior" },
  { id: "new-interior", src: design4.src, alt: "New Interior", title: "Luxury Living Room", description: "An elegant interior design", category: "Interior" },
  { id: "new-architecture", src: design5.src, alt: "New Architecture", title: "Classic Architecture", description: "A blend of old and new", category: "Exterior" }
];

const proItems = [
  { title: "All",  category: "All" },
  { title: "3D Design",  category: "3D Design" },
  { title: "Art",  category: "Art" },
  { title: "Exterior",  category: "Exterior" },
  { title: "Interior",  category: "Interior" }
];

export default function Design() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [filteredImages, setFilteredImages] = useState(images);
  const [isFading, setIsFading] = useState<boolean>(false);

  const router = useRouter();  // Initialize useRouter for navigation

   useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []); 

  useEffect(() => {
    setIsFading(true);

    setTimeout(() => {
      setFilteredImages(
        selectedCategory === "All"
          ? images
          : images.filter((image) => image.category === selectedCategory)
      );
      setIsFading(false);
    }, 300);
  }, [selectedCategory]);

 
  
  
  

  return (
    <section className="bg-slate-200 my-20 w-full">
      <div className="flex text-nowrap main-container gap-6 w-full">
        
        <div className='flex items-center justify-center w-full'>
          <ul className="flex items-center justify-center space-x-8 h-14 text-lg">
          {proItems.map((item, index) => (
              <li key={index} className="relative group italic">
                <button
                  onClick={() => setSelectedCategory(item.category)}
                  className={`text-white hover:text-orange-500 transition duration-300 ${
                    selectedCategory === item.category ? "text-orange-500 font-bold" : ""
                  }`}
                >
                  {item.title}
                </button>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 overflow-hidden transition-opacity duration-500 ${isFading ? "opacity-0" : "opacity-100"}`}>
        {filteredImages.length > 0 ? (
          filteredImages.map((image) => (
            <div key={image.id} className="relative group overflow-hidden h-56 w-full">
              <Image 
  src={image.src} 
  alt={image.alt} 
  width={600}   // Adjust width as needed
  height={500}  // Adjust height as needed
  className="h-full w-full object-cover transition-all duration-500 scale-100 group-hover:scale-105" 
/>

              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white opacity-0 transition-all duration-500 ease-in-out 
                before:absolute before:inset-0 before:bg-black before:scale-110 before:opacity-0 before:transition-transform before:duration-500
                group-hover:opacity-100 group-hover:before:scale-100 group-hover:before:opacity-100
                group-hover:before:origin-bottom group-hover:hover:before:translate-y-full
                group-hover:hover:before:origin-top">
                <h1 className="text-white text-lg font-semibold">{image.title}</h1>
                <p className="text-white text-sm mt-1">{image.description}</p>
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
          <p className="text-gray-600 text-lg text-center col-span-5 py-10">No projects found.</p>
        )}
      </div>
    </section>
  );
}

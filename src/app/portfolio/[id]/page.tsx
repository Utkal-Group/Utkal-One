"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";


import { art, design, exte, exterior, interior } from "../../../../public/assets/home";
import { design1, design2, design3, design4, design5 } from "../../../../public/assets/project";

const images = [
  { 
    id: "art", 
    src: art.src, 
    alt: "Art", 
    title: "Art", 
    description: "The Shared Landlord – a thought-provoking piece that captures the harmony between nature and urban life, blending bold strokes and vibrant hues.", 
    category: "Art" 
  },
  { 
    id: "design", 
    src: design.src, 
    alt: "Design", 
    title: "3D Design", 
    description: "Burj Khalifa in Dubai – a stunning 3D visualization of the world’s tallest skyscraper, showcasing its intricate design and futuristic elegance.", 
    category: "3D Design" 
  },
  { 
    id: "exterior-1", 
    src: exte.src, 
    alt: "Exterior", 
    title: "Exterior", 
    description: "Shanghai Wheel Lock – an architectural masterpiece that fuses modern engineering with the charm of traditional Asian aesthetics.", 
    category: "Exterior" 
  },
  { 
    id: "exterior-2", 
    src: exterior.src, 
    alt: "Exterior", 
    title: "Exterior", 
    description: "The Montparnasse Tower in Paris – a striking landmark that stands tall amidst the Parisian skyline, representing a bold architectural statement.", 
    category: "Exterior" 
  },
  { 
    id: "interior", 
    src: interior.src, 
    alt: "Interior", 
    title: "Interior", 
    description: "White House in Washington – an exquisite blend of neoclassical and modern interior elements, radiating sophistication and grandeur.", 
    category: "Interior" 
  },
  { 
    id: "design1", 
    src: design1.src, 
    alt: "New Art", 
    title: "Modern Art", 
    description: "A stunning abstract painting that evokes emotion through bold colors, dynamic patterns, and a sense of unrestrained creativity.", 
    category: "Art" 
  },
  { 
    id: "design2", 
    src: design2.src, 
    alt: "New Design", 
    title: "Futuristic Design", 
    description: "A visionary concept of future cities, featuring sleek, eco-friendly structures that redefine the way we perceive urban spaces.", 
    category: "3D Design" 
  },
  { 
    id: "design3", 
    src: design3.src, 
    alt: "New Exterior", 
    title: "Glass Skyscraper", 
    description: "A mesmerizing glass skyscraper that reflects the changing sky, embodying transparency, light, and modern elegance.", 
    category: "Exterior" 
  },
  { 
    id: "design4", 
    src: design4.src, 
    alt: "New Interior", 
    title: "Luxury Living Room", 
    description: "An elegant interior space that exudes warmth and sophistication, with carefully curated furniture and ambient lighting.", 
    category: "Interior" 
  },
  { 
    id: "design5", 
    src: design5.src, 
    alt: "New Architecture", 
    title: "Classic Architecture", 
    description: "A stunning fusion of historical elegance and modern precision, showcasing intricate details and a timeless aesthetic.", 
    category: "Exterior" 
  }
];

const ProjectPage = () => {
  const { id } = useParams();
  const project = images.find((image) => image.id === id);

  // ✅ FIX: Use useEffect inside the component
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (!project) {
    return (
      <p 
        className="text-center text-red-500 text-lg" 
        data-aos="fade-up"
      >
        Project not found.
      </p>
    );
  }

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white"
      data-aos="fade-up"
    >
      <h1 className="text-5xl font-extrabold text-center mb-6" data-aos="zoom-in">
        {project.title}
      </h1>
      
      <div className="w-full max-w-4xl">
        <Image 
          src={project.src} 
          alt={project.alt} 
          width={800} 
          height={500} 
          className="mt-6 w-full rounded-lg shadow-xl" 
          data-aos="fade-right"
        />
      </div>
      
      <p className="mt-6 text-lg text-gray-300 text-center max-w-3xl" data-aos="fade-left">
        {project.description}
      </p>
    </div>
  );
};

export default ProjectPage;

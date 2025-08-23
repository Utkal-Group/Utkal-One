"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { about } from "../../../public/assets/home";
import Link from "next/link";
import Image from "next/image";

export default function WhoWeAre() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#3e342e] via-gray-500 to-blue-900 w-full py-16">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2" data-aos="zoom-in">
          <div className="relative group">
            <Image
              src={about.src}
              alt="Who We Are"
              width={700}
              height={600}
              className="h-auto w-full rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg group-hover:bg-opacity-30 transition duration-500"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col text-white space-y-6" data-aos="fade-up">
          <h2 className="text-4xl font-bold leading-tight flex items-center gap-3">
            Who We Are?
            <span className="h-[3px] w-16 bg-orange-500"></span>
          </h2>
          <p className="text-lg leading-relaxed tracking-wide text-gray-200">
            UtkalOne Pvt. Ltd. is a leading infrastructure development company specializing in 
            building, road, drain, and dam construction. We also excel in designing and executing 
            interior solutions for homes and offices. Our team of skilled engineers, architects, and 
            designers work tirelessly to deliver top-quality projects that meet the highest standards of 
            safety, sustainability, and aesthetics.
          </p>
          <div>
            <Link href="/ourteam">
              <button className="mt-4 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-transform duration-300 hover:scale-105 shadow-lg">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

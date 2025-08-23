
import Image from 'next/image';
import React from 'react';
import { year1, year2, year3 } from '../../../public/assets/aboutus';

export default function OurHistory2() {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-4">Our History</h2>
      <p className="mb-6 text-gray-600">
        We are committed to leaving a legacy of progress by developing local skills for sustained economic opportunity
        and volunteering our time and talent to the communities where we work.
      </p>
      
      <div className="space-y-10 border-l-4 border-gray-300 pl-6">
        <div className="relative flex items-start space-x-6">
          <Image src={year1.src} width={400}   // Adjust width as needed
               height={300} alt="History 1898" className="w-32 h-24 rounded shadow-lg" />
          <div>
            <span className="text-lg font-bold">1898</span>
            <h3 className="text-red-500 font-semibold">The early days</h3>
            <p className="text-gray-600">
              In 1898, a nearly bankrupt 25-year-old Bechtel and his pregnant wife, Clara, left Peabody, Kansas, and
              headed 100 miles south in search of construction work and new opportunity. Thus began an epic journey.
            </p>
          </div>
        </div>
        
        <div className="relative flex items-start space-x-6">
          <Image src={year2.src} width={400}   // Adjust width as needed
               height={300} alt="History 1931" className="w-32 h-24 rounded shadow-lg" />
          <div>
            <span className="text-lg font-bold">1931</span>
            <h3 className="text-red-500 font-semibold">{`Bechtel's`} first megaproject</h3>
            <p className="text-gray-600">
              Hoover Dam—officially dedicated by President Franklin D. Roosevelt in September 1935—represents a pivotal
              event in the history of Bechtel. There have been bigger projects, and there will still be bigger jobs in
              years to come.
            </p>
          </div>
        </div>
        
        <div className="relative flex items-start space-x-6">
          <Image src={year3.src} width={400}   // Adjust width as needed
               height={300} alt="History 1964" className="w-32 h-24 rounded shadow-lg" />
          <div>
            <span className="text-lg font-bold">1964</span>
            <h3 className="text-red-500 font-semibold">First mass-transit project</h3>
            <p className="text-gray-600">
              Bechtel launched its first mass-transit project, paving the way for modern urban infrastructure across the
              world. This marked a turning point in transportation development.
            </p>
          </div>
        </div>
        <div className="relative flex items-start space-x-6">
          <Image src={year3.src} width={400}   // Adjust width as needed
               height={300} alt="History 1964" className="w-32 h-24 rounded shadow-lg" />
          <div>
            <span className="text-lg font-bold">1987</span>
            <h3 className="text-red-500 font-semibold">Surviving a global downturn</h3>
            <p className="text-gray-600">
            Bechtel gets involved in completing the Channel Tunnel, connecting England and France. One of the century’s largest engineering and construction projects and the world’s largest privately financed infrastructure project.
            </p>
          </div>
        </div>
        <div className="relative flex items-start space-x-6">
          <Image src={year3.src} width={400}   // Adjust width as needed
               height={300} alt="History 1964" className="w-32 h-24 rounded shadow-lg" />
          <div>
            <span className="text-lg font-bold">2016</span>
            <h3 className="text-red-500 font-semibold">Building a new century</h3>
            <p className="text-gray-600">
            Bechtel becomes the first engineering and construction company to embrace Six Sigma, a data-driven methodology for improving quality and begins a nationwide network expansion for a major US wireless carrier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

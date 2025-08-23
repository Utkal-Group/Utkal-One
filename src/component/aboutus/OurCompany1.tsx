
import Image from 'next/image';
import React from 'react';
import frank from '../../../public/assets/home/frank.jpg';

export default function OurCompany1() {
  return (
    <div className="p-6 bg-white flex flex-wrap items-center justify-between">
      {/* Left Section */}
      <div className="w-full md:w-1/3 p-4">
        <button className="border-2 border-orange-500 text-black px-4 py-2 rounded-md w-full">
          Download Brochure
        </button>
        <div className="mt-6 bg-gray-100 p-6 text-center">
          <h3 className="text-lg font-bold">Get Your <span className="text-orange-500">Free Consulting</span></h3>
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md">Click here!</button>
        </div>
        <p className="mt-4 text-gray-700">
          Have an idea, a dream? We can make it happen. Join our family, we offer free consultation to
          achieve your goals with creativity and quality that you deserve.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/3 p-4">
        <h2 className="text-2xl font-bold">Our Company</h2>
        <p className="mt-2 text-gray-700">
          Utkal One is one of the most respected global engineering, construction, and project management companies.
          Together with our customers, we deliver landmark projects that create long-term progress and economic growth.
          Since 1898, {`we’ve`} completed more than 25,000 extraordinary projects across 160 countries on all seven continents.
        </p>

        <div className="mt-4 bg-gray-100 p-4 md:p-6 rounded-md">
  <p className="italic text-gray-700 text-sm md:text-base">
    “The customer support and response to suggestions and updates has been fantastic! The best support I have had on any theme!”
  </p>
  <div className="flex items-center mt-4">
    <Image 
      src={frank.src} 
      width={100} 
      height={100} 
      alt="Frankie Kao" 
      className="rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover"
    />
    <div className="ml-3">
      <p className="font-bold text-gray-800 text-sm md:text-base lg:text-lg">Mr. Frankie Kao</p>
      <p className="text-gray-500 text-xs md:text-sm lg:text-base">Founder/ CEO of ThemeMove</p>
    </div>
  </div>
</div>


        <p className="mt-4 text-gray-700">
          Our company and our culture are built on more than a century of leadership and a relentless adherence to our values,
          the core of which are safety, quality, ethics, and integrity.
        </p>

        <ul className="mt-4 space-y-2 text-gray-700">
          <li>✅ Our commitment of sustainability</li>
          <li>✅ Our commitment of stewardship</li>
          <li>✅ Our commitment of diversity & inclusion</li>
          <li>✅ Our commitment of quality</li>
          <li>✅ Our commitment of safety</li>
        </ul>
      </div>
    </div>
  );
}

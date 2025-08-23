import React from 'react';

import Image from 'next/image';
import { construct, local, master, procure, service1, service2 } from '../../../public/assets/home';
  
export default function OurHistory() {
  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 main-container">
      {/* History */}
      <div className="flex items-center">
        <Image src={construct.src} alt="Our History" width={400}   // Adjust width as needed
               height={300} className="w-20 h-20 rounded-md mr-4" />
        <div>
          <h3 className="text-lg font-bold">Our History</h3>
          <p className="text-gray-700">We are committed to leaving a legacy of progress by developing.</p>
        </div>
      </div>

      {/* Awards */}
      <div className="flex items-center">
        <Image src={local.src} alt="Awards"width={400}   // Adjust width as needed
               height={300} className="w-20 h-20 rounded-md mr-4" />
        <div>
          <h3 className="text-lg font-bold">Awards</h3>
          <p className="text-gray-700">For 118 years, Bechtel has been a leader in engineering, construction.</p>
        </div>
      </div>

      {/* Leadership */}
      <div className="flex items-center">
        <Image src={master.src} width={400}   // Adjust width as needed
               height={300} alt="Leadership" className="w-20 h-20 rounded-md mr-4" />
        <div>
          <h3 className="text-lg font-bold">Leadership</h3>
          <p className="text-gray-700">Bechtel is one of the most respected global engineering, construction.</p>
        </div>
      </div>

      {/* Affiliates & Partners */}
      <div className="flex items-center">
        <Image src={procure.src} width={400}   // Adjust width as needed
               height={300} alt="Affiliates & Partners" className="w-20 h-20 rounded-md mr-4" />
        <div>
          <h3 className="text-lg font-bold">Affiliates & Partners</h3>
          <p className="text-gray-700">For 118 years, Bechtel has been a leader in engineering, construction.</p>
        </div>
      </div>

      {/* Core Values */}
      <div className="flex items-center">
        <Image src={service1.src} width={400}   // Adjust width as needed
               height={300} alt="Core Values" className="w-20 h-20 rounded-md mr-4" />
        <div>
          <h3 className="text-lg font-bold">Core Values</h3>
          <p className="text-gray-700">We are uncompromising in our integrity, honesty, and fairness.</p>
        </div>
      </div>

      {/* Locations */}
      <div className="flex items-center">
        <Image src={service2.src} width={400}   // Adjust width as needed
               height={300} alt="Locations" className="w-20 h-20 rounded-md mr-4" />
        <div>
          <h3 className="text-lg font-bold">Locations</h3>
          <p className="text-gray-700">Washington has a growing, diversified economy with an increasing.</p>
        </div>
      </div>
    </div>
  );
}

"use client"

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { bn, cmd, madam, malaya, mohapatra, narayan, nilanchal, niranjan, srikant } from "../../../public/assets/team";

const teamMembers = [
  { name: "Suresh Mishra", role: "CMD", image: cmd.src, isParent: true },
  { name: "Swayanshree Mishra", role: "Director", image: madam.src },
  { name: "LTP Narayan", role: "Director", image: narayan.src },
  { name: "Niranjan Mishra", role: "Director", image: niranjan.src },
  { name: "Shriknt Pati", role: "Enterprise Director", image: srikant.src },
  { name: "Nilanchal Ku Singh", role: "Enterprise Director", image: nilanchal.src },
  { name: "Himanshu Mohapatra", role: "Branch Head", image: bn.src },
  { name: "B N Mohapatra", role: "Enterprise Director", image: mohapatra.src },
  { name: "Malaya Kumar Rath", role: "CTO", image: malaya.src },
];

export default function Teammember() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-t from-[#0f172a] via-[#1e293b] to-[#0856c2] min-h-screen flex flex-col items-center py-10 px-5">
      <h1 className="text-4xl text-white font-bold mb-10" data-aos="fade-down">Our Team</h1>

      {/* CMD (Parent) */}
      <div className="flex justify-center mb-10" data-aos="zoom-in">
        {teamMembers
          .filter((member) => member.isParent)
          .map((member, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl p-24 flex flex-col items-center shadow-lg shadow-blue-500/50">
              <Image
              width={400}   // Adjust width as needed
              height={300}
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-white"
              />
              <h2 className="text-white font-semibold text-lg mt-2">{member.name}</h2>
              <p className="text-gray-300 text-sm">{member.role}</p>
            </div>
          ))}
      </div>

      {/* Children Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-6xl">
        {teamMembers
          .filter((member) => !member.isParent)
          .map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-5 flex items-center gap-4 shadow-lg shadow-blue-400/50"
              data-aos="fade-up"
            >
              <Image
              width={400}   // Adjust width as needed
              height={300}
                src={member.image}
                alt={member.name}
                className="w-36 h-36 object-cover rounded-full border-2 border-white"
              />
              <div>
                <h2 className="text-white font-semibold text-lg">{member.name}</h2>
                <p className="text-gray-300 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

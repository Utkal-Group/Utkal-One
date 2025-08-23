import React from "react";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="bg-slate-300 py- px-4 md:px-8 flex flex-wrap justify-between items-center text-sm md:text-base py-6">
      {/* Left Section - Contact Info */}
      <div className="flex items-center">
        <span className="text-gray-800 font-semibold">
          📞 9668862999 | Mon - Sat: 9:00 - 18:00
        </span>
      </div>

      {/* Right Section - Social Media Icons */}
      <div className="flex gap-3 items-center mt-2 md:mt-0">
        {[
          { icon: FaFacebookF, href: "#", color: "text-blue-600" },
          { icon: FaTwitter, href: "#", color: "text-blue-400" },
          { icon: FaGoogle, href: "#", color: "text-red-500" },
          { icon: FaInstagram, href: "#", color: "text-pink-500" },
        ].map(({ icon: Icon, href, color }, index) => (
          <a key={index} href={href} className={`relative group ${color}`}>
            {/* Glowing Effect */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 blur-md transition duration-300"></div>
            
            {/* Social Icon */}
            <Icon className="text-xl md:text-2xl transition transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
          </a>
        ))}
      </div>
    </div>
  );
}

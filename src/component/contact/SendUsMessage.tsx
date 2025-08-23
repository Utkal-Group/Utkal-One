"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SendUsMessage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="main-container py-10 italic  bg-gradient-to-b from-pink-500 to-orange-400  shadow-lg"
      data-aos="fade-up"
    >
      <h2
        className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-6"
        data-aos="fade-up"
      >
        Send Us A Message
      </h2>
      <form className="space-y-6">
        {/* Top Row: Name, Phone, Email */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Your name (required)"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-orange-500"
            required
            data-aos="fade-right"
          />
          <input
            type="text"
            placeholder="Your phone"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-orange-500"
            data-aos="fade-right"
          />
          <input
            type="email"
            placeholder="Your e-mail (required)"
            className="w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-orange-500"
            required
            data-aos="fade-left"
          />
        </div>

        {/* Message Input */}
        <textarea
          placeholder="Your message (required)"
          className="w-full border border-gray-300 rounded-md p-3 h-32 focus:ring focus:ring-orange-500"
          required
          data-aos="fade-up"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          data-aos="zoom-in"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

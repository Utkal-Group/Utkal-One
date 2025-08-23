"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { client1, client2, client3, client4, client5 } from "../../../public/assets/home";
import Image from "next/image";

const clients = [
  { id: 1, name: "Client 01", Image: client1 },
  { id: 2, name: "Client 02", Image: client2 },
  { id: 3, name: "Client 03", Image: client3 },
  { id: 4, name: "Client 04", Image: client4 },
  { id: 5, name: "Client 05", Image: client5 },
];

export default function OurClients() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#2545af] to-indigo-300 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="flex items-center mb-8 justify-center" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-white text-center">
            Our Valued Clients
          </h2>
          <div className="flex-grow border-t border-gray-400 mx-4"></div>
        </div>

        {/* Client Carousel */}
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          modules={[Navigation]}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div
                className="relative group flex items-center justify-center w-full h-32 rounded-lg overflow-hidden transition-all shadow-2xl hover:scale-105"
                data-aos="zoom-in"
              >
                {/* Client Logo */}
                <Image
                  src={client.Image.src}
                  alt={client.name}
                  width={300}
                  height={100}
                  className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:blur-sm"
                />

                {/* Overlay with Client Name */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300">
                  <p className="text-white text-lg font-semibold transition duration-300 ease-in-out transform group-hover:scale-110">
                    {client.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6 gap-4" data-aos="fade-up">
          <button className="prev-btn bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 text-xl font-bold text-indigo-600">
            ◀
          </button>
          <button className="next-btn bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 text-xl font-bold text-indigo-600">
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}

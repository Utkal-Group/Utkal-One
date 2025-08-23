"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { services } from "@/data/services";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServiceDetail() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const params = useParams();
  const slug = params?.slug;

  if (!slug) return notFound();

  const service = services.find(
    (s) => s.title.toLowerCase().replace(/ /g, "-") === slug
  );

  if (!service) return notFound();

  return (
    <section
      className=" p-6 bg-gradient-to-r italic from-blue-700 to-gray-600 min-h-screen flex flex-col justify-center"
      data-aos="fade-up"
    >
      <h1
        className="text-4xl font-bold text-white mb-6 text-center"
        data-aos="fade-up"
      >
        {service.title}
      </h1>
      <div className="flex justify-center" data-aos="fade-up" data-aos-delay="200">
        <Image
          src={service.image.src}
          alt={service.title}
          width={800}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
      <p
        className="text-white mt-6 text-lg leading-relaxed text-center"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {service.description}
      </p>
    </section>
  );
}

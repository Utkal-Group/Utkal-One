import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { anna, bg, frank, jhon, joe, lane, roni } from '../../../public/assets/home';
import Image from "next/image";

const testimonials = [
  {
    name: "Mr. Amit Verma",
    role: "Founder/CEO of BuildTech India",
    image: frank,
    text: "The customer support and response to suggestions and updates has been fantastic! The best support I have had on any theme!",
  },
  {
    name: "Ms. Priyanshu Sharma",
    role: "Founder/CEO of DesignHub",
    image: anna,
    text: "Great theme! Fast response and excellent technical support. Code is clean and the entire site is so flexible.",
  },
  {
    name: "Mr. Rahul Mehta",
    role: "Founder/CEO of CodeCrafters",
    image: jhon,
    text: "I am completely amazed. I got this theme set up and running in no time. The design quality is amazing.",
  },
  {
    name: "Ms. Neha Gupta",
    role: "Founder/CEO of UrbanSpaces",
    image: lane,
    text: "This is absolutely the best theme I have ever used. The design quality is exquisite. Their response time is unheard of!",
  },
  {
    name: "Mr. Vikas Yadav",
    role: "Founder/CEO of TechSolutions",
    image: joe,
    text: "I am completely amazed. I got this theme set up and running in no time. The design quality is amazing.",
  },
  {
    name: "Mr. Rohit Choudhary",
    role: "Founder/CEO of InnovateX",
    image: roni,
    text: "I am completely amazed. I got this theme set up and running in no time. The design quality is amazing.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="relative w-full py-16 bg-cover bg-center lg:h-screen"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container mx-auto text-center px-6">
        <h2 className="text-white text-3xl font-semibold mb-6">Testimonials</h2>
        <div className="w-24 h-1 bg-white mx-auto mb-8"></div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center min-h-[280px] max-h-[280px]">
                <p className="text-gray-700 italic text-sm md:text-base">
                  “{testimonial.text}”
                </p>
                <div className="mt-6 flex flex-col items-center">
                  <Image
                    src={testimonial.image.src}
                    width={80}
                    height={80}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-orange-500"
                  />
                  <h3 className="text-lg font-semibold mt-3">
                    {testimonial.name}
                  </h3>
                  <p className="text-orange-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

"use client"; // if you’re on Next.js App Router (safe to leave in)

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxCrop,
    title: "Branding",
    description: "I build brand identities that reflect your vision and connect with your audience. Every element is designed to leave a lasting impression.",
  },
  {
    Icon: RxPencil2,
    title: "Design",
    description: "Clean, modern, and user-focused designs that balance beauty with functionality. Each choice enhances the user experience.",
  },
  {
    Icon: RxDesktop,
    title: "Development",
    description: "I create responsive, fast, and scalable websites that look great and work seamlessly across all devices.",
  },
  {
    Icon: RxReader,
    title: "Copywriting",
    description: "Clear, persuasive copy tailored to your brand voice — crafted to engage, inspire, and drive action.",
  },
  {
    Icon: RxRocket,
    title: "SEO",
    description: "Optimized websites that rank higher, attract the right audience, and boost your online visibility.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      freeMode={true}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-y-6 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-1">
              <div className="mb-2 text-lg font-semibold">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;

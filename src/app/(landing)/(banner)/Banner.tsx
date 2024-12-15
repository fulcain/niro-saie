"use client";

import { bannerTexts } from "./bannerTexts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./_banner.scss";

const Banner = () => {
  const duplicatedTexts = [];

  for (let index = 0; index < 50; index++) {
    duplicatedTexts.push(...bannerTexts);
  }
  return (
    <section className="bg-palette-pearl p-[35px] md:p-[45px] overflow-hidden">
      <Swiper
        className="infintie-scroll w-full [&>*:nth-child(odd)]:text-white [&>*:nth-child(even)]:[text-shadow:0_0_2px_white,0_0_0px_white]"
        loop={true}
        speed={1000}
        spaceBetween={30}
        slidesPerView={2}
        allowTouchMove={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 8,
            spaceBetween: 30,
          },
        }}
      >
        {duplicatedTexts.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="banner-text gap-[25px] !flex w-fit items-center justify-between px-2"
          >
            <span className="text-[30px] md:text-[45px]">{item}</span>
            <div className="w-[5px] h-[35px] bg-white skew-x-[25deg]"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;

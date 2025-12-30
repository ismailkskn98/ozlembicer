"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";
import ToolTip from "./toolTip";
import ModalVideo from "./modalVideo";
import youtubeCacheVideos from "@/youtube.json";

export default function YoutubeCarousel({ videos = [] }) {
  if (!videos || videos.length === 0) {
    videos = youtubeCacheVideos;
  }

  return (
    <main className="relative fluid gridContainer mt-20 sm:mt-28 lg:mt-36 mb-20 sm:mb-24">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={25}
        slidesPerView={3.5}
        breakpoints={{
          900: {
            slidesPerView: 3.5,
          },
          500: {
            slidesPerView: 3.5,
          },
          100: {
            slidesPerView: 2.5,
          },
        }}
        scrollbar={{ draggable: true }}
        pagination={{ el: '#youtube-pagination', clickable: true }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="w-full max-w-full xl:max-w-10/12 h-50 md:h-80 pb-10! py-6"
      >
        {videos.map((item, i) => (
          <SwiperSlide key={i} className="bg-white rounded-lg border-2 border-gray-200 h-full relative group cursor-pointer overflow-hidden">
            <Image
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
              width={item.snippet.thumbnails.medium.width}
              height={item.snippet.thumbnails.medium.height}
              className="relative z-10 object-contain object-center w-full h-full"
            />
            <Image
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
              width={item.snippet.thumbnails.medium.width}
              height={item.snippet.thumbnails.medium.height}
              className="absolute inset-0 w-full h-full object-cover blur-sm object-center"
            />
            <ModalVideo title={item.snippet.title} description={item.snippet.description} videoSrc={`https://www.youtube.com/embed/${item.id.videoId}?si=oTPj5Q6sfN3Vuxav`} />
            <ToolTip text={item.snippet.title}>
              <div className="absolute w-full inset-x-0 bottom-0 h-[32%] px-2.5 z-20 bg-linear-to-t from-black via-black/50 to-transparent">
                <div className="absolute z-10 inset-0 w-full h-full blur-sm bg-black/50"></div>
                <div className="flex flex-col items-start justify-center text-start relative z-50">
                  <h4 className="font-medium text-white text-xs sm:text-sm uppercase line-clamp-1"> {item.snippet.title}</h4>
                  {item.snippet.description.length > 0 && <p className="sm:block hidden font-medium text-white/80 text-xs lowercase line-clamp-2">{item.snippet.description}</p>}
                </div>
              </div>
            </ToolTip>
          </SwiperSlide>
        ))}
      </Swiper>
      <div id="youtube-pagination" className="relative w-fit! mx-auto flex gap-2 pagination-custom invert"></div>
    </main>
  );
}

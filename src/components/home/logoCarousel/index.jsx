'use client';
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

const logoItems = [
    { src: "/images/platforms-logo/logo-1.webp" },
    { src: "/images/platforms-logo/logo-2.webp" },
    { src: "/images/platforms-logo/logo-3.webp" },
    { src: "/images/platforms-logo/logo-4.webp" },
    { src: "/images/platforms-logo/logo-5.webp" },
    { src: "/images/platforms-logo/logo-6.webp" },
    { src: "/images/platforms-logo/logo-7.webp" },
    { src: "/images/platforms-logo/logo-8.webp" },
    { src: "/images/platforms-logo/logo-9.webp" },
    { src: "/images/platforms-logo/logo-10.webp" },
    { src: "/images/platforms-logo/logo-11.webp" },
    { src: "/images/platforms-logo/logo-12.webp" },
    { src: "/images/platforms-logo/logo-13.webp" },
    { src: "/images/platforms-logo/logo-14.webp" },
    { src: "/images/platforms-logo/logo-15.webp" },
    { src: "/images/platforms-logo/logo-16.webp" },
    { src: "/images/platforms-logo/logo-17.webp" },
    { src: "/images/platforms-logo/logo-18.webp" },
    { src: "/images/platforms-logo/logo-19.webp" },
    { src: "/images/platforms-logo/logo-20.webp" },
]

export default function LogoCarousel() {
    return (
        <main id='logo-carousel' className='w-full my-2'>
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                modules={[Autoplay]}
                loop={true}
                speed={2000}
                freeMode={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                className='relative w-full'
            >
                {/* <div className='absolute inset-y-0 left-0 bg-linear-to-r from-white to-transparent z-20 w-1/5' />
                <div className='absolute inset-y-0 right-0 bg-linear-to-l from-white to-transparent z-20 w-1/5' /> */}
                {logoItems.map((item, i) => (
                    <SwiperSlide key={i} className='h-full w-full flex items-center justify-center bg-logo-blue/12 px-2.5 py-1 rounded-sm shadow-sm border border-gray-200'>
                        <div className='w-full h-16 flex items-center justify-center'>
                            <Image src={item.src} alt={`logo-${i}`} width={300} height={300} className='w-fit h-16 object-contain object-center transition-all duration-150' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </main >
    )
}

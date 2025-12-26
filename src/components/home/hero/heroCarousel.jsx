'use client';
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import MotionScrollInView from '@/components/common/motionScrollInView';

const heroImages = [
    { id: 1, src: '/images/hero-carousel/item-1.jpg', alt: 'hero-1' },
    { id: 2, src: '/images/hero-carousel/item-1.jpg', alt: 'hero-2' },
    { id: 3, src: '/images/hero-carousel/item-1.jpg', alt: 'hero-3' },
    { id: 4, src: '/images/hero-carousel/item-1.jpg', alt: 'hero-1' },
    { id: 5, src: '/images/hero-carousel/item-1.jpg', alt: 'hero-2' },
]

export default function HeroCarousel() {
    return (
        <MotionScrollInView className='h-full fluid w-full relative flex items-center justify-center pb-10'>
            <Swiper
                spaceBetween={0}
                slidesPerView={1.5}
                centeredSlides={true}
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    "640": {
                        spaceBetween: 0,
                        slidesPerView: 1,
                    },
                    "1024": {
                        spaceBetween: 0,
                        slidesPerView: 2,
                    }
                }}
                className='w-full'
            >
                {heroImages.map((image, i) => (
                    <SwiperSlide key={i} className='py-16'>
                        {({ isActive, isPrev, isNext }) => (
                            <article className={`relative w-full h-full transition-all duration-500 ${isActive ? 'scale-120 z-10' : 'scale-60'}`}>
                                <div className={`relative w-full h-110 overflow-hidden rounded-sm shadow-lg border border-gray-200`}>
                                    <Image src={image.src} alt={image.alt} fill className={`object-cover object-center transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-60'}`} />
                                    {!isActive && (
                                        <div className='absolute inset-0 w-full h-full bg-linear-to-r from-logo-blue/20 to-logo-purple/20 z-10' />
                                    )}
                                </div>
                            </article>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

        </MotionScrollInView>
    )
}

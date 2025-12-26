'use client';

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { GoArrowUpRight } from 'react-icons/go';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from '@/i18n/navigation';
import MotionScrollInView from '@/components/common/motionScrollInView';

const services = [
    {
        id: 1,
        title: "Reconstruction Hair Transplantation",
        image: "/images/services/services-1.webp",
        link: "#"
    },
    {
        id: 2,
        title: "Woman Hairtransplant",
        image: "/images/services/woman-hairtransplant.webp",
        link: "#"
    },
    {
        id: 3,
        title: "Hair Transplant",
        image: "/images/services/hair-transplant.jpg",
        link: "#"
    },
    {
        id: 4,
        title: "Body Hair Transplantn",
        image: "/images/services/Body-Hair-Transplant.webp",
        link: "#"
    },
    {
        id: 5,
        title: "Beard Transplant",
        image: "/images/services/beard-transplant.webp",
        link: "#"
    },
    {
        id: 6,
        title: "Eyebrow Transplant",
        image: "/images/services/eyebrow-transplant.jpg",
        link: "#"
    },
    {
        id: 7,
        title: "FUT Technique",
        image: "/images/services/fut-technique.webp",
        link: "#"
    },
    {
        id: 8,
        title: "FUE Technique",
        image: "/images/services/fuee-technique.jpg",
        link: "#"
    }
];

export default function CardCarousel() {
    return (
        <section className='w-full flex flex-col items-center'>
            <MotionScrollInView className='w-full h-140'>
                <Swiper
                    spaceBetween={15}
                    slidesPerView={4.5}
                    modules={[Pagination]}
                    pagination={{ el: '#card-pagination', clickable: true }}
                    className='h-full w-full rounded-lg'
                >
                    {services.map((service) => (
                        <SwiperSlide key={service.id} className='h-full w-full py-8 rounded-lg overflow-hidden relative'>
                            <article className='group relative h-full flex-1 w-full flex items-end justify-start bg-cover bg-no-repeat bg-center rounded-lg' style={{ backgroundImage: `url(${service.image})` }}>
                                <Link href={service.link} className='absolute inset-0 z-20 w-full h-full' />
                                <div className='absolute inset-0 w-full h-full bg-black/15 group-hover:bg-black/5 transition-all duration-200 z-0 rounded-lg' />
                                <div className='absolute z-10 top-3 right-3 px-5 py-1.5 rounded-full overflow-clip flex items-center justify-center bg-black/5 backdrop-blur-lg border border-white text-white'>
                                    <GoArrowUpRight className='text-2xl group-hover:translate-x-10 group-hover:-translate-y-8 transition-all duration-300' />
                                    <GoArrowUpRight className='absolute left-1/2 top-1/2 -translate-x-11 translate-y-5 group-hover:-translate-1/2 transition-all duration-300 text-2xl' />
                                </div>
                                <div className='relative z-10 w-full py-8 px-2 bg-black/30 backdrop-blur-md rounded-b-lg'>
                                    <span className='text-lg text-white font-light'>{service.title}</span>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </MotionScrollInView>
            <div id="card-pagination" className="relative w-fit! mx-auto flex gap-2 pagination-custom"></div>
        </section>
    )
}

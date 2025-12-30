'use client';
import React, { useRef } from 'react'
import { useLenis } from '@/utils/lenis';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SvgPath() {
    const pathRef = useRef();

    useLenis((lenis) => {
        ScrollTrigger.update();
    })

    useGSAP(() => {
        const pathLength = pathRef.current.getTotalLength();
        pathRef.current.style.strokeDasharray = pathLength;
        pathRef.current.style.strokeDashoffset = pathLength;
        pathRef.current.style.stroke = "#211a14";

        gsap.to(pathRef.current, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: "#spotlight",
                start: "top 50%",
                end: "bottom 30%",
                scrub: true,
                // markers: true,
            },
        })
    })


    return (
        <div id='svg-path' className='absolute top-[15svh] lg:top-[100svh] right-0 -translate-y-1/2 w-[275%] lg:w-[90%] -z-10'>
            <svg className='w-full h-auto' width="1645" height="3686" viewBox="0 0 1691 3099" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={pathRef} d="M1279.13 75.0494C1279.13 75.0494 119.134 55.0493 239.134 820.049C359.134 1585.05 1074.13 915.049 1474.13 1745.05C1874.13 2575.05 -140.866 4115.05 94.1339 2570.05C329.134 1025.05 1569.13 3610.05 1569.13 3610.05" stroke="" strokeWidth="20" strokeLinecap="round" />
            </svg>
        </div>
    );
}
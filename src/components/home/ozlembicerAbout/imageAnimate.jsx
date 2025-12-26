'use client';
import React, { useRef } from 'react'
import { useLenis } from '@/utils/lenis';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ImageAnimate() {
    const imageDivRef = useRef();

    useLenis((lenis) => {
        ScrollTrigger.update();
    })

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#ozlem-bicer-about",
                start: "top 50%",
                end: "bottom 80%",
                scrub: true,
            }
        });

        tl.fromTo(imageDivRef.current,
            {
                x: "100%",
            },
            {
                ease: "power2.inOut",
                x: 0,
                duration: 0.6
            }
        ).to(imageDivRef.current, {
            duration: 0.4
        });
    })
    return (
        <div ref={imageDivRef} className='absolute top-1/2 -translate-y-1/2 right-0 translate-x-full w-[45%] h-1/2 backdrop-blur-md bg-linear-to-r from-logo-purple/20 via-transparent to-logo-blue/30 -z-10 rounded-l-lg shadow-lg' />
    )
}

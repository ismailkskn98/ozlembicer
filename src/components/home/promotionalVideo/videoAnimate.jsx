'use client';
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from '@/utils/lenis';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import { Play } from 'lucide-react';

export default function VideoAnimate() {
    const [imageShow, setImageShow] = useState(true);
    const videoRef = useRef(null);

    useLenis((lenis) => {
        ScrollTrigger.update();
    })

    useEffect(() => {
        if (videoRef.current) {
            if (imageShow) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
        }
    }, [imageShow]);


    useGSAP(() => {
        gsap.to("#video-container", {
            ease: "none",
            width: "100%",
            scrollTrigger: {
                trigger: "#video-section",
                start: "top 50%",
                end: "60% 50%",
                scrub: true,
            },
        })
    })

    return (
        <article id='video-container' onClick={() => setImageShow(false)} className='group w-1/2 max-w-7xl h-full max-h-200 mx-auto relative rounded-2xl cursor-pointer overflow-hidden border border-gray-100 bg-gray-100 shadow-[0_4px_4px_#00000031]'>
            {imageShow &&
                <>
                    <div className='absolute inset-0 w-full h-full z-10 rounded-2xl'>
                        <Image src={"/images/kap-2.jpg"} alt='tanıtım video kapak' fill className='object-cover object-center w-full h-full rounded-2xl' />
                    </div>

                    <div className="absolute inset-0 z-20 flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
                        <div className="bg-white/90 flex size-20 items-center justify-center rounded-full">
                            <Play className="size-7 scale-100 text-logo-purple fill-logo-purple stroke-logo-purple transition-transform duration-200 ease-out group-hover:scale-105" />
                        </div>
                    </div>
                </>
            }
            <video ref={videoRef} className='relative w-full h-full rounded-2xl mx-auto border border-gray-100' controls>
                <source src='/videos/tanitim-video.mp4' type='video/mp4' />
            </video>
        </article>
    )
}

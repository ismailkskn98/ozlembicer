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
                {/* <path ref={pathRef} d="M1279.13 75.0494C1279.13 75.0494 119.134 55.0493 239.134 820.049C359.134 1585.05 1074.13 915.049 1474.13 1745.05C1874.13 2575.05 -140.866 4115.05 94.1339 2570.05C329.134 1025.05 1569.13 3610.05 1569.13 3610.05" stroke="" strokeWidth="2" strokeLinecap="round" /> */}
                {/* <path ref={pathRef} d="M1269.06 75.0494C1269.06 75.0494 109.06 55.0493 229.061 820.049C349.061 1585.05 1764.06 660.049 1464.06 1745.05C1164.06 2830.05 -40.9399 1495.05 84.0607 2570.05C209.061 3645.05 1519.06 2930.05 1464.06 3595.05" stroke="black" stroke-width="2" stroke-linecap="round" /> */}
                {/* <path ref={pathRef} d="M1271.07 80.6608C1271.07 80.6608 141.07 -39.3392 231.07 825.661C321.071 1690.66 1816.07 790.661 1466.07 1750.66C1116.07 2710.66 -50.558 1400.66 86.0705 2575.66C222.699 3750.66 1521.07 2935.66 1466.07 3600.66" stroke="black" stroke-width="2" stroke-linecap="round" /> */}
                <path ref={pathRef} d="M1294.14 75.093C1294.14 75.093 109.142 50.0929 254.142 820.093C399.142 1590.09 1778.67 985.093 1489.14 1745.09C1199.62 2505.09 -155.859 1140.09 109.142 2570.09C374.143 4000.09 1489.14 2605.09 1489.14 3595.09" stroke="black" strokeWidth="2" strokeLinecap="round" />

            </svg>
        </div>
    );
}
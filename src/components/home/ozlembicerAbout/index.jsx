import MotionScrollInView from '@/components/common/motionScrollInView'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import LogoCarousel from '../logoCarousel'
import ImageAnimate from './imageAnimate'
import SvgPath from '../svgPath'

export default function OzlembicerAbout() {
    return (
        <main id='ozlem-bicer-about' className='relative fluid gridContainer w-full mt-16'>
            <section className='relative flex items-center justify-between gap-6'>
                <MotionScrollInView>
                    <article className='flex flex-col items-start gap-3 max-w-2xl'>
                        <h2 className='text-6xl text-black/80 font-marcellus'>Aesthetics is where art and medicine meet.</h2>
                        <p className='font-light text-lg'>Since 1998, I have worked on hair restoration and hair transplants. My clinic provides the highest level of service and expertise to turn our patients’ dreams into reality. We have built an unmatched reputation by offering our patients superior results while utilizing the best technology and adhering to the safest medical practices.</p>
                        <p className='font-light text-lg'>If you are looking for a world class clinic to help you achieve healthy, natural and beautiful hair, our top notch medical team is ready to assist you.</p>
                        <div className='flex flex-col items-start gap-0 text-sm'>
                            <p className='font-light italic text-black/80'>Ozlem Bicer, M.D.</p>
                            <p className='font-light italic text-black/80'>Over 25 Years of Experience</p>
                            <Link href={"mailto:info@ozlembicer.com"} className='underline'>info@ozlembicer.com</Link>
                        </div>
                        <LogoCarousel />
                    </article>
                </MotionScrollInView>
                <Image src={"/images/ozlembicer-about.jpeg"} alt='ozlembicer' width={500} height={800} className='w-fit max-h-150 object-contain object-center rounded-md border border-gray-200/80 shadow-md' />
            </section>
            <ImageAnimate />
            {/* <SvgPath /> */}
        </main>
    )
}

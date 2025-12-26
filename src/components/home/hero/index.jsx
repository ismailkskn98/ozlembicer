import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import HeroCarousel from './heroCarousel'
import MotionScrollInView from '@/components/common/motionScrollInView'

export default function Hero() {
    return (
        <div className='relative fluid gridContainer gap-4 overflow-clip'>
            <div className='fluid absolute inset-x-0 top-0 w-full h-full -z-10'>
                <div className='absolute inset-0 z-30 bg-white/40' />
                <video className='absolute -top-1/3 object-cover w-full h-full z-20' autoPlay muted loop>
                    <source src='/videos/hero-bg.mp4' type='video/mp4' />
                </video>
            </div>
            <main className='relative pt-10 w-full flex flex-col items-center justify-center'>
                <MotionScrollInView>
                    <section className='w-full'>
                        <article className='flex flex-col items-center text-center max-w-6xl mx-auto gap-4'>
                            <h1 className='text-7xl text-black/80 font-marcellus'>Natural Hair Transplantation, Performed Personally by an Experienced Medical Doctor</h1>
                            <div className='flex flex-col items-center justify-center'>
                                <p>Over 25 years of medical experience, one patient per day, fully personalized hair restoration in Istanbul.</p>
                                <p>FUE, DHI, PRP ve mezoterapi tedavileri tıbbi gözetim altında uygulanır.</p>
                            </div>
                            <Link href={"#"} className='group capitalize relative mt-1 bg-logo-purple hover:bg-[#4d25a9] px-3 py-2.5 text-white font-light overflow-clip transition-all duration-700'>
                                <span className='relative z-50'>Contact Us</span>
                                <div className='absolute inset-x-0 top-0 z-30 bg-logo-purple group-hover:bg-[#4d25a9] h-full group-hover:h-0 transition-all duration-700 drawer-pulse' />
                                <div className='absolute inset-x-0 -bottom-px flex items-center z-20'>
                                    <Image src="/images/1-hair.svg" alt='hair' width={20} height={100} className='scale-110 object-contain object-center' />
                                    <Image src="/images/1-hair.svg" alt='hair' width={20} height={100} className='scale-110 object-contain object-center' />
                                    <Image src="/images/1-hair.svg" alt='hair' width={20} height={100} className='scale-110 object-contain object-center' />
                                    <Image src="/images/1-hair.svg" alt='hair' width={20} height={100} className='scale-110 object-contain object-center' />
                                    <Image src="/images/1-hair.svg" alt='hair' width={20} height={100} className='scale-110 object-contain object-center' />
                                </div>
                            </Link>
                        </article>
                    </section>
                </MotionScrollInView>
            </main>
            <HeroCarousel />
        </div>
    )
}

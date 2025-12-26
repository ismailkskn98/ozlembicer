import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import React from 'react'
import { MdOutlineMedicalServices } from "react-icons/md";
import CardCarousel from './cardCarousel';
import MotionScrollInViewVariant from '@/components/common/motionScrollInViewVariant';

export default function ServicesMain() {
    return (
        <main className='relative fluid gridContainer mt-24 bg-logo-purple py-20'>
            <div className='bg-logo-purple/30 absolute inset-0 w-full h-full z-10 fluid' />
            <div className='bg-[url("/images/services/services-bg.jpg")] bg-center bg-no-repeat bg-cover absolute inset-0 w-full h-full z-0 fluid opacity-50' />
            <div className='relative z-20 w-full flex flex-col items-start gap-16'>
                <section className='w-full flex items-start justify-between gap-6'>
                    <MotionScrollInViewVariant className='w-full flex items-start justify-between gap-6'>
                        <article className='flex flex-col items-start gap-2.5 max-w-xl'>
                            <div className='w-fit flex items-center gap-1.5 bg-black text-white rounded-full border border-gray-700 px-3 py-2'>
                                <MdOutlineMedicalServices className='text-xl' />
                                <span className='text-sm'>Services</span>
                            </div>
                            <h2 className='text-7xl font-marcellus leading-16 text-white'>What we can do for you</h2>
                        </article>
                        <article className='flex flex-col items-start gap-3 max-w-xl'>
                            <p className='text-xl text-white'>We offer advanced hair restoration solutions tailored to your needs.
                                Using the latest medical technologies and personalized treatment plans, we help you achieve natural, long-lasting results. From hair and beard transplants to reconstruction procedures, our expert team is with you at every step of your journey.</p>
                            <Link href={"#"} className='group capitalize relative mt-1 bg-black hover:bg-black px-3 py-2.5 text-white font-light overflow-clip transition-all duration-700'>
                                <span className='relative z-50'>Contact Us</span>
                                <div className='absolute inset-x-0 top-0 z-30 bg-black group-hover:bg-black h-full group-hover:h-0 transition-all duration-700 drawer-pulse' />
                                <div className='absolute inset-x-0 -bottom-px flex items-center z-20'>
                                    <Image src="/images/1-hair.svg" alt='hair' width={20} height={100} className='scale-110 object-contain object-center' />
                                    <Image src="/images/1-hair.svg" alt='hair' width={20} height={100} className='scale-110 object-contain object-center' />
                                    <Image src="/images/1-hair.svg" alt='hair' width={20} height={100} className='scale-110 object-contain object-center' />
                                    <Image src="/images/1-hair.svg" alt='hair' width={20} height={100} className='scale-110 object-contain object-center' />
                                    <Image src="/images/1-hair.svg" alt='hair' width={20} height={100} className='scale-110 object-contain object-center' />
                                </div>
                            </Link>
                        </article>
                    </MotionScrollInViewVariant>
                </section>
                <CardCarousel />
            </div>
        </main>
    )
}

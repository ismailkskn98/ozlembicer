'use client';
import React from 'react';
import Image from 'next/image';
import MotionScrollInView from '@/components/common/motionScrollInView';
import ModalVideo from '@/components/home/youtubeCarousel/modalVideo';
import { Link } from '@/i18n/navigation';

export default function AboutMain() {
    const videoId = 'zjiOQL0d-m0';
    const videoEmbedUrl = `https://www.youtube.com/embed/${videoId}?si=oTPj5Q6sfN3Vuxav`;
    const coverImage = '/images/about/why-choose-us-cover-image.jpg';

    return (
        <main className="relative fluid gridContainer w-full mt-16 mb-12 sm:mb-20 lg:mb-28">
            <section className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
                <MotionScrollInView className="flex-1 w-full lg:max-w-2xl">
                    <article className="flex flex-col items-start gap-6">
                        <header className="flex flex-col items-start gap-3 w-full">
                            <div className='flex items-center gap-0.5'>
                                <Image src="/images/1-hair.svg" alt='hair' width={20} height={100} className='invert object-contain object-center' />
                                <h3 className="relative text-sm sm:text-base font-medium uppercase tracking-wider text-logo-blue">
                                    WHY CHOOSE US
                                </h3>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-marcellus text-black/90 leading-tight">
                                An Experienced Doctor and Medical Team
                            </h1>
                        </header>

                        <div className="flex flex-col items-start gap-5 text-base sm:text-lg font-light text-black/80 leading-relaxed">
                            <p>
                                Dr. Özlem Biçer has 22 years of experience in hair restoration and hair transplant procedures. She is a member of the International Society of Hair Restoration Surgery (ISHRS) and is assisted by a team of highly-trained nurses who are dedicated to providing the best possible care for our patients.
                            </p>
                            <p>
                                At our clinic, all hair transplant procedures are performed by a licensed doctor. We are one of the very few licensed hair transplant clinics in Turkey, ensuring that our patients receive the highest standard of medical care and expertise.
                            </p>
                            <p>
                                We take only one patient a day, providing exclusive attention and personalized care to each individual. Our commitment to excellence means that we focus on delivering the highest level of customer service and best results for every patient who trusts us with their hair restoration journey.
                            </p>
                        </div>

                        <footer className="flex flex-col items-start gap-1 -mt-2">
                            <Link
                                href="mailto:info@ozlembicer.com"
                                className="text-base sm:text-lg font-semibold text-logo-blue hover:text-logo-purple transition-colors duration-200"
                            >
                                info@ozlembicer.com
                            </Link>
                        </footer>
                    </article>
                </MotionScrollInView>

                <MotionScrollInView className="flex-1 w-full lg:max-w-xl xl:max-w-2xl">
                    <aside className="relative w-full h-100 sm:h-125 lg:h-150 xl:h-175 rounded-lg overflow-hidden group shadow-lg border border-gray-200/80">
                        <Image
                            src={coverImage}
                            alt="Dr. Özlem Biçer - Experienced Doctor and Medical Team"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <ModalVideo
                            title="Dr. Özlem Biçer - Why Choose Us"
                            description="Learn more about our experienced doctor and medical team"
                            videoSrc={videoEmbedUrl}
                        />
                    </aside>
                </MotionScrollInView>
            </section>
        </main>
    );
}

'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import MotionScrollInView from '@/components/common/motionScrollInView';
import ModalVideo from '@/components/home/youtubeCarousel/modalVideo';
import { GraduationCap, Award, Users, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

export default function WhoIsOzlemBicerMain() {
    const [expandedSection, setExpandedSection] = useState(null);

    const videoId = 'tZJYbeCH_Ac';
    const videoEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
    const coverImage = '/images/about/ozlem-bicer-about-image.jpg';

    const stats = [
        { label: 'Years of Experience', value: '25+', icon: Calendar },
        { label: 'International Conferences', value: '50+', icon: Users },
        { label: 'Certifications', value: '40+', icon: GraduationCap },
        { label: 'Awards & Recognition', value: '7+', icon: Award },
    ];

    const education = [
        { degree: 'Medical Doctor', institution: 'University of Trakya, Edirne, Turkey', year: 'July 1998' },
        { degree: 'Medical Aesthetic Degree', institution: 'Flavius Medical Aesthetic, Istanbul, Turkey', year: 'June 2004' },
    ];

    const trainings = [
        { title: 'AAAM, Aesthetic Medicine', location: 'Pennsylvania, US', date: '11-13 August 2017' },
        { title: 'Enseignement International de Mesotherapie', location: 'France', date: '6 October 2002' },
        { title: 'FUE and single Strip Technique', location: 'Istanbul, Turkey', date: '02-03 June 2004' },
        { title: 'Hair Restoration Methods', location: 'Antalya, Turkey', date: '29 Nov.-2 December 2018' },
        { title: 'ISHRS, 29th World Congress', location: 'Lisbon', date: '21-23 October 2021' },
        { title: 'ISHRS, 28th World Congress', location: 'Online', date: '25 October 2020' },
        { title: 'Los Angeles Hair Restoration Course', location: 'Los Angeles, US', date: '3-5th March 2022' },
    ];

    const memberships = ['ISHRS', 'IAHRS', 'FUE Europe', 'AAAM', 'TBB', 'TSHRS', 'MESTDER'];

    const awards = [
        'FUE Europe Annual Fue Hands-on Ankara 2020',
        'Masters of Beauty, 2021',
        '2nd International Medical Aesthetic Congress',
        'Dr. Ufuk Alatekin Academy "Those who add value to beauty" 2021',
    ];

    return (
        <main className="relative fluid gridContainer w-full mt-16 mb-12 sm:mb-20 lg:mb-28">
            <section className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12 mb-16 lg:mb-24">
                <MotionScrollInView className="flex-1 w-full lg:max-w-2xl">
                    <article className="flex flex-col items-start gap-6">
                        <header className="flex flex-col items-start gap-3 w-full">
                            <div className='flex items-center'>
                                <Image src="/images/right-hair.svg" alt='hair' width={20} height={100} className='scale-90 object-contain object-center' />
                                <h3 className="relative text-sm sm:text-base font-medium uppercase tracking-wider text-logo-blue">
                                    WHO IS DR. ÖZLEM BIÇER
                                </h3>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-marcellus text-black/90 leading-tight">
                                A Pioneer in Hair Restoration
                            </h1>
                        </header>

                        <div className="flex flex-col items-start gap-5 text-base sm:text-lg font-light text-black/80 leading-relaxed">
                            <p>
                                I was born in 1973 in İstanbul. I achieved the degree of Anakent College in 1991 and Medicine Faculty Trakya University in 1998. I was involved in an education program on hair surgery by the Health Ministry of the Turkish Republic and got hair surgery licensed from the Ministry. I was also educated in France on Hair loss treatments, Mesotherapy, and aesthetics in 2002.
                            </p>
                            <p>
                                I am a hair transplant surgeon and I have been performing hair surgery, both FUE and FUT procedures, in my practice for more than 25 years in İstanbul. I have been performing hair transplants at my licensed and authorized clinic since 2002.
                            </p>
                            <p>
                                I have been regularly involved and take part in conferences all over the world on FUT and FUE micromotor, FUE Manuel, Unshaven Long Hair FUE and FUE by Implanters, Hair loss treatments, Regenerative medicine, and Dermatopathology of the scalp as a speaker, trainer, and member of hair restoration societies.
                            </p>
                        </div>
                    </article>
                </MotionScrollInView>

                <MotionScrollInView className="flex-1 w-full lg:max-w-xl xl:max-w-2xl">
                    <aside className="relative w-full h-100 sm:h-125 lg:h-150 xl:h-175 rounded-lg overflow-hidden group shadow-lg border border-gray-200/80">
                        <Image
                            src={coverImage}
                            alt="Dr. Özlem Biçer"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <ModalVideo
                            title="Dr. Özlem Biçer - Who Is Dr. Özlem Biçer"
                            description="Learn more about Dr. Özlem Biçer's journey and expertise"
                            videoSrc={videoEmbedUrl}
                        />
                    </aside>
                </MotionScrollInView>
            </section>

            <MotionScrollInView className="mb-16 lg:mb-24">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="bg-linear-to-br from-logo-blue/5 to-logo-purple/5 rounded-lg p-6 border border-gray-200/50 hover:border-logo-blue/30 transition-all duration-300 hover:shadow-md group"
                            >
                                <div className="flex flex-col items-center text-center gap-3">
                                    <div className="bg-logo-blue/10 p-3 rounded-full group-hover:bg-logo-blue/20 transition-colors duration-300">
                                        <Icon className="size-6 text-logo-blue" />
                                    </div>
                                    <div className="text-3xl sm:text-4xl font-marcellus text-logo-purple">{stat.value}</div>
                                    <div className="text-xs sm:text-sm font-medium text-black/70">{stat.label}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </MotionScrollInView>

            <MotionScrollInView className="mb-16 lg:mb-24">
                <article className="bg-linear-to-br from-gray-50 to-white rounded-lg p-8 lg:p-12 border border-gray-200/50 shadow-sm">
                    <h2 className="text-3xl sm:text-4xl font-marcellus text-black/90 mb-6">My Philosophy</h2>
                    <div className="flex flex-col gap-4 text-base sm:text-lg font-light text-black/80 leading-relaxed">
                        <p>
                            In my 25 years of experience in medicine, my patients are always my priorities, my colleagues and society have an important role in my life.
                        </p>
                        <p>
                            I resist performing just only one hair transplant per day just to give all my attention to my patient and try to be an ethical model for beginners. My experiences have allowed me to acquire a wide variety of communication and clinical skills, both in management routine, emergencies, and the basics of surgery.
                        </p>
                        <p>
                            I am solution-oriented, disciplined, confident, and highly motivated for working with my colleagues for patients' and societies' benefit. I have a strong academic interest in research and studies. I love to update my knowledge, share my experiences, and motivate team members towards common goals.
                        </p>
                    </div>
                </article>
            </MotionScrollInView>

            <MotionScrollInView className="mb-16 lg:mb-24">
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl sm:text-4xl font-marcellus text-black/90">Education</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-logo-blue/10 p-3 rounded-full shrink-0">
                                        <GraduationCap className="size-6 text-logo-blue" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-lg font-semibold text-black/90">{edu.degree}</h3>
                                        <p className="text-sm font-light text-black/70">{edu.institution}</p>
                                        <p className="text-xs font-medium text-logo-blue">{edu.year}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </MotionScrollInView>

            <MotionScrollInView className="mb-16 lg:mb-24">
                <div className="flex flex-col gap-6">
                    <h2 className="text-3xl sm:text-4xl font-marcellus text-black/90">Selected Training & Conferences</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {trainings.map((training, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-5 border border-gray-200/80 hover:border-logo-blue/30 transition-all duration-300 group"
                            >
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-base font-semibold text-black/90 group-hover:text-logo-blue transition-colors duration-300">
                                        {training.title}
                                    </h3>
                                    <p className="text-sm font-light text-black/70">{training.location}</p>
                                    <p className="text-xs font-medium text-logo-purple">{training.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </MotionScrollInView>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <MotionScrollInView>
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl sm:text-4xl font-marcellus text-black/90">Professional Memberships</h2>
                        <div className="bg-linear-to-br from-logo-blue/5 to-logo-purple/5 rounded-lg p-6 border border-gray-200/50">
                            <div className="flex flex-wrap gap-3">
                                {memberships.map((membership, index) => (
                                    <span
                                        key={index}
                                        className="bg-white px-4 py-2 rounded-full text-sm font-medium text-black/80 border border-gray-200/80 hover:border-logo-blue/50 hover:text-logo-blue transition-all duration-300"
                                    >
                                        {membership}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </MotionScrollInView>

                <MotionScrollInView>
                    <div className="flex flex-col gap-6">
                        <h2 className="text-3xl sm:text-4xl font-marcellus text-black/90">Awards & Recognition</h2>
                        <div className="flex flex-col gap-3">
                            {awards.map((award, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg p-4 border border-gray-200/80 hover:border-logo-purple/30 transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-3">
                                        <Award className="size-5 text-logo-purple shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                                        <p className="text-sm font-light text-black/80">{award}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </MotionScrollInView>
            </div>

            <MotionScrollInView className="mt-16 lg:mt-24">
                <div className="bg-linear-to-r from-logo-blue/10 via-logo-purple/10 to-logo-blue/10 rounded-lg p-8 lg:p-12 border border-gray-200/50">
                    <p className="text-base sm:text-lg font-light text-black/80 leading-relaxed text-center italic">
                        "I can speak English. I have a poem book and all the income of this book is given to the orphans for their education. I am married for 27 years and have a 25-year-old son."
                    </p>
                </div>
            </MotionScrollInView>
        </main>
    );
}

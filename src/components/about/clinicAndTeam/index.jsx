'use client';
import React from 'react';
import Image from 'next/image';
import MotionScrollInView from '@/components/common/motionScrollInView';
import { Building2, Users, Award, Shield, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ClinicAndTeamMain() {
    const clinicFeatures = [
        {
            icon: Shield,
            title: 'Licensed & Authorized',
            description: 'One of the very few licensed hair transplant clinics in Turkey with full authorization from the Health Ministry.'
        },
        {
            icon: Award,
            title: 'Expert Medical Team',
            description: 'Led by Dr. Özlem Biçer with 25+ years of experience and a team of highly-trained nurses.'
        },
        {
            icon: Heart,
            title: 'Patient-First Approach',
            description: 'We take only one patient per day, ensuring exclusive attention and personalized care.'
        },
        {
            icon: Sparkles,
            title: 'State-of-the-Art Facility',
            description: 'Modern equipment and sterile environment following international medical standards.'
        }
    ];

    const clinicHighlights = [
        'Licensed by Turkish Health Ministry',
        'International medical standards',
        'One patient per day policy',
        'Experienced medical team',
        'Modern surgical equipment',
        'Sterile & safe environment',
        'Personalized treatment plans',
        'Post-operative care included'
    ];

    return (
        <main className="relative fluid gridContainer w-full mt-16 mb-12 sm:mb-20 lg:mb-28">
            <section className="relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12 mb-16 lg:mb-24">
                <MotionScrollInView className="flex-1 w-full lg:max-w-2xl">
                    <article className="flex flex-col items-start gap-6">
                        <header className="flex flex-col items-start gap-3 w-full">
                            <div className='flex items-center gap-0.5'>
                                <Image src="/images/1-hair.svg" alt='hair' width={20} height={100} className='invert object-contain object-center' />
                                <h3 className="relative text-sm sm:text-base font-medium uppercase tracking-wider text-logo-blue">
                                    OUR CLINIC
                                </h3>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-marcellus text-black/90 leading-tight">
                                A Licensed Medical Facility You Can Trust
                            </h1>
                        </header>

                        <figure className="flex flex-col items-start gap-5 text-base sm:text-lg font-light text-black/80 leading-relaxed">
                            <p>
                                Our clinic is one of the very few licensed and authorized hair transplant clinics in Turkey. We are fully certified by the Turkish Health Ministry, ensuring that our patients receive the highest standard of medical care and expertise.
                            </p>
                            <p>
                                We believe in quality over quantity. By accepting only one patient per day, we provide exclusive attention and personalized care to each individual. This commitment to excellence means we focus on delivering the best possible results for every patient who trusts us with their hair restoration journey.
                            </p>
                        </figure>
                    </article>
                </MotionScrollInView>

                <MotionScrollInView className="flex-1 w-full lg:max-w-xl xl:max-w-2xl">
                    <aside className="relative w-full h-100 sm:h-125 lg:h-150 xl:h-175 rounded-lg overflow-hidden shadow-lg border border-gray-200/80">
                        <Image
                            src="/images/about/clinic-image-1.jpeg"
                            alt="Dr. Özlem Biçer Clinic"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </aside>
                </MotionScrollInView>
            </section>

            <MotionScrollInView className="mb-16 lg:mb-24">
                <article className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {clinicFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <figure
                                key={index}
                                className="bg-linear-to-br from-gray-50 to-white rounded-lg p-6 lg:p-8 border border-gray-200/80 hover:border-logo-blue/30 transition-all duration-300 hover:shadow-md group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="bg-logo-blue/10 p-3 rounded-full shrink-0 group-hover:bg-logo-blue/20 transition-colors duration-300">
                                        <Icon className="size-6 text-logo-blue" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-xl font-semibold text-black/90">{feature.title}</h3>
                                        <p className="text-sm font-light text-black/70 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            </figure>
                        );
                    })}
                </article>
            </MotionScrollInView>

            <MotionScrollInView className="mb-16 lg:mb-24">
                <article className="flex flex-col gap-6">
                    <h2 className="text-3xl sm:text-4xl font-marcellus text-black/90">Our Facility</h2>
                    <figure className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative h-80 sm:h-96 lg:h-120 rounded-lg overflow-hidden shadow-lg border border-gray-200/80 group">
                            <Image
                                src="/images/about/clinic-image-1.jpeg"
                                alt="Clinic Interior"
                                fill
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="relative h-80 sm:h-96 lg:h-120 rounded-lg overflow-hidden shadow-lg border border-gray-200/80 group">
                            <Image
                                src="/images/about/clinic-image-2.jpg"
                                alt="Clinic Facility"
                                fill
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </figure>
                </article>
            </MotionScrollInView>

            <MotionScrollInView className="mb-16 lg:mb-24">
                <article className="bg-linear-to-br from-logo-blue/5 to-logo-purple/5 rounded-lg p-8 lg:p-12 border border-gray-200/50">
                    <h2 className="text-3xl sm:text-4xl font-marcellus text-black/90 mb-8">Why Choose Our Clinic</h2>
                    <figure className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {clinicHighlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-200/80 hover:border-logo-blue/30 transition-all duration-300"
                            >
                                <CheckCircle2 className="size-5 text-logo-blue shrink-0 mt-0.5" />
                                <p className="text-sm font-light text-black/80">{highlight}</p>
                            </div>
                        ))}
                    </figure>
                </article>
            </MotionScrollInView>

            <MotionScrollInView>
                <article className="bg-linear-to-br from-gray-50 to-white rounded-lg p-8 lg:p-12 border border-gray-200/50 shadow-sm">
                    <figure className="flex items-start gap-4 mb-6">
                        <div className="bg-logo-purple/10 p-3 rounded-full shrink-0">
                            <Users className="size-6 text-logo-purple" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl sm:text-4xl font-marcellus text-black/90">Our Medical Team</h2>
                            <p className="text-base sm:text-lg font-light text-black/70">
                                Expert professionals dedicated to your care
                            </p>
                        </div>
                    </figure>
                    <figure className="flex flex-col gap-4 text-base sm:text-lg font-light text-black/80 leading-relaxed">
                        <p>
                            Our clinic is led by <strong className="font-semibold text-logo-blue">Dr. Özlem Biçer</strong>, a licensed medical doctor with over 25 years of experience in hair restoration surgery. Dr. Biçer is a member of prestigious international organizations including ISHRS, IAHRS, and FUE Europe.
                        </p>
                        <p>
                            She is supported by a team of highly-trained nurses and medical professionals who are dedicated to providing the best possible care for our patients. All procedures are performed by licensed medical doctors, ensuring the highest standards of safety and expertise.
                        </p>
                        <p>
                            Our team regularly participates in international conferences and training programs to stay updated with the latest techniques and technologies in hair restoration.
                        </p>
                    </figure>
                </article>
            </MotionScrollInView>
        </main>
    );
}

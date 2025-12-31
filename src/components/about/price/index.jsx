'use client';
import React from 'react';
import Image from 'next/image';
import MotionScrollInView from '@/components/common/motionScrollInView';
import { Phone, Video, AlertCircle, Check } from 'lucide-react';

export default function PriceMain() {
    const procedures = [
        { title: 'FUE Automated', price: '3€ per graft', range: '5,000€ - 12,000€', note: 'Up to 4,000 grafts in one session' },
        { title: 'FUE Manual', price: '4€ per graft', range: 'Up to 2,000 grafts', note: 'Manual extraction technique' },
        { title: 'FUT (Strip)', price: '6,000€', range: 'Fixed price', note: 'Strip harvesting method' },
        { title: 'Beard Transplant (Scalp to Beard)', price: '6,000€ - 9,000€', range: 'Variable', note: 'Related with graft count' },
        { title: 'Beard Transplant (Beard to Scalp)', price: '6,000€', range: 'Fixed price', note: 'Unrelated with graft count' },
        { title: 'Eyebrow Transplant', price: '6,000€', range: 'Fixed price', note: 'Natural eyebrow restoration' },
        { title: 'Body Hair Transplant', price: '6,000€', range: 'Fixed price', note: 'BHT procedure' },
        { title: 'Scalp Micro-Pigmentation (SMP)', price: '500€ - 1,000€', range: 'Variable', note: 'Non-surgical option' }
    ];

    const discounts = [
        { type: 'Medical Doctor/Team', discount: '10%' },
        { type: 'Student (who do not work)', discount: '10%' },
        { type: 'Group Patients (each)', discount: '10%' },
        { type: '2 BHT Sessions (same day)', discount: '15%' },
        { type: 'Before/After Photos (without face)', discount: '5%' },
        { type: 'Before/After Photos (with face)', discount: '10%' },
        { type: 'Scientific Publications', discount: '20%', note: 'Dr. Biçer\'s approval required' }
    ];

    return (
        <main className="relative fluid gridContainer w-full mt-16 mb-12 sm:mb-20 lg:mb-28">
            <div className='fluid absolute inset-x-0 top-[-2%] w-full h-1/4 -z-10'>
                <div className='absolute inset-0 top-0 z-30 bg-white/50' />
                <div className='absolute z-30 inset-x-0 bottom-1/3 h-24 bg-linear-to-t from-white to-transparent' />
                <video className='absolute -top-1/3 object-cover w-full h-full z-20' autoPlay muted loop>
                    <source src='/videos/hero-bg.mp4' type='video/mp4' />
                </video>
            </div>
            <MotionScrollInView className="mb-12 sm:mb-16 lg:mb-20">
                <header className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
                    <div className='flex items-center gap-0.5'>
                        <Image src="/images/1-hair.svg" alt='hair' width={20} height={100} className='invert object-contain object-center' />
                        <h3 className="relative text-sm sm:text-base font-medium uppercase tracking-wider text-logo-blue">
                            PRICING
                        </h3>
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-marcellus text-black/90 leading-tight">
                        Transparent & Competitive Pricing
                    </h1>
                    <p className="text-base sm:text-lg font-light text-black/70 leading-relaxed">
                        We believe in transparent pricing with no hidden costs. All prices include post-operative care and follow-up consultations.
                    </p>
                </header>
            </MotionScrollInView>

            <MotionScrollInView className="mb-12 sm:mb-16 lg:mb-20">
                <section className="flex flex-col gap-6">
                    <h2 className="text-3xl sm:text-4xl font-marcellus text-black/90">Procedure Pricing</h2>
                    <main className="bg-white rounded-lg border border-gray-200/80 overflow-hidden shadow-sm overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-linear-to-r from-logo-blue/10 to-logo-purple/10">
                                <tr>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-black/80">Procedure</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-black/80">Price</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-black/80">Range</th>
                                    <th className="text-left py-4 px-6 text-sm font-medium text-black/80">Note</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200/50">
                                {procedures.map((procedure, index) => (
                                    <tr key={index} className={`hover:bg-gray-50/50 transition-colors`}>
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-2">
                                                <span className="text-base font-medium text-black/75">{procedure.title}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="text-lg font-marcellus text-logo-purple">{procedure.price}</span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="text-sm font-light text-black/70">{procedure.range}</span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="text-sm font-light text-black/60">{procedure.note}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </main>
                    <p className="text-sm font-light text-black/60 italic">
                        * For FUE sessions, the price has a plus/minus 200 grafts range
                    </p>
                </section>
            </MotionScrollInView>

            <MotionScrollInView className="mb-12 sm:mb-16 lg:mb-20">
                <section className="w-full flex flex-col gap-6">
                    <h2 className="text-3xl sm:text-4xl font-marcellus text-black/90">Consultation</h2>
                    <main className="w-full flex items-center justify-between gap-6">
                        <article className="flex-1 w-full flex items-start gap-4 bg-linear-to-br from-gray-50 to-white rounded-lg p-8 border border-gray-200/80">
                            <div className="bg-logo-blue/10 p-3 rounded-full shrink-0">
                                <Video className="size-6 text-logo-blue" />
                            </div>
                            <div className="flex flex-col gap-1 flex-1">
                                <h3 className="text-lg font-medium text-black/90">Online Consultation</h3>
                                <p className="text-3xl font-marcellus text-logo-purple">Free</p>
                                <p className="text-sm font-light text-black/70">Get expert advice from anywhere</p>
                            </div>
                        </article>
                        <div className="w-px bg-gray-200" />
                        <article className="flex-1 w-full flex items-start gap-4 bg-linear-to-br from-gray-50 to-white rounded-lg p-8 border border-gray-200/80">
                            <div className="bg-logo-blue/10 p-3 rounded-full shrink-0">
                                <Phone className="size-6 text-logo-blue" />
                            </div>
                            <div className="flex flex-col gap-1 flex-1">
                                <h3 className="text-lg font-medium text-black/90">In-Person Consultation</h3>
                                <p className="text-3xl font-marcellus text-logo-purple">100€</p>
                                <p className="text-sm font-light text-black/70">Face-to-face at our clinic</p>
                            </div>
                        </article>
                    </main>
                </section>
            </MotionScrollInView>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
                <MotionScrollInView>
                    <main className="flex flex-col gap-6">
                        <h2 className="text-3xl sm:text-4xl font-marcellus text-black/90">Last Minute Appointments</h2>
                        <article className="bg-linear-to-br from-gray-50 to-white rounded-lg p-8 border border-gray-200/80">
                            <p className="text-sm font-light text-black/70 mb-6">
                                Special discounts to help with expensive last-minute flight prices
                            </p>
                            <figure className="flex flex-col gap-6">
                                <div className="flex items-baseline justify-between">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-lg font-medium text-black/90">Less than 10 days</h3>
                                        <p className="text-xs font-light text-black/60">Urgent bookings</p>
                                    </div>
                                    <p className="text-3xl font-marcellus text-logo-purple">1,000€</p>
                                </div>
                                <div className="h-px bg-gray-200" />
                                <div className="flex items-baseline justify-between">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-lg font-medium text-black/90">10-15 days away</h3>
                                        <p className="text-xs font-light text-black/60">Short notice</p>
                                    </div>
                                    <p className="text-3xl font-marcellus text-logo-purple">500€</p>
                                </div>
                            </figure>
                        </article>
                    </main>
                </MotionScrollInView>

                <MotionScrollInView>
                    <section className="flex flex-col gap-6">
                        <h2 className="text-3xl sm:text-4xl font-marcellus text-black/90">Touch-up Terms</h2>
                        <main className="bg-linear-to-br from-logo-purple/5 to-logo-blue/5 rounded-lg p-8 border border-gray-200/80">
                            <p className="text-sm font-light text-black/70 mb-6">
                                Sessions planned 1-2 times per year with Dr. Biçer's approval
                            </p>
                            <article className="flex flex-col gap-6">
                                <div className="flex items-baseline justify-between">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-lg font-medium text-black/90">50-200 grafts</h3>
                                        <p className="text-xs font-light text-black/60">For washing issues or head trauma</p>
                                    </div>
                                    <p className="text-3xl font-marcellus text-logo-purple">Free</p>
                                </div>
                                <div className="h-px bg-gray-200" />
                                <div className="flex items-baseline justify-between">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-lg font-medium text-black/90">Up to 1,000 grafts</h3>
                                        <p className="text-xs font-light text-black/60">Special touch-up pricing</p>
                                    </div>
                                    <p className="text-3xl font-marcellus text-logo-purple">2,000€</p>
                                </div>
                            </article>
                        </main>
                    </section>
                </MotionScrollInView>
            </section>

            <MotionScrollInView className="mb-12 sm:mb-16 lg:mb-20">
                <section className="flex flex-col gap-6">
                    <h2 className="text-3xl sm:text-4xl font-marcellus text-black/90">Available Discounts</h2>
                    <main className="bg-white rounded-lg p-8 border border-gray-200/80">
                        <p className="text-sm font-medium text-amber-600 mb-6">
                            ⚠️ Only one discount type applied • Maximum 20% total
                        </p>
                        <article className="flex flex-col gap-4">
                            {discounts.map((discount, index) => (
                                <figure key={index} className="flex items-start justify-between gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                    <div className="flex items-start gap-2 flex-1">
                                        <Check className="size-4 text-logo-blue shrink-0 mt-0.5" />
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-base font-base text-black/90">{discount.type}</span>
                                            {discount.note && (
                                                <span className="text-xs font-light text-black/60">{discount.note}</span>
                                            )}
                                        </div>
                                    </div>
                                    <span className="text-lg font-marcellus text-logo-blue shrink-0">{discount.discount}</span>
                                </figure>
                            ))}
                        </article>
                    </main>
                </section>
            </MotionScrollInView>

            <MotionScrollInView>
                <section className="bg-linear-to-r from-amber-50 to-orange-50 rounded-lg p-8 lg:p-12 border border-amber-200/50">
                    <article className="flex items-start gap-4 mb-6">
                        <div className="bg-amber-100 p-3 rounded-full shrink-0">
                            <AlertCircle className="size-6 text-amber-600" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-2xl sm:text-3xl font-marcellus text-black/90">Important Notes</h2>
                        </div>
                    </article>
                    <article className="flex flex-col gap-4 text-base font-light text-black/80 leading-relaxed">
                        <p>
                            Prices above are estimated. Other factors may increase the cost of the procedure:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>The general health of the patient</li>
                            <li>The age of the patient</li>
                            <li>Potential complications</li>
                            <li>The number and type of prior hair transplants a patient has undergone</li>
                        </ul>
                        <p>
                            Patients who authorize use of their photos or who participate in our social media may qualify for a discount. Group patients, students, and civil servants may also qualify for a discount. Other discounts or promotions may be available throughout the year.
                        </p>
                    </article>
                </section>
            </MotionScrollInView>
        </main>
    );
}

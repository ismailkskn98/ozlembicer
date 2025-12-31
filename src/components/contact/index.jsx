'use client';
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, User, MessageSquare, FileText } from 'lucide-react';
import MotionScrollInView from '@/components/common/motionScrollInView';
import { Link } from '@/i18n/navigation';
import FAQ from '../common/faq';

export default function ContactMain() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const address = 'Mor Menekşe sok. Deluxia Suites. A Blok. No: 3 Daire: 209, 34746 Batı Ataşehir/İstanbul';
    const mapAddress = encodeURIComponent('Dr. Özlem Biçer, ' + address);
    const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const googleMapsUrl = googleMapsApiKey
        ? `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${mapAddress}`
        : `https://www.google.com/maps?q=${mapAddress}&output=embed`;
    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${mapAddress}`;

    return (
        <main className="relative fluid gridContainer w-full mt-16 mb-16 sm:mb-20 lg:mb-28">
            <div className='fluid absolute inset-x-0 top-0 w-full h-1/4 -z-10'>
                <div className='absolute inset-0 top-0 z-30 bg-white/50' />
                <div className='absolute z-30 inset-x-0 bottom-1/3 h-24 bg-linear-to-t from-white to-transparent' />
                <video className='absolute -top-1/3 object-cover w-full h-full z-20' autoPlay muted loop>
                    <source src='/videos/hero-bg.mp4' type='video/mp4' />
                </video>
            </div>
            <section className="relative flex flex-col gap-12 lg:gap-16">
                <MotionScrollInView className="flex flex-col items-center text-center gap-4">
                    <header>
                        <h3 className="text-sm sm:text-base font-medium uppercase tracking-wider text-logo-blue mb-3">
                            CONTACT US
                        </h3>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-marcellus text-black/90 leading-tight">
                            Get in Touch
                        </h1>
                        <p className="text-base sm:text-lg font-light text-black/70 mt-4 max-w-2xl mx-auto">
                            Fill out the form below or reach out to us directly. We're here to answer your questions and help you on your hair restoration journey.
                        </p>
                    </header>
                </MotionScrollInView>

                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 mb-8 lg:mb-12 mx-auto">
                    <MotionScrollInView className={"max-w-xl"}>
                        <article className="bg-white rounded-lg border border-gray-200/80 shadow-sm p-6 sm:p-8">
                            <h2 className="text-2xl sm:text-3xl font-marcellus text-black/90 mb-6">
                                Let's Talk About Your Project
                            </h2>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium text-black/80 flex items-center gap-2">
                                        <User className="size-4 text-logo-blue" />
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                            <User className="size-5" />
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            className="w-full pl-12 pr-4 py-3 rounded-md border border-gray-300 focus:border-logo-blue focus:ring-2 focus:ring-logo-blue/20 outline-none transition-all duration-200 placeholder:text-xs"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium text-black/80 flex items-center gap-2">
                                        <Mail className="size-4 text-logo-blue" />
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                            <Mail className="size-5" />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="We'll get back to you here"
                                            className="w-full pl-12 pr-4 py-3 rounded-md border border-gray-300 focus:border-logo-blue focus:ring-2 focus:ring-logo-blue/20 outline-none transition-all duration-200 placeholder:text-xs"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-black/80 flex items-center gap-2">
                                        <Phone className="size-4 text-logo-blue" />
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                                            <Phone className="size-5" />
                                        </div>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Your phone number"
                                            className="w-full pl-12 pr-4 py-3 rounded-md border border-gray-300 focus:border-logo-blue focus:ring-2 focus:ring-logo-blue/20 outline-none transition-all duration-200 placeholder:text-xs"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-sm font-medium text-black/80 flex items-center gap-2">
                                        <MessageSquare className="size-4 text-logo-blue" />
                                        Message
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-4 text-gray-400 pointer-events-none">
                                            <MessageSquare className="size-5" />
                                        </div>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us how we can help"
                                            className="w-full pl-12 pr-4 py-3 rounded-md border border-gray-300 focus:border-logo-blue focus:ring-2 focus:ring-logo-blue/20 outline-none transition-all duration-200 resize-y placeholder:text-xs"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-logo-purple hover:bg-[#4d25a9] text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 mt-2 cursor-pointer"
                                >
                                    <Send className="size-5" />
                                    Send Message
                                </button>
                            </form>
                        </article>
                    </MotionScrollInView>
                    <MotionScrollInView className="flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-2xl sm:text-3xl font-marcellus text-black/90">
                                Prefer a Direct Approach?
                            </h2>

                            <div className="flex flex-col gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-logo-blue/10 p-3 rounded-full shrink-0">
                                        <Phone className="size-5 text-logo-blue" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xs font-medium text-black/60 uppercase tracking-wide">
                                            Call Us
                                        </p>
                                        <p className="text-sm font-medium text-black/80">
                                            Online Consultation
                                        </p>
                                        <Link
                                            href="tel:+905304141313"
                                            className="text-base font-semibold text-logo-blue hover:text-logo-purple transition-colors duration-200"
                                        >
                                            +90 530 414 13 13
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-logo-blue/10 p-3 rounded-full shrink-0">
                                        <Mail className="size-5 text-logo-blue" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xs font-medium text-black/60 uppercase tracking-wide">
                                            Email
                                        </p>
                                        <Link
                                            href="mailto:info@ozlembicer.com"
                                            className="text-base font-semibold text-logo-blue hover:text-logo-purple transition-colors duration-200"
                                        >
                                            info@ozlembicer.com
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-logo-blue/10 p-3 rounded-full shrink-0">
                                        <MapPin className="size-5 text-logo-blue" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-xs font-medium text-black/60 uppercase tracking-wide">
                                            Location
                                        </p>
                                        <p className="text-base font-medium text-black/80">
                                            Istanbul, TURKEY
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 pt-6 border-t border-gray-200">
                            <h3 className="text-xl font-marcellus text-black/90">
                                Visit Our Office
                            </h3>
                            <p className="text-sm font-light text-black/70 leading-relaxed">
                                Dr. Özlem Biçer | MD<br />
                                {address}
                            </p>
                            <Link
                                href={googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-logo-blue hover:text-logo-purple transition-colors duration-200 mt-2"
                            >
                                Get Directions
                                <span>→</span>
                            </Link>
                        </div>
                    </MotionScrollInView>


                </div>

                <MotionScrollInView className="w-full">
                    <article className="bg-white rounded-lg border border-gray-200/80 shadow-sm overflow-hidden">
                        <div className="relative w-full h-100 sm:h-125 lg:h-150">
                            <iframe
                                src={googleMapsUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            />
                        </div>
                        <div className="p-6 sm:p-8">
                            <h3 className="text-xl sm:text-2xl font-marcellus text-black/90 mb-2.5">
                                Visit Our Office
                            </h3>
                            <p className="text-sm sm:text-base font-light text-black/70 mb-3 leading-relaxed">
                                Dr. Özlem Biçer | MD<br />
                                {address}
                            </p>
                            <Link
                                href={googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-logo-blue hover:text-logo-purple transition-colors duration-200"
                            >
                                Get Directions
                                <span>→</span>
                            </Link>
                        </div>
                    </article>
                </MotionScrollInView>
            </section>
        </main>
    );
}

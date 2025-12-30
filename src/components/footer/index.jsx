import Image from 'next/image'
import SocialLinks from './SocialLinks'
import { Link } from '@/i18n/navigation'

const transplantationLinks = [
    { title: 'Hair Transplant', href: '/transplantation/hair' },
    { title: 'Body Hair Transplant', href: '/transplantation/body' },
    { title: 'Beard Transplant', href: '/transplantation/beard' },
    { title: 'Long Hair Unshaven', href: '/transplantation/long-hair' },
    { title: 'Eyebrow Transplant', href: '/transplantation/eyebrow' },
    { title: 'Women Transplant', href: '/transplantation/women' }
]

const treatmentsLinks = [
    { title: 'Hair Loss Treatment', href: '/treatments/hair-loss' },
    { title: 'Hair Loss in Women', href: '/treatments/hair-loss-women' },
    { title: 'PRP Therapy', href: '/treatments/prp' },
    { title: 'Hair Mesotherapy', href: '/treatments/mesotherapy' },
    { title: 'Norwood Scale', href: '/treatments/norwood' },
    { title: 'Shock Loss', href: '/treatments/shock-loss' }
]

const aboutLinks = [
    { title: 'Why Choose Us', href: '/about/why-choose-us' },
    { title: 'Who is Özlem Biçer', href: '/about/ozlem-bicer' },
    { title: 'Clinic and Team', href: '/about/clinic-team' },
    { title: 'Price', href: '/about/price' },
    { title: 'Covid Measures', href: '/about/covid' }
]

const galleryLinks = [
    { title: 'Before & After', href: '/gallery/before-after' },
    { title: 'Patient Results', href: '/gallery/results' },
    { title: 'Patient Reviews', href: '/gallery/reviews' },
    { title: 'Interview', href: '/gallery/interview' }
]

const legalLinks = [
    { title: 'KVKK', href: '/legal/kvkk' },
    { title: 'Terms', href: '/legal/terms' },
    { title: 'Cookies', href: '/legal/cookies' },
    { title: 'Disclaimer', href: '/legal/disclaimer' }
]

export default function Footer() {
    return (
        <footer className='relative fluid gridContainer'>
            <div className="fluid gridContainer bg-linear-to-b from-[#331864] to-[#141414] py-16">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-3">
                        We're listening.<br />What's on your mind?
                    </h2>
                    <p className="text-gray-300 text-sm mb-8">
                        Follow us on social media for the latest news, updates, and insights.
                    </p>
                    <SocialLinks />
                </div>
            </div>

            <div className="fluid gridContainer bg-[#141414] text-gray-400">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">

                        <div className="col-span-2 md:col-span-2 lg:col-span-2">
                            <Image src={"/images/logo-white.png"} alt='özlem bicer' width={200} height={50} className='-ml-4 object-contain object-center h-fit w-52 mb-2' />
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed max-w-xs">
                                Overcome balding and thinning hair. Look your best and feel more confident with a fuller head of hair.
                            </p>
                            <div className="text-sm">
                                <p className="text-white font-semibold mb-1">Working Hours</p>
                                <p>Mon - Sat: 09:00 - 18:00</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>

                        <article className='flex flex-col items-start gap-4'>
                            <h3 className="text-white text-sm font-medium">Transplantation</h3>
                            <nav className="flex flex-col items-start gap-2 text-xs 2xl:text-sm">
                                {transplantationLinks.map((link) => (
                                    <Link key={link.title} href={link.href} className="hover:text-white transition-colors">
                                        {link.title}
                                    </Link>
                                ))}
                            </nav>
                        </article>

                        <article className='flex flex-col items-start gap-4'>
                            <h3 className="text-white text-sm font-medium">Hair Treatments</h3>
                            <nav className="flex flex-col items-start gap-2 text-xs 2xl:text-sm">
                                {treatmentsLinks.map((link) => (
                                    <Link key={link.title} href={link.href} className="hover:text-white transition-colors">
                                        {link.title}
                                    </Link>
                                ))}
                            </nav>
                        </article>

                        <article className='flex flex-col items-start gap-4'>
                            <h3 className="text-white text-sm font-medium">About Us</h3>
                            <nav className="flex flex-col items-start gap-2 text-xs 2xl:text-sm">
                                {aboutLinks.map((link) => (
                                    <Link key={link.title} href={link.href} className="hover:text-white transition-colors">
                                        {link.title}
                                    </Link>
                                ))}
                            </nav>
                        </article>

                        <article className='flex flex-col items-start gap-4'>
                            <h3 className="text-white text-sm font-medium">Gallery</h3>
                            <nav className="flex flex-col items-start gap-2 text-xs 2xl:text-sm">
                                {galleryLinks.map((link) => (
                                    <Link key={link.title} href={link.href} className="hover:text-white transition-colors">
                                        {link.title}
                                    </Link>
                                ))}
                            </nav>
                        </article>
                    </div>

                    <div className="border-t border-gray-800 pt-6">
                        <p className="text-xs text-gray-500 mb-8">
                            Dr. Özlem Biçer is the leading specialist in hair transplantation and hair treatments in Istanbul, Turkey.
                            Our clinic offers FUE and FUT hair transplant techniques, beard and eyebrow transplantation, PRP therapy,
                            and comprehensive hair loss treatments. We are dedicated to providing world-class aesthetic solutions with
                            professional care and natural-looking results.
                        </p>
                        <div className="text-center">
                            <p className="text-white text-6xl md:text-8xl font-bold tracking-tight opacity-10 pointer-events-none select-none">
                                DR. BİÇER
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-900">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
                            <p className="text-center md:text-left">
                                Copyright © {new Date().getFullYear()} All rights reserved by M.D. Özlem BİÇER
                            </p>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                {legalLinks.map((link, index) => (
                                    <span key={link.title} className="flex items-center">
                                        <a href={link.href} className="hover:text-white transition-colors">
                                            {link.title}
                                        </a>
                                        {index < legalLinks.length - 1 && <span className="ml-4 text-gray-700">|</span>}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

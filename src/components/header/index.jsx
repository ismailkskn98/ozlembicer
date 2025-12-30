import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import LanguageChange from '../common/languageChange'
import SearchMain from './search'
import MotionScrollInViewOpacity from '../common/motionScrollInViewOpacity'
import Navbar from './navbar'

export default function Header() {
    return (
        <header className='w-full shadow-xs border-b border-gray-100 relative'>
            <MotionScrollInViewOpacity>
                <section className='gridContainer'>
                    <main className='w-full grid grid-cols-5 pt-4 pb-3'>
                        <Link href={"/"} className='relative z-20 flex items-end justify-start'>
                            <Image src={"/images/logo.png"} alt='özlem bicer' width={250} height={70} className='h-fit w-40 object-contain object-center' />
                        </Link>
                        <Navbar />
                        <article className='w-full flex items-center justify-end gap-4'>
                            <SearchMain />
                            <LanguageChange />
                        </article>
                    </main>
                </section>
            </MotionScrollInViewOpacity>
        </header>
    )
}

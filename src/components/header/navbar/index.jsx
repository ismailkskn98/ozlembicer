'use client';
import { HoveredLink, Menu, MenuItem, ProductItem } from '@/components/ui/navbar-menu'
import { Link } from '@/i18n/navigation'
import React, { useState } from 'react'

export default function Navbar() {
    const [active, setActive] = useState(null);
    return (
        <nav className='col-span-3 flex items-center justify-center gap-6 text-sm text-nowrap font-light z-50'>
            {/* <Link href={"#"}>Home</Link>
            <Link href={"/about"}>About Us</Link>
            <Link href={"#"}>Transplantation</Link>
            <Link href={"#"}>Hair Treatments</Link>
            <Link href={"#"}>Gallery</Link>
            <Link href={"#"}>Contact Us</Link> */}
            <Link href="/">Home</Link>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="About Us">
                    <div className="flex flex-col space-y-4 text-sm bg-white capitalize">
                        <HoveredLink href="/about-us">Why Choose Us</HoveredLink>
                        <HoveredLink href="/who-is-ozlem-bicer">Who is Ozlem Bicer</HoveredLink>
                        <HoveredLink href="/clinic-and-team">Clinic and Team</HoveredLink>
                        <HoveredLink href="/price">Price</HoveredLink>
                        {/* <HoveredLink href="/covid-measures">Covid Measures</HoveredLink> */}
                    </div>
                </MenuItem>
                {/* <MenuItem setActive={setActive} active={active} item="Transplantation">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Algochurn"
                            href="https://algochurn.com"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="Prepare for tech interviews like never before."
                        />
                        <ProductItem
                            title="Tailwind Master Kit"
                            href="https://tailwindmasterkit.com"
                            src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                            description="Production ready Tailwind css components for your next project"
                        />
                        <ProductItem
                            title="Moonbeam"
                            href="https://gomoonbeam.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                            description="Never write from scratch again. Go from idea to blog in minutes."
                        />
                        <ProductItem
                            title="Rogue"
                            href="https://userogue.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                        />
                    </div>
                </MenuItem> */}
            </Menu>
            <Link href={"#"}>Transplantation</Link>
            <Link href={"#"}>Hair Treatments</Link>
            <Link href={"#"}>Gallery</Link>
            <Link href="/contact-us">Contact</Link>
        </nav>
    )
}

'use client';
import { HoveredLink, Menu, MenuItem, ProductItem, NestedHoveredLink } from '@/components/ui/navbar-menu'
import { Link } from '@/i18n/navigation'
import React, { useState } from 'react'

export default function Navbar() {
    const [active, setActive] = useState(null);
    const menu = [
        {
            item: 'About Us',
            links: [
                { href: '/about-us', label: 'Why Choose Us' },
                { href: '/who-is-ozlem-bicer', label: 'Who is Ozlem Bicer' },
                { href: '/clinic-and-team', label: 'Clinic and Team' },
                { href: '/price', label: 'Price' },
            ],
        },
        {
            item: 'Transplantation',
            links: [
                {
                    href: '/about-us',
                    label: 'Hair Transplant',
                    submenu: [
                        { href: '/hair-transplant', label: 'FUT technique' },
                        { href: '/hair-transplant', label: 'FUE Micromotor technique' },
                        { href: '/hair-transplant', label: 'FUE Manuel technique' },
                    ],
                },
                { href: '/who-is-ozlem-bicer', label: 'Body Hair Transplant' },
                { href: '/clinic-and-team', label: 'Beard Transplant' },
                { href: '/clinic-and-team', label: 'Long Hair Unshaven' },
                { href: '/clinic-and-team', label: 'Eyebrow Transplant' },
                { href: '/clinic-and-team', label: 'Women Transplant' },
                { href: '/clinic-and-team', label: 'Hair Wash' },
                { href: '/price', label: 'Price' },
            ],
        },
        {
            item: 'Hair Treatments',
            links: [
                { href: '/who-is-ozlem-bicer', label: 'Hair Loss' },
                { href: '/clinic-and-team', label: 'Hair Loss In Women' },
                { href: '/clinic-and-team', label: 'Hair Mesotherapy' },
                { href: '/clinic-and-team', label: 'PRP' },
                { href: '/clinic-and-team', label: 'Norwood scale' },
                { href: '/clinic-and-team', label: 'Reconstruction Hair Transplantation' },
                { href: '/price', label: 'Shock Loss' },
            ],
        },
        {
            item: 'Gallery',
            links: [
                { href: '/who-is-ozlem-bicer', label: 'Before & After' },
                { href: '/clinic-and-team', label: 'Patient Results' },
                { href: '/clinic-and-team', label: 'Patient Reviews' },
                { href: '/clinic-and-team', label: 'Interview' },
            ],
        },
    ];
    return (
        <nav className='col-span-3 flex items-center justify-center gap-6 text-sm text-nowrap font-light z-50'>
            <Link href="/">Home</Link>
            <Menu setActive={setActive}>
                {menu.map((item) => (
                    <MenuItem key={item.item} setActive={setActive} active={active} item={item.item}>
                        <div className="flex flex-col text-sm bg-white capitalize pb-2">
                            {item.links.map((link, idx) =>
                                link.submenu ? (
                                    <NestedHoveredLink
                                        key={link.label + idx}
                                        href={link.href}
                                        className="relative"
                                        submenu={
                                            <>
                                                {link.submenu.map((s, sidx) => (
                                                    <HoveredLink key={s.label + sidx} href={s.href} className="hovered-link">{s.label}</HoveredLink>
                                                ))}
                                            </>
                                        }
                                    >
                                        {link.label}
                                    </NestedHoveredLink>
                                ) : (
                                    <HoveredLink key={link.label + idx} href={link.href} className={"hovered-link"}>{link.label}</HoveredLink>
                                )
                            )}
                        </div>
                    </MenuItem>
                ))}
            </Menu>
            <Link href="/contact-us">Contact</Link>
        </nav>
    )
}

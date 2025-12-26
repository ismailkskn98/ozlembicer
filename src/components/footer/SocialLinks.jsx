"use client"

import { Facebook, Youtube, Instagram } from 'lucide-react'

const socialLinks = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/drozlembicer',
        icon: Facebook
    },
    {
        name: 'YouTube',
        href: 'https://www.youtube.com/channel/UCKqfVP6QL6vydfS8OjCBWqQ',
        icon: Youtube
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/dr.ozlembicerclinic',
        icon: Instagram
    }
]

export default function SocialLinks() {
    return (
        <div className="flex gap-3 justify-center">
            {socialLinks.map((social) => (
                <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-white hover:bg-white/10 transition-all duration-300"
                    aria-label={social.name}
                >
                    <social.icon className="w-5 h-5 text-white" />
                </a>
            ))}
        </div>
    )
}

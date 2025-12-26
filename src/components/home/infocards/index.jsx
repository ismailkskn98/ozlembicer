import React from 'react'
import { Link } from '@/i18n/navigation'
import MotionScrollInViewVariant from '@/components/common/motionScrollInViewVariant'
import { MessageCircle, Video, Plane, FileText, ArrowRight } from 'lucide-react'

const infoCards = [
    {
        id: 1,
        title: 'Free Consultation',
        description: 'You may text or email us to request a free consultation with Dr. Bicer. We normally respond to texts within 1 business day, and emails within 2 business days.',
        icon: MessageCircle,
        position: 'left'
    },
    {
        id: 2,
        title: 'Meet Dr. Bicer',
        description: 'We will arrange a time for you to speak with Dr. Bicer through video chat using WhatsApp. During the consultation, you can share your goals and objectives with Dr. Bicer.',
        icon: Video,
        position: 'right'
    },
    {
        id: 3,
        title: 'Travel & Accommodation Support',
        description: 'Once you have scheduled your procedure and booked your flight, we can assist you with selecting a hotel and transportation to and from the airport. These are courtesy services, and you have the option of choosing your own arrangements. You may return home the day after the procedure.',
        icon: Plane,
        position: 'left'
    },
    {
        id: 4,
        title: 'Patient Information',
        description: 'Appointments are reserved exclusively for each patient. To ensure fairness and transparency, we kindly ask you to review our cancellation and postponement policies before booking.',
        icon: FileText,
        position: 'right',
        link: '#',
        linkText: 'View Patient Policies'
    }
]

export default function InfoCards() {
    return (
        <main className='relative w-full fluid gridContainer py-28 overflow-hidden'>
            <section className='relative w-full max-w-10/12 2xl:max-w-9/12 mx-auto flex flex-col items-center justify-center gap-y-3'>
                <div className='absolute left-1/2 inset-y-0 -translate-x-1/2 w-fit h-full z-10'>
                    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
                    </div>
                </div>
                <MotionScrollInViewVariant className={"w-full flex flex-col items-center justify-center gap-y-24 mix-blend-difference text-white"}>
                    {infoCards.map((card) => {
                        const IconComponent = card.icon
                        return (
                            <article
                                key={card.id}
                                className='w-full grid grid-cols-2 gap-x-56'
                            >
                                <div className={`group relative ${card.position === 'right' ? 'col-start-2 col-end-3' : ''} max-w-lg`}>
                                    <div className='flex items-start gap-4'>
                                        <div className='mt-1 shrink-0'>
                                            <IconComponent className='w-5 h-5 text-white/50 group-hover:text-white/80 transition-colors duration-300' strokeWidth={1.5} />
                                        </div>
                                        <div className='flex-1'>
                                            <h3 className='text-xl mb-3 font-medium text-white/80 group-hover:text-white transition-colors duration-300'>
                                                {card.title}
                                            </h3>
                                            <p className='text-sm 2xl:text-base font-extralight text-white/90 leading-relaxed mb-4'>
                                                {card.description}
                                            </p>
                                            {card.link && (
                                                <Link
                                                    href={card.link}
                                                    className='inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-300 group/link'
                                                >
                                                    <span>{card.linkText}</span>
                                                    <ArrowRight className='w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-300' />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </MotionScrollInViewVariant>
            </section>
        </main>
    )
}

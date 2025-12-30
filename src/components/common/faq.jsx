'use client';
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import MotionScrollInView from '@/components/common/motionScrollInView';

export default function FAQ({ items = [], title = "Frequently Asked Questions", description, className = "" }) {
    const defaultItems = [
        {
            question: "What is a hair transplant?",
            answer: "A hair transplant is a surgical procedure that moves hair follicles from a part of the body (donor site) to a bald or balding part (recipient site). It's primarily used to treat male pattern baldness."
        },
        {
            question: "How long does the procedure take?",
            answer: "The duration of a hair transplant procedure varies depending on the number of grafts needed. Typically, it can take anywhere from 4 to 8 hours. We take only one patient per day to ensure you receive exclusive attention and the best possible care."
        },
        {
            question: "What is the recovery time?",
            answer: "Most patients can return to work within 3-5 days after the procedure. However, it's recommended to avoid strenuous activities for at least 2 weeks. The transplanted hair will fall out within 2-3 weeks, and new hair growth typically begins after 3-4 months."
        },
        {
            question: "Is the procedure painful?",
            answer: "Local anesthesia is used during the procedure, so you should not feel any pain. Some patients may experience mild discomfort or soreness in the days following the procedure, which can be managed with prescribed medications."
        },
        {
            question: "How long do the results last?",
            answer: "Hair transplant results are considered permanent. The transplanted hair follicles are taken from areas that are genetically resistant to balding, so they should continue to grow for the rest of your life."
        }
    ];

    const faqItems = items.length > 0 ? items : defaultItems;

    return (
        <section className={`relative fluid gridContainer w-full mt-16 mb-20 sm:mb-28 lg:mb-36 ${className}`}>
            <MotionScrollInView className="w-full">
                <main className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white via-gray-50 to-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-lg">
                    <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48">
                        <div className="w-full h-full bg-linear-to-bl from-logo-blue/20 to-logo-blue/5 rounded-bl-full opacity-60"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32">
                        <div className="w-full h-full bg-linear-to-tr from-logo-purple/20 to-logo-purple/5 rounded-tr-full opacity-60"></div>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h3 className="text-sm sm:text-base font-medium uppercase tracking-wider text-logo-blue mb-3">
                                FAQ
                            </h3>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-marcellus text-black/90 mb-2">
                                {title}
                            </h2>
                            {description && (
                                <p className="text-base sm:text-lg font-light text-black/70 mt-4 max-w-2xl mx-auto">
                                    {description}
                                </p>
                            )}
                        </div>

                        <div className="rounded-2xl overflow-hidden">
                            <Accordion type="single" collapsible className="w-full">
                                {faqItems.map((item, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="border-b border-gray-200/60 last:border-b-0 bg-white/50 backdrop-blur-sm"
                                    >
                                        <AccordionTrigger className="px-6 sm:px-8 py-6 text-left hover:no-underline hover:bg-gray-50/50 transition-all duration-300 text-black/90 font-medium text-sm sm:text-base group data-[state=open]:bg-gray-50/50">
                                            <div className="flex items-start gap-4 w-full pr-4">
                                                <div className="shrink-0 w-6 h-6 mt-0.5">
                                                    <div className="w-full h-full rounded-full border-2 border-gray-300 group-hover:border-logo-blue transition-colors duration-300 flex items-center justify-center data-[state=open]:border-logo-purple">
                                                        <div className="w-2 h-2 bg-gray-400 group-hover:bg-logo-blue transition-colors duration-300 rounded-full data-[state=open]:bg-logo-purple"></div>
                                                    </div>
                                                </div>
                                                <span className="text-left leading-relaxed">{item.question}</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="px-6 sm:px-8 py-6 text-black/70 leading-relaxed">
                                            <div className="pl-10 text-sm sm:text-base">
                                                {item.answer}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </main>
            </MotionScrollInView>
        </section>
    );
}


'use client';
import React, { useTransition } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useSearchParams } from 'next/navigation';

export default function LanguageChange() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const locale = useLocale();
    const [isPending, startTransition] = useTransition();

    let currentSearchParams = {};
    searchParams.forEach((value, key) => {
        currentSearchParams[key] = value;
    })

    return (
        <article className='w-fit flex items-center'>
            <Select defaultValue={locale} onValueChange={(value) => {
                startTransition(() => {
                    router.replace({ pathname, query: currentSearchParams }, { scroll: false, locale: value })
                })
            }}>
                <SelectTrigger
                    iconShow={true}
                    className={`border-none min-w-14.75 ring-0 focus-visible:ring-0 focus-visible:border-0 focus-visible:outline-0 justify-start cursor-pointer transition-all duration-200 w-fit h-fit! py-0 shadow-none bg-transparent text-black/70 hover:text-black focus:text-black focus-visible:text-black active:text-black dark:text-white/80 dark:hover:text-white dark:focus:text-white dark:focus-visible:text-white dark:active:text-white px-0! gap-0.5! dark:shadow-none dark:bg-transparent dark:hover:bg-transparent`}
                >
                    <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-site-dark">
                    <SelectItem value="tr" className={"cursor-pointer"}>
                        <span className="flex flex-nowrap items-center gap-1.5 text-xs">
                            <Image src="https://flagcdn.com/24x18/tr.png" alt="Türkçe" width={24} height={18} className="h-3 w-4 object-cover" />
                            <span>Türkçe</span>
                        </span>
                    </SelectItem>
                    <SelectItem value="en" className={"cursor-pointer"}>
                        <span className="flex flex-nowrap items-center gap-1.5 text-xs">
                            <Image src="https://flagcdn.com/24x18/us.png" alt={"English"} width={24} height={18} className="h-3 w-4 object-cover" />
                            <span>English</span>
                        </span>
                    </SelectItem>
                    <SelectItem value="ru" className={"cursor-pointer"}>
                        <span className="flex flex-nowrap items-center gap-1.5 text-xs">
                            <Image src="https://flagcdn.com/24x18/ru.png" alt={"Russian"} width={24} height={18} className="h-3 w-4 object-cover" />
                            <span>Russian</span>
                        </span>
                    </SelectItem>
                    <SelectItem value="az" className={"cursor-pointer"}>
                        <span className="flex flex-nowrap items-center gap-1.5 text-xs">
                            <Image src="https://flagcdn.com/24x18/az.png" alt={"Azerbaijani"} width={24} height={18} className="h-3 w-4 object-cover" />
                            <span>Azerbaijani</span>
                        </span>
                    </SelectItem>
                    <SelectItem value="ka" className={"cursor-pointer"}>
                        <span className="flex flex-nowrap items-center gap-1.5 text-xs">
                            <Image src="https://flagcdn.com/24x18/ge.png" alt={"Georgia"} width={24} height={18} className="h-3 w-4 object-cover" />
                            <span>Georgia</span>
                        </span>
                    </SelectItem>
                </SelectContent>
            </Select>
        </article>
    )
}

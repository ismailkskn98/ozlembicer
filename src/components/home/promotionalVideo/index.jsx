import React from 'react'
import VideoAnimate from './videoAnimate'

export default function PromotionalVideo() {
    return (
        <main id='video-section' className='fluid gridContainer my-16'>
            <section className='w-full flex flex-col items-center gap-8'>
                <article className='flex flex-col items-center justify-center gap-1.5 mix-blend-difference text-white'>
                    <h2 className='font-marcellus text-6xl opacity-80'>Hair Transplantation</h2>
                    <p className='text-lg font-extralight'>Business of an experienced doctor and professional team</p>
                </article>
                <VideoAnimate />
                <article>
                    <p className='text-sm font-extralight mx-auto text-center max-w-6xl leading-relaxed tracking-wider mix-blend-difference text-white opacity-90'>
                        FUE saç ekiminden 1 yıl sonra elde edilen sonuçlar bu videoda paylaşılmaktadır.
                        Saç yoğunluğu, doğal görünüm ve iyileşme sürecinin tamamlanmış hali gösterilmektedir. Saç ekimi, mutlaka deneyimli bir doktor ve profesyonel bir ekip tarafından yapılması gereken tıbbi bir işlemdir. Doğru planlama, doğru teknik ve uygun bakım, kalıcı ve başarılı sonuçlar için çok önemlidir.
                    </p>
                </article>
            </section>
        </main>
    )
}
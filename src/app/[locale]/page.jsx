import Hero from "@/components/home/hero";
import InfoCards from "@/components/home/infocards";
import OzlembicerAbout from "@/components/home/ozlembicerAbout";
import PromotionalVideo from "@/components/home/promotionalVideo";
import ServicesMain from "@/components/home/services";
import SvgPath from "@/components/home/svgPath";
import YoutubeCarousel from "@/components/home/youtubeCarousel";
import { getTranslations } from "next-intl/server";

const getYoutubeVideos = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/youtube`, {
      cache: "force-cache",
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      console.error("yotube video isteği başarısız", res.status);
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("yotube video isteği başarısız error:", error);
    return [];
  }
};

export default async function Home() {
  const t = getTranslations("HomePage");
  const videos = await getYoutubeVideos();
  return <>
    <Hero />
    <section className="w-full h-full overflow-hidden">
      <OzlembicerAbout />
      <ServicesMain />
      <div id='spotlight' className="relative w-full">
        <SvgPath />
        <InfoCards />
        <PromotionalVideo />
        <YoutubeCarousel videos={videos} />
      </div>
    </section>
  </>;
}

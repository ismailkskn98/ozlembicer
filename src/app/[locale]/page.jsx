import Hero from "@/components/home/hero";
import InfoCards from "@/components/home/infocards";
import OzlembicerAbout from "@/components/home/ozlembicerAbout";
import PromotionalVideo from "@/components/home/promotionalVideo";
import ServicesMain from "@/components/home/services";
import SvgPath from "@/components/home/svgPath";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return <>
    <Hero />
    <section className="w-full h-full overflow-hidden">
      <OzlembicerAbout />
      <ServicesMain />
      <div id='spotlight' className="relative w-full">
        <SvgPath />
        <InfoCards />
        <PromotionalVideo />
      </div>
    </section>
  </>;
}

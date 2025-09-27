"use client"
import Banner from "@/components/common/banner";
import VerticalTextColorChanger from "@/components/common/VerticalTextColorChanger";
import FashionCompassion from "@/components/projects/fashionCompassion";
import SponsorGallery from "@/components/projects/sponsorGallery";
import { SectionObserverProvider } from "@/context/SectionObserverContext";
import bannerImg from '@/public/images/projects/banner.jpg'

export default function Page() {
    return(
        <SectionObserverProvider>
            <VerticalTextColorChanger />
            <Banner bannerImg={bannerImg} alt="Collab Banner Image" />
            <FashionCompassion />
            <SponsorGallery />
        </SectionObserverProvider>
    )
}
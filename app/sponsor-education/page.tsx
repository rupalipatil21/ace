"use client"
import Banner from "@/components/common/banner";
import VerticalTextColorChanger from "@/components/common/VerticalTextColorChanger";
import SponsorEducation from "@/components/projects/sponsorEducation";
import { SectionObserverProvider } from "@/context/SectionObserverContext";
import bannerImg from '@/public/images/projects/banner-sponsor.jpg'

export default function Collab(){
    return(
        <SectionObserverProvider>
            <VerticalTextColorChanger />
            <Banner bannerImg={bannerImg} alt="Collab Banner Image" />
            <SponsorEducation />
        </SectionObserverProvider>
    )
}
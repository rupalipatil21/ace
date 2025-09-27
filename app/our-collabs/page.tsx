"use client"
import Partners from "@/components/collabs/partners";
import Banner from "@/components/common/banner";
import GreySection from "@/components/common/greySection";
import QuoteBox from "@/components/common/quoteBox";
import VerticalTextColorChanger from "@/components/common/VerticalTextColorChanger";
import { SectionObserverProvider } from "@/context/SectionObserverContext";
import bannerImg from '@/public/images/collab/banner-collab.jpg'

export default function Collab(){
    return(
        <SectionObserverProvider>
            <VerticalTextColorChanger />
            <Banner bannerImg={bannerImg} alt="Collab Banner Image" />
            <GreySection collabs={"true"} />
            <Partners />
            <QuoteBox collabquote="true" />
        </SectionObserverProvider>
    )
}
"use client"

import AboutAce from "@/components/about-us/aboutAce"
import AboutTimeline from "@/components/about-us/aboutTimeline"
import MovingForword from "@/components/about-us/movingForword"
import TopSection from "@/components/about-us/topSection"
import Banner from "@/components/common/banner"
import QuoteBox from "@/components/common/quoteBox"
import VerticalTextColorChanger from "@/components/common/VerticalTextColorChanger"
import { SectionObserverProvider } from "@/context/SectionObserverContext"
import banner from '@/public/images/about/banner-about.jpg'

export default function About(){
    return(
        <SectionObserverProvider>
            <VerticalTextColorChanger />
            <Banner bannerImg={banner} alt="About Banner Image" />
            <TopSection />
            <AboutAce />
            <QuoteBox aboutquote="true" />
            <AboutTimeline />
            <MovingForword />
        </SectionObserverProvider>
    )
}
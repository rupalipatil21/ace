"use client"
import Banner from "@/components/common/banner";
import QuoteBox from "@/components/common/quoteBox";
import VerticalTextColorChanger from "@/components/common/VerticalTextColorChanger";
import CommonRaincoatSec from "@/components/raincoat-project/commonRaincoatSec";
import RaincoatImapct from "@/components/raincoat-project/raincoatImapct";
import RainProjectTeam from "@/components/raincoat-project/rainProjectTeam";
import RainQuoteBox from "@/components/raincoat-project/rainQuoteBox";
import { SectionObserverProvider } from "@/context/SectionObserverContext";
import bannerImg from '@/public/images/projects/banner-raincoat.jpg'

export default function RaincoatProject(){
    return(
        <SectionObserverProvider>
            <VerticalTextColorChanger />
            <Banner bannerImg={bannerImg} alt="Collab Banner Image" />
            <CommonRaincoatSec />
            <RainQuoteBox />
            <RaincoatImapct />
            <RainProjectTeam />
            <QuoteBox rainquote="true" />
            <CommonRaincoatSec partner="true" />
        </SectionObserverProvider>
    )
}
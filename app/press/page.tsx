"use client"
import Banner from "@/components/common/banner";
import VerticalTextColorChanger from "@/components/common/VerticalTextColorChanger";
import PeopleSpeak from "@/components/press/peopleSpeak";
import { SectionObserverProvider } from "@/context/SectionObserverContext";
import bannerImg from '@/public/images/press/banner-press.jpg'

export default function Page(){
    return(
        <SectionObserverProvider>
            <VerticalTextColorChanger />    
            <Banner bannerImg={bannerImg} alt="Collab Banner Image" />
            <PeopleSpeak />
        </SectionObserverProvider>
    )
}
"use client"
import Banner from "@/components/common/banner";
import Carousel from "@/components/common/carousel";
import bannerImg from '@/public/images/snapshot/snapshot-banner.jpg'
import { Section } from "@/styles/ace.styled";
import { Container } from "@mui/material";
import { snapCarouselImages } from "@/lib/constant";

export default function Page(){
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };
    return(
        <>
            <Banner bannerImg={bannerImg} alt="Collab Banner Image" />
            <Section>
                <Container maxWidth="lg" disableGutters>
                    <Carousel settings={settings} images={snapCarouselImages} />
                </Container>
            </Section>
            
        </>
    )
}
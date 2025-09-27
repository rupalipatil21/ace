"use client"
import ShareInsta from "@/components/common/shareInsta";
import Carousel from "@/components/common/carousel";
import Home from "@/components/home/homeRow1";
import OurProjects from "@/components/home/ourProjects";
import SpreadingLove from "@/components/home/spreadingLove";
import Vision from "@/components/home/vision";
import { useRef, useState, useEffect } from "react";
import { DotBox } from "@/styles/home.styled";
import { List } from "@mui/material";
import { homeCarouselImages } from "@/lib/constant";
import VerticalTextColorChanger from "@/components/common/VerticalTextColorChanger";
import { SectionObserverProvider } from "../context/SectionObserverContext";

export default function Page() {
  const whiteSectionRef = useRef(null);
  const [isOnWhiteBg, setIsOnWhiteBg] = useState(false);  

  // useEffect(() => {
  //     const observer = new IntersectionObserver(
  //     ([entry]) => {

  //         setIsOnWhiteBg(entry.isIntersecting);
  //     },
  //     { threshold: 0.1 }
  //     );
  //     const current = whiteSectionRef.current;
  //     if (current) observer.observe(current);

  //     return () => {
  //     if (current) observer.unobserve(current);
  //     };
  // }, []);

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots:any) => (
      <DotBox>
          <List>
          {dots}
          </List>
      </DotBox>
      ),
  };
  return (
    <SectionObserverProvider>
      <VerticalTextColorChanger />
      <Carousel settings={settings} images={homeCarouselImages} homeslider="true" />
      <Home />
      <Vision />
      <SpreadingLove />
      <OurProjects />
      {/* <ShareInsta isOnWhiteBg={isOnWhiteBg} /> */}
    </SectionObserverProvider >
  );
}

"use client"
import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderBox } from "../../styles/home.styled";
import Image from "next/image";

export default function Carousel({settings, images, homeslider}:any) {
    return(
        <>
        <SliderBox className="slider-container" homeslider={homeslider}>
            <Slider {...settings}>
                {images.map(({ src, alt }:any, i:any) => (
                <Box key={i}>
                    <Image src={src} alt={alt} />
                </Box>
                ))}
            </Slider>
        </SliderBox>
        </>
    )
}
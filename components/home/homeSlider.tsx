"use client"
import { Box, List } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DotBox, SliderBox } from "../../styles/home.styled";
import Image from "next/image";
import img1 from '../../public/images/home/banner-1.jpg'
import img2 from '../../public/images/home/banner-2.png'
import img3 from '../../public/images/home/banner-3.jpg'

export default function HomeSlider() {
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
    return(
        <SliderBox className="slider-container">
            <Slider {...settings}>
            <Box>
                <Image src={img1} alt="Banner1" />
            </Box>
            <Box>
                <Image src={img2} alt="Banner2" />
            </Box>
            <Box>
                <Image src={img3} alt="Banner3" />
            </Box>
            </Slider>
        </SliderBox>
    )
}
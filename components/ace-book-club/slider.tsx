"use client"
import { Box, Container, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderBox } from "../../styles/home.styled";
import Image from "next/image";
import { testimonialData } from "@/lib/constant";
import quote from '@/public/images/aceBookClub/quote1.png'
import { TestimonialBox } from "@/styles/ace.styled";

export default function TestimonialSlider() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };
    return(
        <Container maxWidth="lg">
            <SliderBox className="slider-container" testimonialslide="true">
                <Slider {...settings}>
                    {
                    testimonialData.map((testimonial, index) => (
                    <TestimonialBox key={index}>
                        <Box>
                            <Image src={quote} alt="quote" />
                            <Typography variant="p_400">{testimonial.text}</Typography>
                        </Box>
                        <Typography variant="h3_600">{testimonial.name}</Typography>
                        <Typography variant="p_400" display="block">{testimonial.designation}</Typography>
                        <Typography variant="p_400">{testimonial.school}</Typography>
                    </TestimonialBox>
                    ))
                    }
                </Slider>
            </SliderBox>
        </Container>
    )
}
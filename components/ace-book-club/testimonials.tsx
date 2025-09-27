"use client"
import { H1Typo, Section, VideoBox } from "@/styles/ace.styled";
import { Grid } from "@mui/material";
import TestimonialSlider from "./slider";

export default function Testimonials(){
    return(
        <Section>
            <H1Typo variant="h11">Testimonials</H1Typo>
            <Grid container spacing={3} mb="15px">
                <Grid size={{ xs: 12, md: 6, lg: 4}} offset={{ xs: 0, lg: 2 }}>
                    <VideoBox>
                        <iframe width="100%" height="290" src="https://www.youtube-nocookie.com/embed/i2GC0Lt7uLM?rel=0&fs=0&controls=0&modestbranding=1" allowFullScreen />
                    </VideoBox>
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 4}}>
                    <VideoBox>
                        <iframe width="100%" height="290" src="https://www.youtube-nocookie.com/embed/OC4eDGNbQ14?rel=0&fs=0&controls=0&modestbranding=1" allowFullScreen />
                    </VideoBox>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6, lg: 4}} offset={{ xs: 0, lg: 2 }}>
                    <VideoBox>
                        <iframe width="100%" height="290" src="https://www.youtube-nocookie.com/embed/KozOu6OZwRQ?rel=0&fs=0&controls=0&modestbranding=1" allowFullScreen />
                    </VideoBox>
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 4}}>
                    <VideoBox>
                        <iframe width="100%" height="290" src="https://www.youtube-nocookie.com/embed/NBkdlo4-8GY?rel=0&fs=0&controls=0&modestbranding=1" allowFullScreen />
                    </VideoBox>
                </Grid>
            </Grid>

            <TestimonialSlider />
        </Section>
    )
}
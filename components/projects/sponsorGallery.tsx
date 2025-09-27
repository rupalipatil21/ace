"use client"
import { Container, Grid } from "@mui/material";
import Image from "next/image";
import img1 from '@/public/images/projects/image-1.jpg'
import img2 from '@/public/images/projects/image-2.jpg'
import img3 from '@/public/images/projects/image-3.jpg'
import img4 from '@/public/images/projects/image-4.jpg'
import img5 from '@/public/images/projects/image-5.jpg'
import img6 from '@/public/images/projects/image-6.jpg'
import img7 from '@/public/images/projects/image-7.jpg'
import img8 from '@/public/images/projects/image-8.jpg'
import img9 from '@/public/images/projects/image-9.jpg'
import img10 from '@/public/images/projects/image-10.jpg'
import { GalleryBox } from "@/styles/common.styled";
import QuoteBox from "../common/quoteBox";
import ObservedSection from "../common/ObservedSection";

export default function SponsorGallery() {
    return(
        <>
            <ObservedSection id="home2" bg="light">
                <Container maxWidth="lg">
                    <GalleryBox>
                        <Grid container>
                            <Grid size={{sm: 12, md: 8 }}>
                                <Image src={img1} alt="Image 1" />
                            </Grid>
                            <Grid size={{sm: 12, md: 4 }}>
                                <Image src={img2} alt="Image 1" />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid size={{sm: 12, md: 6 }}>
                                <Image src={img3} alt="Image 1" />
                            </Grid>
                            <Grid size={{sm: 12, md: 6 }}>
                                <Image src={img4} alt="Image 1" />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid size={{sm: 12, md: 4 }}>
                                <Image src={img5} alt="Image 1" />
                            </Grid>
                            <Grid size={{sm: 12, md: 8 }}>
                                <Image src={img6} alt="Image 1" />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid size={{sm: 12, md: 6 }}>
                                <Image src={img7} alt="Image 1" />
                            </Grid>
                            <Grid size={{sm: 12, md: 6 }}>
                                <Image src={img8} alt="Image 1" />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid size={{sm: 12, md: 8 }}>
                                <Image src={img9} alt="Image 1" />
                            </Grid>
                            <Grid size={{sm: 12, md: 4 }}>
                                <Image src={img10} alt="Image 1" />
                            </Grid>
                        </Grid>
                    </GalleryBox>
                </Container>
            </ObservedSection>
            <QuoteBox fashionquote="true" />
        </>
    )
}
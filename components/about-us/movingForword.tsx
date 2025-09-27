"use client"
import { Grid, Typography } from "@mui/material";
import moving from '@/public/images/about/moving-forward.jpg'
import eye from '@/public/images/about/eye.png'
import Image from "next/image";
import { MovingBox, YellowBox } from "@/styles/about.styled";
import { H1Typo } from "@/styles/ace.styled";

export default function MovingForword() {
    return(
        <YellowBox>
            <Grid container>
                <Grid size={{md: 7}}>
                    <Image src={moving} alt="Moving Forword" />
                </Grid>
                <Grid size={{md: 5}}>
                    <MovingBox>
                        <Image src={eye} alt="Eye" />
                        <H1Typo variant="h11">Moving  <Typography variant="italic">Forward</Typography></H1Typo>
                        <Typography variant="visionPara" color="custom.black">As a growing organization, <b>ACE </b> is committed to protecting and building a solid foundation for underserved children and young adults through the ACE BOOK CLUB. We aim to provide a comprehensive learning environment that offers free access to books and engaging experiences through creative clubs. Currently, we serve 2,100 students across seven schools. However, with the addition of one more van, we aim to onboard at least 5,000 students this year in Maharashtra.</Typography>
                    </MovingBox>
                </Grid>
            </Grid>   
        </YellowBox>
    )
}
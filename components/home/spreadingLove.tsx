"use client"
import { Grid, Typography } from "@mui/material";
import { H1Typo, Section } from "@/styles/ace.styled";
import spreadingImg from "@/public/images/home/spreading-log-hope.jpg"
import { SpreadBox, SpreadImage } from "@/styles/home.styled";
import ObservedSection from "../common/ObservedSection";

export default function SpreadingLove(){
    return(
        <ObservedSection id="home2" bg="light">
            <Section marginBottom={{xl: "230px", desk1336: "200px"}}>
                <Grid container >
                    <Grid size={{ lg: 9 }} offset={{ lg: 1 }} position="relative">
                        <SpreadImage src={spreadingImg} alt="Spreading love & Hope" />
                        <SpreadBox>
                            <H1Typo variant="h11"> Spreading Love <Typography variant="italic">&</Typography>{" "}Hope!</H1Typo>
                            <Typography variant="quoteText" mb={2} display="block">#OURVISION</Typography>
                            <Typography variant="visionPara" mb="35px"><b>Our mission at ACE is to work with children and young adults by being enablers to help create <br /> equal opportunity through education and creativity. </b>Our primary goal is to work towards the <br /> <b>inculcation of the love of learning and the joy of discovery; </b> thereby empowering children to <br /> innovate and become life-long learners and doers.</Typography>
                            <Typography variant="visionPara">We believe in free inquiry that <b>empowers communities </b> to collaborate and translate their learning into <br /> effective action, harbouring unity and harmony. </Typography>
                        </SpreadBox>
                    </Grid>
                </Grid>
            </Section>
        </ObservedSection>
    )
}
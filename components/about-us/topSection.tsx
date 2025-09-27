"use client"
import { Grid, Typography } from "@mui/material";
import { H1Typo } from "@/styles/ace.styled";
import { OurBox, RowBox } from "@/styles/about.styled";

export default function TopSection(){
    return(
        <>
            <RowBox>
                <Grid container>
                    <Grid size={{md: 6}}>
                        <H1Typo variant="h11">  <Typography variant="italic">Our </Typography>Vision</H1Typo>
                        <Typography variant="visionPara" color="custom.black" mb="35px">Inspired by the innate nature of the spirit to view each being as <br /> equal, <b>the vision at ACE is to serve youth communities by <br />  discovering, innovating</b> and working towards <b>equal opportunities <br /> for education</b> of the spirit, mind and body, hence holistically <br /> working towards equality within society.</Typography>
                    </Grid>
                    <Grid size={{md: 6}}>
                        <OurBox>
                            <H1Typo variant="h11"> <Typography variant="italic">Our</Typography>Mission</H1Typo>
                            <Typography variant="visionPara" color="custom.black" mb="35px"><b>Our mission</b> at ACE is to work with children and young adults by being enablers <b>to help create equal opportunity through education and creativity.</b>  Our primary goal is to work towards the inculcation of the love of learning and the joy of discovery; thereby <b>empowering children to innovate and become life-long learners and doers.</b></Typography>
                            <Typography variant="visionPara" color="custom.black">We believe in free inquiry that  <b>empowers </b> communities to collaborate and translate their learning into effective action, harbouring unity and harmony.</Typography>
                        </OurBox>
                    </Grid>
                </Grid>
            </RowBox>
        </>
    )
}
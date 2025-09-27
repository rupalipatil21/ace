"use client"
import { Typography } from "@mui/material";
import { H1Typo } from "../../styles/ace.styled";
import { OutlinedButton, VisionBox } from "../../styles/home.styled";

export default function Vision(){
    return(
        <VisionBox>
            <H1Typo variant="h11"> Passion <Typography variant="italic">for</Typography>{" "}Equality</H1Typo>
            <Typography variant="quoteText" mb={2} display="block">#OURVISION</Typography>
            <Typography variant="visionPara" mb="35px">Inspired by the innate nature of the spirit to view each being as equal, <b>the vision at ACE is to serve youth <br /> communities by discovering, innovating</b> and working towards <b>equal opportunities for education</b> of the spirit, mind <br />and body, hence holistically working towards equality within society.</Typography>
            <OutlinedButton variant="btnText" href="#">READ MORE ABOUT US</OutlinedButton>
        </VisionBox>
    )
}
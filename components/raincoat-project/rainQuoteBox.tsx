"use client"
import { H1Typo } from "@/styles/ace.styled";
import { BgImageBox, } from "@/styles/common.styled";
import { Container, Typography } from "@mui/material";

export default function RainQuoteBox() {
    return(
        <BgImageBox raincoat="true">
            <Container maxWidth="lg">
                <H1Typo variant="h11" color="custom.menu">#Kids<Typography variant="italic">for</Typography>Kids</H1Typo>
                <Typography variant="aceinfoP" color="custom.menu"><b>The Raincoat Project </b>designs, develops and distributes sustainable raincoats to thousands of slum dwelling  children in India to protect them from the harsh monsoon weather.</Typography>    
            </Container>
        </BgImageBox>
    )
}
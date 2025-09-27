"use client"
import { H1Typo } from "@/styles/ace.styled";
import { BgImageBox, ContactBox } from "@/styles/common.styled";
import { Container, Typography } from "@mui/material";

export default function ReachUs(){
    return(
        <BgImageBox reach="true">
            <Container maxWidth="lg">
                <ContactBox margin="0">
                    <H1Typo variant="h11">You can <Typography variant="italic"> reach </Typography> us at</H1Typo>
                    <Typography variant="h6Name" color="custom.grey" display="block">All Care For Everyone</Typography>
                    <Typography variant="h6Name" color="custom.grey" display="block">101-102, Raheja Xion</Typography>
                    <Typography variant="h6Name" color="custom.grey" display="block">Dr. Babasaheb Ambedkar Road</Typography>
                    <Typography variant="h6Name" color="custom.grey" display="block">Byculla (East)</Typography>
                    <Typography variant="h6Name" color="custom.grey" display="block">Mumbai 400 027, India</Typography>
                    <Typography variant="h6Name" color="custom.grey" display="block">Tel: +91 (22) 71788900</Typography>
                    <Typography variant="h6Name" color="custom.grey" display="block">Email: info@allcareforeveryone.org</Typography>
                </ContactBox>
            </Container>
        </BgImageBox>
    )
}
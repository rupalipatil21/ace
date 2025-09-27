"use client"
import { VolunteerLists } from "@/lib/constant";
import { H1Typo } from "@/styles/ace.styled";
import { BgImageBox } from "@/styles/common.styled";
import { Container, Typography } from "@mui/material";
import ListDesign from "../common/listDesign";
import FormDesign from "../common/formDesign";

export default function Volunteer(){
    return(
        <BgImageBox volunteer="true">
            <Container maxWidth="lg" disableGutters>
                <H1Typo variant="h11">Volunteer <Typography variant="italic">with </Typography> us!</H1Typo>
                <Typography variant="visionPara" mb="30px">We would love to expand our community with you. Please do write in to us telling us where you would <br /> like to volunteer your time and we will be thrilled to have you on board.</Typography>

                <ListDesign lists={VolunteerLists} volunteer="true" />
                <FormDesign volunteer="true" />

            </Container>
        </BgImageBox>
    )
}
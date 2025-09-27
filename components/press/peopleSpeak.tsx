"use client"
import { H1Typo, Section } from "@/styles/ace.styled";
import { Container, Grid, Typography } from "@mui/material";
import press from '@/public/images/press/press.jpg'
import Image from "next/image";
import { CommonLink } from "@/styles/common.styled";
import ObservedSection from "../common/ObservedSection";

export default function PeopleSpeak(){
    return(
        <ObservedSection id="home3" bg="light">
            <Section bgcolor="custom.yellow" padd="55px">
                <H1Typo variant="h11" mb="0!important">People Speak</H1Typo>
            </Section>
            <Section talign="true">
                <Container maxWidth="lg">
                    <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
                        <Grid size={{xs: 12, md: 4}} offset={{ xs: 0, md: 2}}>
                            <Image src={press} alt="Press Image" />
                        </Grid>
                        <Grid size={{xs: 12, md: 5}}>
                            <H1Typo variant="h11">A Project by Children for Children</H1Typo>
                            <Typography variant="aceinfoP" mb="25px">An article about <b>The Raincoat Project </b> published in The <b>Free Press Journal </b>on the 2nd of July, 2020 by Manasi Y Mastakar.</Typography>
                            <Typography variant="aceinfoP">Click <CommonLink href="https://www.freepressjournal.in/mumbai/cyclone-nisarga-aftermath-how-these-mumbai-schoolkids-started-a-raincoat-distribution-service-for-homeless-children" target="_blank"> here </CommonLink>to read more.</Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Section>
        </ObservedSection>
    )
}
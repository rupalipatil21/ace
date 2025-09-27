"use client"
import { H1Typo, Section } from "@/styles/ace.styled";
import { Container, Typography } from "@mui/material";
import ObservedSection from "../common/ObservedSection";

export default function FashionCompassion() {
    return(
        <ObservedSection id="home1" bg="light">
            <Section>
                <Container maxWidth="lg">
                    <H1Typo variant="h11">Fashion <Typography variant="italic">with </Typography>Compassion</H1Typo>
                    <Typography variant="visionPara" mb="30px"><b>A young group of creative minds work on designing a collection of fashion merchandise each season.</b> T-shirts with liberating slogans, passionate sketches promoting freedom of expression and symbols of love and peace, are some of the key design elements on the <b>ACE collections.</b></Typography>
                    <Typography variant="visionPara" mb="30px">Merchandise varies seasonally, but some of the all time favourites that feature each season are the <b>artsy t-shirts </b> and <b>hand crafted bands, earrings and other accessories. </b> Exhibits are held and managed quarterly passionately by a young and committed team of volunteers.</Typography>
                    <Typography variant="visionPara">An annual exhibit at the Bombay International School, of baked goods and fashion merchandise is another favourite avenue to generate funds by the children.</Typography>
                </Container>
            </Section>
        </ObservedSection>
    )
}
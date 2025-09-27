"use client"
import { Typography } from "@mui/material";
import { Section } from "../../styles/ace.styled";
import ObservedSection from "../common/ObservedSection";

export default function Home(){
    return(
        <ObservedSection id="home1" bg="light">
            <Section>
                <Typography variant="para1" mb={1}>&quot;Equality is the soul of liberty; <br /> there is, in fact, no liberty without it.&quot;</Typography>
                <Typography variant="para2">FRANCES WRIGHT</Typography>
            </Section>
        </ObservedSection>
    )
}
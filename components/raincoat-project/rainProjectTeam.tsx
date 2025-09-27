"use client"

import { H1Typo } from "@/styles/ace.styled"
import { Container, Grid, Typography } from "@mui/material"
import { ProjectTeam } from "@/lib/constant"
import { TeamBox } from "@/styles/common.styled"
import ObservedSection from "../common/ObservedSection"

export default function RainProjectTeam() {
    return (
        <ObservedSection id="home4" bg="light">
            <TeamBox textAlign="center">
                <H1Typo variant="h11">Meet <Typography variant="italic">the </Typography>Raincoat Project Team!</H1Typo>
                <Typography variant="aceinfoP" marginBottom="30px">The Raincoat Project was conceptualised, designed, marketed, and funded all by a group of <br /> children from around the world who came together for this cause.</Typography>
                
                <Container maxWidth="lg" sx={{ textAlign: "left" }} >
                    <Grid container rowGap="30px" spacing={5}>
                        {
                            ProjectTeam.map((team, index)=>(
                                <Grid size={{xs: 12, md: 4}} key={index}>
                                    <Typography variant="teamName" color="custom.grey">{team.teamname}</Typography>
                                    <Typography variant="quoteName" color="custom.grey">{team.teamschool}</Typography>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </TeamBox>
        </ObservedSection>
    )
}
"use client"
import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { CollabSection } from "@/styles/collab.styled";
import { Partner } from '@/lib/constant'
import React from "react";
import ObservedSection from "../common/ObservedSection";

export default function Partners(){
    return(
        <ObservedSection id="home" bg="light">
            <CollabSection>
                <Container maxWidth={'lg'}>
                    {
                        Partner.map((row, index) => (
                            <Grid container alignItems="center" spacing={3} key={index}>
                                <Grid size={{md: 6}}>
                                    <Image src={row.img} alt="Collab" />
                                </Grid>
                                <Grid size={{md: 6}}>
                                    <Typography variant="title" mb="30px">
                                        {row.title.split('\n').map((line, index) => (
                                            <React.Fragment key={index}>
                                            {line}
                                            <br />
                                            </React.Fragment>
                                        ))}
                                    </Typography>
                                    <Typography variant="visionPara">{row.desc}</Typography>
                                </Grid>
                            </Grid>
                        ))
                    }
                </Container>
            </CollabSection>
        </ObservedSection>
    )
}
"use client"
import { H1Typo } from "@/styles/ace.styled";
import { Box, Grid, Typography } from "@mui/material";
import education from '@/public/images/home/education.png'
import raincoat from '@/public/images/home/raincoat.png'
import childrenImg from '@/public/images/home/children.jpg'
import childrenInner from '@/public/images/home/children-inner.png'
import Image from "next/image";
import { ChildImage, OutlinedButton, ProjectBox, ProjectText } from "@/styles/home.styled";
import MakeChange from "../common/makeChange";

const dynamicProject = [
    { id: 1, title: "Sponsoring Education", img: education, link: "#" },
    { id: 2, title: "The Raincoat Project", img: raincoat, link: "#" },
]

export default function OurProjects(){
    return(
        <>
            <ProjectBox>
                <H1Typo variant="h11"> <Typography variant="italic">Our</Typography> Projects</H1Typo>
                <Grid container spacing={3}>
                    {dynamicProject.map((project, index) => (
                        <Grid size={{ xs: 12, md: 6, }} key={index} position="relative">
                            <Image src={project.img} alt="Education" />
                            <ProjectText>
                                <H1Typo variant="h11" color="custom.menu">{project.title}</H1Typo>
                                <OutlinedButton variant="btnText" href={project.link}>Explore</OutlinedButton>
                            </ProjectText>
                        </Grid>
                    ))}

                </Grid>
            </ProjectBox>
            <Box position="relative">
                <Image src={childrenImg} alt="Children" />
                <ChildImage src={childrenInner} alt="Children" />
            </Box>
            <MakeChange homechange={true}  />
        </>
    )
}
"use client"
import { RaincoatBox, RainTagImage } from "@/styles/common.styled";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import raincoatinner from '@/public/images/projects/raincoat-project-inner.jpg'
import rainpartner from '@/public/images/projects/our-partners.jpg'
import raintag from '@/public/images/projects/raincoat-pro-tag.png'
import { H1Typo, RightBox } from "@/styles/ace.styled";
import ObservedSection from "../common/ObservedSection";

export default function CommonRaincoatSec({ partner }:any) {
    return(
        <ObservedSection id={ partner ? "home5" : "home1"} bg="light">
            <RaincoatBox partner={partner}>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: partner ? 5 : 6 }} offset={{ xs: 0, md: partner ? 1 : 0 }} position="relative">
                        {!partner && 
                            <RainTagImage src={raintag} alt="Raincoat Tag" />
                        }
                        <Image src={ partner ? rainpartner : raincoatinner} alt="raintcoat" />
                    </Grid>
                    <Grid size={{ sm: 12, md: partner ? 5 : 6 }}>
                        <RightBox padleft="40">
                            {
                                partner ?
                                <H1Typo variant="h11"><Typography variant="italic">Our </Typography> Partners</H1Typo>
                                : <H1Typo variant="h11">The Raincoat Project</H1Typo>
                            }
                            {
                                partner ?
                                    <>
                                        <Typography variant="visionPara"><b>ACE </b>has joined hands with the following institutions:</Typography>
                                        <Typography variant="visionPara"><b>• The Aangan Trust </b> - An NGO that builds and strengthens child protection systems to ensure that the most vulnerable children are safe, supported, in school, and assured of childhoods free from trafficking, child marriage, hazardous work, violence, and exploitation.</Typography>
                                        <Typography variant="visionPara"><b>• Samvedna </b> - An NGO working with sexual exploitation and rehabilitation of vulnerable children in Bhopal and Madhya Pradesh.</Typography>
                                        <Typography variant="visionPara"><b>• The Committed Communities Development Trust </b> - An organization addressing deprivation and marginalisation of communities and children in Mumbai’s slums.</Typography>
                                        <Typography variant="visionPara" mb={4}><b>• The Dharavi School, an initiative by the Art of Living Foundation </b> that provides an experiential environment to their students to learn the best of academics and imbibe the best of character building.</Typography>
                                        <Typography variant="visionPara">Along with our partners who support our projects, we reach thousands of children to create a difference in their life.</Typography>
                                    </>
                                :
                                <>
                                <Typography variant="aceinfoP">The Raincoat Project was started by <b>Avantika Swali.</b> On the day of the cyclone in Mumbai (3rd June 2020), it occurred to her that while we are safe in our homes, many children were miserable and scared in the rain, especially in the slums with no proper protection gear and no proper housing. Avantika really wanted to do something and that’s how the idea of making and <b>gifting joy-filled raincoats </b>came about!</Typography>
                                <Typography variant="aceinfoP">She designed some raincoats with thoughts of <b>universal love and positivity </b> for these children and for everyone! Before they knew it, a lot of her friends from <b>Bombay International School</b>as well as <b>all over the world </b> were on board with this plan and a drive was started to raise funds, to make and distribute as many raincoats as possible. <b>With a sustainable approach to design,</b> these raincoats have been made with <b>recycled polytetrafluoroethylene </b> of 200 grams per square metre.</Typography>
                                <Typography variant="aceinfoP">We have ensured that the <b>quality is exceptional </b>and the pattern is trendy, international and features slant sliding pockets to allow ease of use and to keep the water out. A cool hoodie will ensure that the head is protected and the wearer feels empowered. A range of 6 different sizes covering groups from 3 years to adult sizing is available.</Typography>
                                <Typography variant="aceinfoP">The dream is to distribute raincoats to thousands of slum children and young adults every monsoon going forward, allowing them to attend school and stay safe.</Typography>
                                </>
                            }                        
                        </RightBox>
                    </Grid>
                </Grid>
            </RaincoatBox>
        </ObservedSection>
    )
}
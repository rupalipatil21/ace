"use client"
import { H1Typo, TimelineLeft, TimelineRight } from "@/styles/ace.styled";
import { GridContainer, Image100, TimeLineImage6 } from "@/styles/common.styled";
import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import timeline1 from '@/public/images/about/timeline-1.jpg'
import timeline2 from '@/public/images/about/timeline-1-img.png'
import timeline3 from '@/public/images/about/timeline-2.jpg'
import timeline4 from '@/public/images/about/timeline-2-img.png'
import timeline5 from '@/public/images/about/timeline-3-img.png'
import timeline6 from '@/public/images/about/timeline-3-left.png'
import timeline7 from '@/public/images/about/timeline-3.png'
import timeline8 from '@/public/images/about/timeline-right-3.jpg'
import timeline9 from '@/public/images/about/timeline-2021.jpg'
import timeline10 from '@/public/images/about/timeline-2024.jpg'
import timeline11 from '@/public/images/about/timeline-2-img-mobile.png'
import timeline23 from '@/public/images/about/timeline-2023.svg'
import timeline23Right from '@/public/images/about/timeline-right-2023.jpg'
import threedot from '@/public/images/about/three-dot.png'
import fourdot from '@/public/images/about/four-dot.png'
import timeline1000 from '@/public/images/about/timeline-2022.svg'
import { AboutRow } from "@/styles/about.styled";
import ObservedSection from "../common/ObservedSection";

export default function AboutTimeline(){
    return(
        <ObservedSection id="home2" bg="light">
            <AboutRow>
                <H1Typo variant="h11">
                    A Brief Timeline <Typography component="span" variant="italic" color="custom.black"> of </Typography>{" "} ACE
                </H1Typo>
                <Box>
                    <GridContainer container gap={{ xs: 0, sm: "30px" }} imgwidth="true">
                        <Grid size={{xs: 12, sm: 5, desk1025: 4}}>
                            <Image src={timeline1} alt="" />
                        </Grid>
                        <Grid size={{xs: 12, sm: 5, desk1025: 4}}>
                            <TimelineRight pt="14px !important">
                                <Typography variant="year" color="custom.yellow">2014</Typography>
                                <Typography variant="timelineTitle">ACE is Founded</Typography>
                                <List>
                                    <ListItem>
                                        <Typography variant="quoteName">All Care for Everyone (ACE) is founded by Avantika Swali.</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="quoteName">The vision at ACE is to serve youth communities by discovering, innovating and working towards equal opportunities for education of the spirit, mind and body, hence holistically working towards equality within society.</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="quoteName">ACE sponsors the education of 2 children.</Typography>
                                    </ListItem>
                                </List>
                                <TimeLineImage6 mb="10" src={timeline2} alt="" />
                            </TimelineRight>
                            <TimelineRight mb="true">
                                <Typography variant="year" color="custom.yellow">2015</Typography>
                                <Typography variant="timelineTitle">ACE is Growing</Typography>
                                <Typography variant="quoteName">We sponsored the education of 6 children.</Typography>
                            </TimelineRight>
                        </Grid>
                    </GridContainer>

                    <GridContainer container gap={{ xs: 0, sm: "30px" }} imgwidth="true">
                        <Grid size={{xs: 12, sm: 5, desk1025: 4}}>
                            <TimelineLeft mb="25px">
                                <Typography variant="year" color="custom.yellow">2016</Typography>
                                <Typography variant="timelineTitle">ACE Collaborates</Typography>
                                <Typography variant="quoteName">ACE collaborates with Dharavi School and sponsors education of 25 children.</Typography>
                            </TimelineLeft>
                            <Image src={timeline3} alt="Timeline" />
                            
                        </Grid>
                        <Grid size={{xs: 12, sm: 5, desk1025: 4}}>
                            <TimeLineImage6 deskimg="true" src={timeline4} alt="timeline " />
                            <TimeLineImage6 src={timeline11} alt="timeline " />
                            <TimelineRight>
                                <Typography variant="year" color="custom.yellow">2017</Typography>
                                <H1Typo variant="timelineTitle">Is a Registered <br />Non-Profit </H1Typo>
                                <List>
                                    <ListItem>
                                        <Typography variant="quoteName">ACE incorporates as a registered non-profit with 80G tax benefits.</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="quoteName">ACE educates 35 children and joins hands with Gift a Smile Foundation.</Typography>
                                    </ListItem>
                                </List>
                            </TimelineRight>
                            <TimeLineImage6 img80g="true" src={timeline5} alt="" />
                        </Grid>
                    </GridContainer>

                    <GridContainer container gap={{ xs: 0, sm: "30px" }} mb="20">
                        <Grid size={{xs: 12, sm: 5, desk1025: 4}}>
                            <TimelineLeft>
                                <Typography variant="year" color="custom.yellow">2018</Typography>
                                <Typography variant="timelineTitle">Educating More…</Typography>
                                <Typography variant="quoteName">ACE educates 50 children across Dharavi School & Gift a Smile Foundation.</Typography>
                            </TimelineLeft>
                            <Image src={timeline6} alt="Timeline" />
                        </Grid>
                        <Grid size={{xs: 12, sm: 5, desk1025: 4}}>
                            <TimeLineImage6 img80desk="true" src={timeline5} alt="" />  
                            <TimelineRight position="relative">
                                <Typography variant="year" color="custom.yellow">2019</Typography>
                                <Typography variant="timelineTitle">And More!</Typography>
                                <List>
                                    <ListItem>
                                        <Typography variant="quoteName">ACE is now committed to educate 100 <br /> children a year.</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="quoteName">ACE continues partnership with Dharavi <br /> School and Gift a Smile Foundation.</Typography>
                                    </ListItem>
                                </List>
                                <Image100 src={timeline7} alt="100" />
                                <Image src={threedot} alt="Three dot" />
                            </TimelineRight>  
                        </Grid>
                    </GridContainer>

                    <GridContainer container gap={{ xs: 0, sm: "30px" }}>
                        <Grid size={{xs: 12, sm: 5, desk1025: 4}}>
                            <TimelineLeft mb100="true">
                                <Typography variant="year" color="custom.yellow">2020</Typography>
                                <H1Typo variant="timelineTitle">The Raincoat Project </H1Typo>
                                <List>
                                    <ListItem>
                                        <Typography variant="quoteName">Under the ACE umbrella, Avantika founds The Raincoat Project.</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="quoteName">The Raincoat Project is born to protect thousands of children’s safety and education across Mumbai from the harsh monsoons. Most children in slums lack raincoats or protective gear, making it difficult for them to commute to schools, leading to high dropout rates. By providing them with high-quality raincoats, they stay dry and are protected this monsoon as they move about.</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="quoteName">Along with 14 volunteers and crowdfunding, Avantika was successful in distributing 9,100 raincoats.</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="quoteName">ACE continues to sponsor over 100 children for their education and well-being.</Typography>
                                    </ListItem>
                                </List>
                            </TimelineLeft>
                            <TimelineLeft hideonmob="true">
                                <Typography variant="year" color="custom.yellow">2022</Typography>
                                <H1Typo variant="timelineTitle">Wheels On <br />The Roads! </H1Typo>
                                <List>
                                    <ListItem>
                                        <Typography variant="quoteName">The ACE BOOK CLUB onboards 4 Brihanmumbai Municipal Corporation (BMC) schools with 1000+ students.</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="quoteName">The Raincoat Project distributes 15,468 raincoats.</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="quoteName">ACE continues to sponsor over 200 children for their education and well-being.</Typography>
                                    </ListItem>
                                </List>
                                <Image src={timeline1000} alt="1000 +" />
                            </TimelineLeft>
                        </Grid>
                        <Grid size={{xs: 12, sm: 5, desk1025: 4}}>
                            <Image  src={timeline8} alt="Timeline"/>
                            <TimelineLeft mt={4} mb={"4"}>
                                <Typography variant="year" color="custom.yellow">2021</Typography>
                                <H1Typo variant="timelineTitle">A New Initiative - <br />ACE Book Club </H1Typo>
                                <List>
                                    <ListItem>
                                        <Typography variant="quoteName">Another addition to the ACE umbrella - Ace book club aims to provide free access to cultural and educational experiences to underserved children and youth communities by bringing a library of preloved books to them, thus helping to expand minds, build community, and inspire curiosity through the joy of discovery.</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="quoteName">The mobile library van is ready through fundraising.</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="quoteName">The Raincoat Project distributes 12,300 raincoats.</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="quoteName">ACE continues to sponsor over 200 children for their education and well-being.</Typography>
                                    </ListItem>
                                </List>
                                <TimeLineImage6 mb="40" src={timeline9} alt="Timeline" />
                            </TimelineLeft>
                        </Grid>
                    </GridContainer>

                    <GridContainer container gap="30px">
                        <Grid size={{xs: 12, sm: 5, desk1025: 4}}>
                            <TimelineLeft hideondesk="true">
                                <Typography variant="year" color="custom.yellow">2022</Typography>
                                <H1Typo variant="timelineTitle">Wheels On <br />The Roads! </H1Typo>
                                <List>
                                    <ListItem>
                                        <Typography variant="quoteName">The ACE BOOK CLUB onboards 4 Brihanmumbai Municipal Corporation (BMC) schools with 1000+ students.</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="quoteName">The Raincoat Project distributes 15,468 raincoats.</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="quoteName">ACE continues to sponsor over 200 children for their education and well-being.</Typography>
                                    </ListItem>
                                </List>
                                <Image src={timeline1000} alt="1000 +" />
                            </TimelineLeft>
                            <TimelineLeft display={{ xs: "block", sm: "none" }} >
                                <Typography variant="year" color="custom.yellow">2023</Typography>
                                <H1Typo variant="timelineTitle">ACE Book Club Onboards Schools </H1Typo>
                                <List>
                                    <ListItem>
                                        <Typography variant="quoteName">The ACE BOOK CLUB serves 7 Brihanmumbai Municipal Corporation (BMC) schools with 2,100 students every week.</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="quoteName">The Raincoat Project distributes 7,132 raincoats.</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="quoteName">ACE continues to sponsor over 200 children for their education and well-being.</Typography>
                                    </ListItem>
                                </List>
                                <Image src={timeline23} alt="timeline 2023" />
                            </TimelineLeft>
                            <TimelineRight pt="0 !important" nobordermob="true">
                                <Box mt={3} mb={1}>
                                    <TimeLineImage6 img80desk="true" src={fourdot} alt="Four dot"/>
                                </Box>
                                <TimeLineImage6 ml="auto" src={timeline10} alt="Timeline 2024"/>
                            </TimelineRight>
                            <TimelineRight noborder="true">
                                <Typography variant="year" color="custom.yellow">2024</Typography>
                                <H1Typo variant="timelineTitle">Creative Club </H1Typo>
                                <Typography variant="quoteName">While serving 7 schools, the ACE BOOK CLUB organizes creative activities that focus on art and craft, storytelling, origami, Rubik’s cube, dance & drama, and chess club.</Typography>
                            </TimelineRight>
                        </Grid>
                        <Grid size={{xs: 12, sm: 5, desk1025: 4}}>
                            <TimelineLeft mb={"4"} hideonmob="true">
                                <Typography variant="year" color="custom.yellow">2023</Typography>
                                <H1Typo variant="timelineTitle">ACE Book Club Onboards Schools </H1Typo>
                                <List>
                                    <ListItem>
                                        <Typography variant="quoteName">The ACE BOOK CLUB serves 7 Brihanmumbai Municipal Corporation (BMC) schools with 2,100 students every week.</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="quoteName">The Raincoat Project distributes 7,132 raincoats.</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="quoteName">ACE continues to sponsor over 200 children for their education and well-being.</Typography>
                                    </ListItem>
                                </List>
                                <TimeLineImage6 mb="40" src={timeline23} alt="timeline 2023" />
                            </TimelineLeft>
                            <TimelineLeft>
                                <Image src={timeline23Right} alt="timeline 2023" />
                            </TimelineLeft>
                        </Grid>
                    </GridContainer>
                </Box>
            </AboutRow>
        </ObservedSection>
    )
}
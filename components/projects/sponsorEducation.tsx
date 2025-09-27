"use client"
import { EducationBox, SponsorRow } from "@/styles/common.styled";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import sponsorEdu from '@/public/images/projects/sponsor-education.jpg'
import { H1Typo } from "@/styles/ace.styled";
import QuoteBox from "../common/quoteBox";
import ObservedSection from "../common/ObservedSection";

export default function SponsorEducation() {
    return(
        <ObservedSection id="home1" bg="light">
            <SponsorRow>
                <Grid container>
                    <Grid size={{ sm: 12, md: 10 }} offset={{ sm: 0, md: 1}}>
                        <Image src={sponsorEdu} alt="" />
                        <EducationBox >
                            <H1Typo variant="h11" color="custom.menu">Sponsoring Education</H1Typo>
                            <Typography variant="visionPara" color="custom.menu" mb="30px">
                                A holistic education is our civilizations’ greatest leveller. It has the power to bring peace to the world and alleviate poverty. At <b>Ace,</b> we aspire that each child in the world has access to a loving education, one that allows them to reach their full potential. With the right education, we can together create a sustainable world of equal opportunities and empowered individuals. Since its inception in 2014, <b>Ace </b> has sponsored the education of over 200 children through holistic leaders in the field like the <b>has sponsored the education of over 200 children through holistic leaders in the field like the </b> and the <b>Gift a Smile Foundation.</b>
                            </Typography>
                            <Typography variant="visionPara" color="custom.menu">
                                Besides raising funds to sponsor education, our enthusiastic team of volunteers enjoys enhancing education through regular immersive visits to these students, actively volunteering in supplementary activities like reading, mathematics and fellowship. These small but meaningful acts harbour confidence and interpersonal skills in both the students that are sponsored and our student volunteers, creating a strong foundation of human values and community.
                            </Typography>
                        </EducationBox>
                    </Grid>
                </Grid>
            </SponsorRow>
            <QuoteBox sponsorQuote="true" />
        </ObservedSection>
    )
}
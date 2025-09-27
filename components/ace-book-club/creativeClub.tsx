"use client"
import { Club, H1Typo, PartnerImage, Section, VideoBox } from "@/styles/ace.styled";
import { Typography, Container } from "@mui/material";
import partner1 from '@/public/images/aceBookClub/partner1.svg'
import partner2 from '@/public/images/aceBookClub/partner2.png'
import partner3 from '@/public/images/aceBookClub/partner3.png'
import partner4 from '@/public/images/aceBookClub/partner4.svg'
import { ClubLists } from '@/lib/constant'
import ListDesign from "../common/listDesign";

export default function CreativeClub() {
    return(
        <>
        <Club sx={{ textAlign: 'center' }}>
            <H1Typo variant="h11" ><Typography component='span' variant="italic">Creative  </Typography>Club</H1Typo>
            <Typography variant="aceinfoP" >Our library along with being a province of learning and enlightenment, will be going a step further : <br />In addition to providing information, access to knowledge, community resources, and (of course) story time for <br />kids, we will also be engaging in supporting learning — especially in subjects like English and Math for any <br />students who would like that reinforcement. </Typography>
            <Typography variant="aceinfoP">Through our central idea of children for children, the Ace Book Club will host several creative clubs :</Typography>

            <ListDesign lists={ClubLists} />

            <VideoBox>
                <iframe width="100%" height="545" src="https://www.youtube-nocookie.com/embed/oANGUdo--Mo?rel=0&fs=0&controls=0&modestbranding=1" allowFullScreen />
            </VideoBox>
        </Club>
        <Section>
            <Container maxWidth="md">
                <H1Typo variant="h11" ><Typography component='span' variant="italic">Our </Typography>Collaborators</H1Typo>
                <Typography variant="aceinfoP" >ACE is committed to working collectively with other organizations to help reduce inequality and provide fair opportunity. In collaboration with our partners, we are working to improve the lives of the children in India by addressing challenges related to education, health and inclusion.</Typography>
                <Typography variant="aceinfoP" marginTop={{xs: "0", md: "40px"}}>ACE is humbled to have partnered with the following inspiring institutions:</Typography>
                <PartnerImage src={partner1} alt="Partner 1" />
                <PartnerImage src={partner2} alt="Partner 2" width="103" height="103" />
                <PartnerImage src={partner3} alt="Partner 3" width="103" />
                <PartnerImage src={partner4} alt="Partner 4" />
            </Container>
        </Section>
        </>
    )
}
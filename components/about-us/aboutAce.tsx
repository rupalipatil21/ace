"use client"
import { AboutBox, AboutTitle } from "@/styles/about.styled";
import { H1Typo } from "@/styles/ace.styled";
import { Container, Typography } from "@mui/material";
import logoace from '@/public/images/about/logo.png'
import Image from "next/image";
import ObservedSection from "../common/ObservedSection";

export default function AboutAce(){
    return(
        <ObservedSection id="home2" bg="light">
            <AboutBox>
                <Container maxWidth={'xl'}>
                    <H1Typo variant="h11" mb="0 !important"> 
                        <AboutTitle flexDirection="row" alignItems="end" justifyContent="center">
                            <Typography variant="italic">About</Typography>{" "}
                            <Image src={logoace} alt="ACE logo" /> 
                        </AboutTitle>   
                    </H1Typo>
                    <Typography variant="quoteText">ALL CARE FOR EVERYONE</Typography>

                    <Typography variant="visionPara" color="custom.black" mb="30px">Education is a fundamental right for every child, yet many children don’t have this opportunity.  <b>ACE  </b> is a Non-Profit Organisation born from <b>a passion for equality.</b> Founded by Avantika Swali when she was 7 years old, ACE is committed to providing the opportunity of a loving education in a holistic environment so every child has the chance to reach his full inborn potential.</Typography>
                    
                    <Typography variant="visionPara" color="custom.black" mb="30px"><b>ACE stands for ‘All Care for Everyone’  </b> and our goal is to serve communities in a spirit of inclusion and human welfare: to transmit hope, love, joy, equality and belonging. Together, we seek to be catalysts of universal love.</Typography>
                    
                    <Typography variant="visionPara" color="custom.black">An organisation primarily run by children(11-17 years of age), <b>ACE raises funds, by hosting sales of sustainable fashion merchandise and other fund raising initiatives, </b>  all proceeds of which go towards children’s education and welfare. ACE collaborates with several Non Profit Organisations like the <b>Dharavi School</b> in Mumbai and the <b>Gift a Smile Foundation,</b> and has sponsored the education of over 200 children to date.</Typography>
                </Container>
            </AboutBox>
        </ObservedSection>
    )
}
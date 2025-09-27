"use client"
import { Container, Typography } from "@mui/material";
import Image from "next/image";
import coats from '@/public/images/projects/coats.png'
import { ImpactBox, RaincoatBox } from "@/styles/common.styled";
import { H1Typo } from "@/styles/ace.styled";
import ObservedSection from "../common/ObservedSection";

export default function RaincoatImapct() {
    return(
        <ObservedSection id="home3" bg="light">
            <RaincoatBox padd="30px 0 80px">
                <Container maxWidth="lg">
                    <Image src={coats} alt="cots" />
                    <ImpactBox>
                        <H1Typo variant="h11">Our Impact</H1Typo>
                        <Typography variant="quoteText">#THERAINCOATPROJECT</Typography>
                        <Typography variant="h3">44000 Raincoats Distributed</Typography>
                        <Typography variant="aceinfoP" marginBottom="30px">While the monsoons in India are a blessing for our agricultural sector, research shows that they impede education. Most children living in slums do not have raincoats or protective gear, making it difficult for them to commute to school during the monsoons, leading to them staying at home for a significant part of these four months. This also results in a high percentage of school dropouts during this period.</Typography>
                        <Typography variant="aceinfoP">To spread smiles and ensure safety during the monsoons, ACE raised funds, and manufactured, and distributed 44,000 high-quality raincoats to over 100 slum areas across Maharashtra, Bhopal, and Madhya Pradesh over three years, starting in 2020.</Typography>
                    </ImpactBox> 
                </Container>
            </RaincoatBox >  
        </ObservedSection>  
    )
}
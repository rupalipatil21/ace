"use client"
import { AceInfo, H1Typo } from "@/styles/ace.styled";
import { Container, Typography } from "@mui/material";

export default function GreySection({collabs}: any) {
    return(
        <>
        
            <AceInfo sx={{ textAlign: "center" }}>
                <Container maxWidth={'md'} disableGutters>
                { !collabs &&
                    <Typography variant="aceinfoP" component="p">
                        In 2017, nearly three-quarters of 10-year-olds in the country could not perform division, and nearly <br /> 30% of 10 to 14-year-olds were reading below their age level.
                    </Typography>
                }
                <H1Typo variant="h11">
                <Typography variant="italic">
                    { collabs ? "Our" : "What" }
                </Typography>{" "}
                    { collabs ? "Collaborators" : "is The ACE Book Club?" }
                </H1Typo>
                {
                    collabs ?
                    <>
                    <Typography variant="aceinfoP" component="p">
                        <b>ACE  </b>is committed to working collectively with other organizations to help reduce inequality and provide fair opportunity. In collaboration with our partners, we are working to improve the lives of the children in India by addressing challenges related to education, health and inclusion.
                    </Typography>
                    <Typography variant="aceinfoP" component="p">
                        ACE is humbled to have partnered with the following inspiring institutions:
                    </Typography>
                    </> : 

                    <>
                    <Typography variant="aceinfoP" component="p">
                        Inspired by the innate nature of the spirit to view each being as equal, the vision at ACE is to serve youth communities
                        <br /> by discovering, innovating, and working towards equal opportunities for education of the spirit, mind, and body, hence
                        <br /> holistically working towards equality within society.
                    </Typography>
                    <Typography variant="aceinfoP" component="p" >
                        hrough the ACE Book Club, we aim to address the needs of children by providing a library of pre-loved books and <br /> experiences, helping to expand minds, build community, and inspire curiosity through the joy of discovery. We strive to
                        <br /> promote a lifelong love of reading and learning.
                    </Typography>
                    </>
                }
                
                </Container>
            </AceInfo>
        </>
    )
}
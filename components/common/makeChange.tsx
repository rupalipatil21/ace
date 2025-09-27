import { Section, H1Typo } from "@/styles/ace.styled";
import { ChangeImg, OutlinedBlack } from "@/styles/home.styled";
import { Link, Typography } from "@mui/material";
import headingImg from '@/public/images/home/heading.jpg'
import ObservedSection from "./ObservedSection";

// interface Props {
//     homechange?: boolean
// }
export default function MakeChange({homechange}:any){
    return(
        <ObservedSection id="home" bg="light">
            <Section>
                <H1Typo variant="h11" position="relative" display="inline-block">
                    Make <Typography variant="italic">a</Typography> Change
                    { homechange && <ChangeImg src={headingImg} alt="Change Image" />  }
                </H1Typo>
                <Typography variant="visionPara" mb="35px">A small change holds the power to cause a ripple effect that can impact the future. <br />Help create an impact by contributing to our cause and changing the world for the better.</Typography>
                {
                    homechange 
                    ? <OutlinedBlack variant="btnText" href="#">Donate</OutlinedBlack>
                    :  <Link variant="donateText" color="custom.yellow" >Donate</Link> 
                }
                
                
            </Section>
        </ObservedSection>
    )
}
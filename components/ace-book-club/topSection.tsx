"use client"
import { Box, Typography } from "@mui/material";
import { Section, H1Typo } from "../../styles/ace.styled";
import { theme } from "../../styles/theme";
import SubMenus from "./SubMenus";
import Image from "next/image";
import visionImg from "../../public/images/aceBookClub/vision.jpg";
import vanImg from "../../public/images/aceBookClub/van.svg";
import GreySection from "../common/greySection";

export default function TopSection() {
  return (
    <Box paddingTop={{ xs: "71px", md: 0 }}>
      <video autoPlay loop muted style={{ width: "1005" }}>
        <source src="video/ACE-intro.mp4" type="video/mp4" />
      </video>
      <SubMenus />
      <Section>
        <H1Typo variant="h11" display="block" color={theme.palette.custom?.black} >
          <Typography variant="italic">Library On Wheels</Typography>
        </H1Typo>
        <Image src={vanImg} alt="Van" />
        <Typography component="p" variant="quoteText" mb={2}>
          “There is more treasure in books than in all <br /> the pirate’s loot on Treasure Island.”
        </Typography>
        <Typography variant="h6NameItalic" color={theme.palette.custom?.grey}>
          Walt Disney
        </Typography>
      </Section>
      <GreySection />
      <Section position="relative" cwidth="true" sx={{ 
            '& img': {
                position: "relative !important"
            }
        }}>
        <Image fill src={visionImg} alt="vission" />
        <H1Typo variant="h11">
          <Typography component="span" variant="italic" color="custom.black"> Our </Typography>{" "} Mission & Vision
        </H1Typo>
        <Typography variant="aceinfoP" component="p">
          Our mission is to provide free access to cultural and educational experiences to our underserved children and youth communities by bringing a <br /> library of preloved books to them, thus helping to expand minds, build community, and inspire curiosity through the joy of discovery.
        </Typography>
        <Typography variant="aceinfoP" component="p">
          Our vision is to create a community of children for children where creative expressions, innovation, and excellence <br />
          can be nurtured, recognized, and encouraged through a holistic approach.
        </Typography>
      </Section>
    </Box>
  );
}

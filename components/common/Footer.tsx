"use client";

import { Box, Grid, List, Stack, Typography } from "@mui/material";
import { FooterListItem, StyledFooter } from "../../styles/ace.styled";
import Link from "next/link";
import Image from "next/image";
import instagram from '../../public/images/instagram.png'
import email from '../../public/images/email.png'
import { FooterLinks } from '@/lib/constant'
import { InstaBox } from "@/styles/common.styled";


export default function Footer() {
  return (
    <StyledFooter>
        <Grid container spacing={5} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
                <InstaBox flexDirection={{desk1025:"row"}} >
                    <Box>
                        <Link href="https://www.instagram.com/allcareforeveryone/?hl=en" target="_blank">
                            <Image src={instagram} alt="Instagram" />
                        </Link>
                        <Typography variant="mail">FOLLOW US <br /> FOR UPDATES</Typography>
                    </Box>
                    <Box display="inline-block">
                        <Image src={email} alt="Mail" />
                        <Link href='mailto:info@allcareforeveryone.org'  target="_blank"><Typography variant="mail">info@allcareforeveryone.org</Typography></Link>
                    </Box>
                </InstaBox>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Stack>
                    <List>
                        {
                            FooterLinks.map((links, index) => (
                                <FooterListItem disablePadding key={index}>
                                    <Link href={links.link}>{links.name}</Link>
                                </FooterListItem>
                            ))
                        }
                    </List>
                </Stack>
            </Grid>
        </Grid>
    </StyledFooter>
  );
}

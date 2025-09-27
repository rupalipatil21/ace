import { Container } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface BannerProps {
  bannerImg: StaticImageData;
  alt: string;
}

export default function Banner({bannerImg, alt}: BannerProps){
    return(
        <Container maxWidth={false} disableGutters sx={{paddingTop: {xs: "71px", md: "0" }, '& img': { width: "100%" }}}>
            <Image src={bannerImg} alt={alt} />
        </Container>
    )
}
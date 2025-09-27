import styled from "@emotion/styled";
import { Box, Button, Link } from "@mui/material";
import { theme } from "./theme";
import visionForEquility from '../public/images/home/passion-for-equality.jpg'
import Image from "next/image";
import Slider from "react-slick";
import leftarrow from '@/public/images/ChevronLeft.png'
import rightarrow from '@/public/images/ChevronRight.png'

interface Props {
    homeslider?: boolean
    testimonialslide?: string
}

export const DotBox = styled(Box)({
    bottom: 47,
    '& ul li': {
        backgroundColor: 'transparent',
        border: "1px solid",
        borderColor: theme.palette.custom?.menu,
        borderRadius: "50%",
        marginRight: 15,
        marginLeft: 0,
        height: 17,
        width: 17,
        '& button:before, .slick-active button:before':{
            color: 'transparent !important'
        },
        '&.slick-active':{
            backgroundColor: theme.palette.custom?.menu
        },
        '&:last-child':{
            marginRight: 0,
        }
    }
})

export const VisionBox = styled(Box)({
    backgroundImage: `url(${visionForEquility.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    textAlign: "center",
    padding: "80px 80px",
    color: theme.palette.custom?.menu,
    '& .MuiTypography-h11': {
        lineHeight: "70px",
        marginBottom: 5,
    },
    [theme.breakpoints.down("desk1025")]: {
        '& br': {
        display: "none",
        }
    },
    [theme.breakpoints.down("sm")]: {
        padding: "30px 20px"
    }
})

const outlined = {
    padding: "11px 30px",
    border: "2px solid",
    borderColor: theme.palette.custom?.menu,
    borderRadius: "55px",
    color: theme.palette.custom?.menu,
    transition: "0.5s ease", 
    textDecoration: "none",
    '&:hover': {
        backgroundColor: theme.palette.custom?.yellow,
        borderColor: theme.palette.custom?.yellow,
        color: theme.palette.custom?.black,
    }
}

export const OutlinedButton = styled(Link)({
      ...outlined,
})

export const OutlinedBlack = styled(Link)({
    ...outlined,
    color: theme.palette.custom?.black,
    borderColor: theme.palette.custom?.black,
    '&:hover': {
        backgroundColor: theme.palette.custom?.black,
        borderColor: theme.palette.custom?.black,
        color: theme.palette.custom?.menu,
    }
})

export const SpreadImage = styled(Image)({
    width: "93% !important",
    marginLeft: 40,
    marginBottom: "0 !important",
    [theme.breakpoints.down("lg")]: {
        marginLeft: 0,
        width: "100% !important"
    }
})

export const SpreadBox = styled(Box)({
    position: "absolute",
    right: "-12%",
    textAlign: "center",
    // bottom: "-36%",
    // marginBottom: "75px",
    top: "70%",
    padding: "50px 50px",
    backgroundColor: theme.palette.custom?.yellow,
    width: "auto",
    [theme.breakpoints.down("desk1025")]: {
      position: "unset",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "30px 20px"
    },
})

export const ProjectText = styled(Box)({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    textAlign: "center",
})

export const ProjectBox = styled(Box)({
    padding: "0 75px 80px",
    textAlign: "center",
    [theme.breakpoints.down("desk1025")]:{
        padding: "0 50px 80px",
    },
    [theme.breakpoints.down("sm")]:{
        padding: "0 20px 30px",
    }
})

export const ChildImage = styled(Image)({
    position: "absolute",
    top: 0,
    left: 0,
})

export const ChangeImg = styled(Image)({
    position: "absolute",
    bottom: "-65px",
    left: "53%",
    width: "revert-layer !important"
})

export const SliderBox = styled(Box)<Props>(({ homeslider, testimonialslide })=>({
    overflow: "hidden",
    width: "100%",
    ' img': {
        width: "100%",
    },
    ' .slick-slider': {
        width: homeslider ? "100%" : "87%",
        margin: "auto"
    },
    ' .slick-arrow': {
        zIndex: 2,
        top: '50%',
        transform: 'translateY(-50%)',
    },
    ' .slick-prev, .slick-next': {
        '&::before': {
            color: theme.palette.text.primary,
            height: "20px",
            width: "20px",
            display: "block",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            content: '""'
        },
    },
    '& .slick-prev':{
        left: "-50px",
        '&::before': {
            backgroundImage: `url(${leftarrow.src})`,
        }
    },
    '& .slick-next':{
        right: "-50px",
        '&::before': {
            backgroundImage: `url(${rightarrow.src})`,
        }
    },
    [theme.breakpoints.down("sm")]:{
        padding: testimonialslide ? "30px 0" : "71px 0 0",
        "& img":{
            marginBottom: 0,
        },
        ' .slick-slider': {
            width: homeslider ? "100%" : "77%",
        },
        '& .slick-next':{
            right: "-35px"
        },
        '& .slick-prev':{
            left: "-35px"
        },
    }
}))

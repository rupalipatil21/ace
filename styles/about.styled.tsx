import { Box, Stack, styled } from "@mui/material";
import dotImg from '@/public/images/about/circle-repeat.png'

export const AboutRow = styled(Box)(({ theme })=>({
    padding: "80px 0",
    textAlign: "center",
    '& .MuiGrid-container:first-of-type .MuiGrid-root:first-of-type img': {
      marginTop: "40px",
    },
    [theme.breakpoints.down('sm')]:{
        padding: "30px 35px",
        '& .MuiGrid-container:first-of-type .MuiGrid-root:first-of-type img': {
            marginTop: "0px",
        },
    }
}))

export const RowBox = styled(Box)(({theme})=>({
    padding: "50px 15px 70px",
    textAlign: "center",
    backgroundColor: theme.palette.custom?.lightBlue,
    [theme.breakpoints.down('md')]:{
        '& br': {
            display: "none",
        },
        padding: "30px 20px",
    }
}))

export const OurBox = styled(Box)(({theme})=>({
    backgroundImage: `url(${dotImg.src})`,
    height: "100%",
    backgroundRepeat: "repeat-y",
    '& .MuiTypography-visionPara':{
        maxWidth: "77%",
        marginLeft: "auto",
        marginRight: "auto",    
    },
    [theme.breakpoints.down('md')]:{
        backgroundImage: "none",
        '& .MuiTypography-visionPara':{
            maxWidth: "100%"
        }
    }
}))    

export const AboutBox = styled(Box)(({ theme }) => ({
    padding: "45px 0 80px",
    textAlign: "center",
    '& .MuiTypography-quoteText': {
        display: "block",
        marginTop: 8,
        marginBottom: 40
    },
    [theme.breakpoints.down('sm')]: {
        padding: "30px 20px"
    },
}))

export const AboutTitle = styled(Stack)(({ theme })=>({
    flexDirection: "row",
    alignItems: "end",
    justifyContent: "center",
    '& img': {
        marginLeft: "8px",
        marginBottom: "8px",
    },
    [theme.breakpoints.down('sm')]: {
        '& img': {
            width: "80px"
        }
    },
}))

export const MovingBox = styled(Box)(({theme})=>({
    padding: "70px 0px 70px 100px",
    maxWidth: "85%",
    '& img': {
        height: "100%",
        marginBottom: "30px",
    },
    [theme.breakpoints.down('mediumDesk')]: {
        padding: "30px 0px 30px 50px"
    },
    [theme.breakpoints.down('desk1280')]: {
        maxWidth: "100%",
    },
    [theme.breakpoints.down('desk1025')]: {
        padding: "5px 0px 5px 30px"
    },
    [theme.breakpoints.down('sm')]: {
        padding: "30px 35px"
    },
}))

export const YellowBox = styled(Box)(({ theme })=>({
    backgroundColor: theme.palette.custom?.yellow,
    '& img': {
        height: "100%"
    }
}))
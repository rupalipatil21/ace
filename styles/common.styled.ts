import styled from "@emotion/styled";
import { Box, Button, Drawer, Grid, Link, List, Menu, Stack, TextField } from "@mui/material";
import { theme } from "./theme";
import Image from "next/image";
import dropdownImg from '@/public/images/dropdown-background.png'
import raincoatimg from '@/public/images/projects/kids-for.jpg'
import bannerImg from '@/public/images/contact/banner-contact.jpg'
import volunteerBg from '@/public/images/contact/believe-white.png'
import reachImg from '@/public/images/contact/reach-us.jpg'

interface Props {
  stickyheader?: string;
  mb?: string
  imgwidth?: string
  deskimg?: string
  img80g?: string
  img80desk?: string
  mb10?: string
  ml?: string
  padd?: string
  partner?: string
  margin?: string
  volunteer?: string
  contactbanner?: string
  raincoat?: string
  reach?: string
}

export const Acenavbarbox = styled(Box)<Props>(({ theme, stickyheader }:any) => ({
  display: "flex",
  flexGrow: 1,
  justifyContent: "end",
  marginTop: stickyheader ? 0 : 32,
  marginRight: 35,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  '& .MuiButtonBase-root':{
    lineHeight: stickyheader ? "125px": "85px",
  },
  '& .MuiButtonBase-root.active': {
    fontWeight: 700,
    color: theme.palette.custom?.yellow
  },
  '& MuiButtonBase-root.active:hover': {
    color: theme.palette.custom?.black,
  },
  '& .MuiButton-root:last-child': {
    color: theme.palette.custom?.yellow +`!important`,
  },
    [theme.breakpoints.down('xl')]:{
        lineHeight: "90px"
    },
}));

export const StyledDrawer = styled(Drawer)({
    top: 71,
    zIndex: "99",
    '& .MuiDrawer-paper':{
        top: 71,
    }
})

export const MobList = styled(List)(({ theme }:any) => ({
    padding: 15,
    height: "50vh",
    '& .MuiListItem-root:last-child a': {
        color: theme.palette.custom?.yellow +`!important`,
    },
    '& .MuiListItem-root a.active': {
        fontWeight: 700,
        color: theme.palette.custom?.yellow
    },
    
}))

export const InstaBox = styled(Stack)(({ theme }: any) => ({
    justifyContent: "space-between",
    [theme.breakpoints.down("desk1025")]: {
        gap: "30px"
    },
    
}))

export const ShareInstaBox = styled(Box)({
    position: "fixed",
    left: "75px",
    bottom: "65px",
    zIndex: 9,
    writingMode: "sideways-lr",
    '& .MuiTypography-shareText': {
        marginTop: 30,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
})

export const GridContainer = styled(Grid)<Props>(({mb, imgwidth})=>({
    justifyContent: "center",
    '& .MuiGrid-root:nth-of-type(2) img': {
      marginBottom: mb ? mb+`px` : undefined
    },
    '& .MuiGrid-root:first-of-type img': {
      width: imgwidth ? "100%" : undefined
    },
    [theme.breakpoints.down("sm")]: {
      '& .MuiGrid-root:nth-of-type(2) img': {
        marginBottom: mb ? `0px` : undefined
      },
    }
}))

export const TimeLineCommon = styled(Box)({
    borderTop: "3px solid",
    borderColor: theme.palette.custom?.yellow,
    textAlign: "left",
    paddingTop: "40px",
    '& .MuiGrid-container:first-of-type .MuiGrid-root:first-of-type img': {
      marginTop: "40px"
    }
})

export const TimeLineImage6 = styled(Image)<Props>(({ deskimg, img80g, img80desk, mb, ml })=>({
  margin: img80g || img80desk || ml ? undefined :"-12px 0 10px 0px",
  marginBottom: mb ? mb+`px` : "10px" ,
  marginLeft: ml ? ml : undefined ,
  display: deskimg || img80desk || mb || ml ? undefined : "none",
  [theme.breakpoints.down("sm")]: {
    display: deskimg || img80desk ? "none" : "block",
    marginBottom: mb ? 0 : "10px" ,
    width: ml ? "100%" : undefined, 
  },
}))

export const Image100 = styled(Image)({
  position: "absolute",
  right: "0",
  top: "19%",
  [theme.breakpoints.down("sm")]: {
    right: "-30px",
    top: "18px",
    width: "115px",
  }
})

export const StyledMenu = styled(Menu)(({ theme }:any) => ({
  '& .MuiPaper-root':{
    borderRadius: 0,
    backgroundColor: "transparent",
    backgroundImage: `url(${dropdownImg.src})`,
    backgroundRepeat: "repeat",
    padding: "19px 0px 19px 45px",
    width: "325px",
    '& ul': {
      paddingRight: 0,
      paddingTop: 0,
    },
    '& ul li': {
      padding: 0,
      lineHeight: "28px",
      marginBottom: "18px",
      '& .MuiTypography-root': {
        fontStyle: "normal",
        fontWeight: 600,
      },
      '&.Mui-focusVisible':{
        backgroundColor: "transparent"
      },
      '&:hover':{
        backgroundColor: "transparent"
      }
    },
    '& ul li:last-of-type': {
      marginBottom: 0
    },
    '& ul li:hover:before': {
      verticalAlign: "middle",
      content: '"\\2022"',
      // position: 'absolute',
      left: "-20px",
      fontSize: "33px",
      top: "1px",
      color: theme.palette.custom?.yellow
    },
  },
}))

export const SponsorRow = styled(Box)({
  padding: "80px 0 0",
  [theme.breakpoints.down('sm')]:{
    padding: "30px 20px"
  }
  // position: "relative",
})

export const EducationBox = styled(Box)({
  backgroundColor: theme.palette.custom?.blue,
  width: "calc(100% - 19%)",
  margin: "-40px auto 0",
  zIndex: 1,
  position: 'relative',
  textAlign: 'center',
  padding: "45px  55px 55px",
  [theme.breakpoints.down('sm')]:{
    padding: "30px 20px",
    width: "100%",
    marginTop: 0,
  }
})

export const GalleryBox = styled(Box)({
  '& .MuiGrid-container .MuiGrid-root': {
    marginBottom: 30,
  },
  '& .MuiGrid-container:last-of-type': {
    marginBottom: 0,
  },
  '& .MuiGrid-container .MuiGrid-root:first-of-type':{
    paddingRight: 15,
  },
  '& .MuiGrid-container .MuiGrid-root:nth-of-type(2)':{
    paddingLeft: 15,
  },
  [theme.breakpoints.down('sm')]:{
    '& .MuiGrid-container .MuiGrid-root:first-of-type':{
      paddingRight: 0,
    },
    '& .MuiGrid-container .MuiGrid-root:nth-of-type(2)':{
      paddingLeft: 0,
    },
    padding: "0 20px"
  }
})

export const RaincoatBox = styled(Box)<Props>(({ padd, partner })=>({
  padding: padd ? padd : partner ? "80px 0 40px" : "80px 150px",
  textAlign: padd ? "center" : undefined,
  [theme.breakpoints.down('mediumDesk')]: {
    padding: padd ? padd : partner ? "80px 0 40px" : "80px 90px"
  },
   [theme.breakpoints.down('sm')]: {
    padding: "30px 20px"
   }
}))

export const RightBox = styled(Box)({
  paddingRight: 40,
  [theme.breakpoints.down('mediumDesk')]: {
    // padding: "80px 90px"
  }
})

export const RainTagImage = styled(Image)({
  position: "absolute",
  top: "-80px",
  left: "-115px",
  [theme.breakpoints.down('sm')]: {
    width: "100px",
    left: "-32px",
    top: "-36px",
  }
})

export const ImpactBox = styled(Box)({
  padding: "60px 75px",
  backgroundColor: theme.palette.custom?.yellow09,
  margin: "0px 135px 0px 50px",
  '& .MuiTypography-h11': {
    lineHeight: "50px",
    marginBottom: 15,
  },
  '& .MuiTypography-h3':{
    marginTop: 25,
    marginBottom: 25,
  },
  [theme.breakpoints.down('sm')]: {
    margin: 0,
    padding: "30px 20px",
    '& .MuiTypography-h11': {
      lineHeight: "33px"
    },
    '& .MuiTypography-quoteText': {
      fontSize: 18
    }
  }
})

export const TeamBox = styled(Box)({
  textAlign: 'center',
  [theme.breakpoints.down('sm')]:{
    padding: "30px 25px",
    '& .MuiTypography-aceinfoP br': {
      display: "none",
    },
  }
})

export const ContactBox = styled(Box)<Props>(({ margin })=>({
  padding: "85px 0px 60px",
  backgroundColor: theme.palette.custom?.white09,
  textAlign: "center",
  [theme.breakpoints.down('mediumDesk')]:{
    padding: "40px 0"
  },
  [theme.breakpoints.down('sm')]:{
    padding: "30px 20px",
    marginTop: margin ? margin : "65px"
  }
}))

export const CustomTextField = styled(TextField)({
  // height: 40,
  backgroundColor: theme.palette.custom?.menu,
  fontSize: "18px",
  width: "100%",
  // margin: "0 0 25px",
  borderRadius: "10px",
  '& input': {
    padding: "15px 0 15px 28px",
    borderRadius: "10px",
    color: theme.palette.custom?.inputcolor,
  },
  '& .MuiInputBase-root.MuiOutlinedInput-root':{
    borderRadius: "10px",
    border: "1px solid",
    borderColor: theme.palette.custom?.bordercolor,
    '&.Mui-focused fieldset': {
      border: "1px solid",
      borderColor: theme.palette.custom?.bordercolor,
    },
    '&:hover fieldset':{
      border: "1px solid",
      borderColor: theme.palette.custom?.bordercolor
    }
  },
})

export const OutlinedBlackBtn = styled(Button)(({ margin }:any)=>({
  margin: margin,
  padding: "11px 30px",
  borderRadius: "55px",
  border: "2px solid",
  borderColor: theme.palette.custom?.black,
  color: theme.palette.custom?.black,
  '&:hover':{
    backgroundColor: theme.palette.custom?.black,
    color: theme.palette.custom?.menu,
  },
  [theme.breakpoints.down('sm')]:{
    // margin: margin ? "0 0 12px" : undefined
  }
}))

export const BgImageBox = styled(Box)<Props>(( { volunteer, contactbanner, raincoat, reach })=>({
  textAlign: "center",
  padding: contactbanner ? "300px 0 80px" : raincoat ? "95px 0px 80px" : "65px 0px 50px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `url(${contactbanner ? bannerImg.src : raincoat ? raincoatimg.src : reach ? reachImg.src : volunteerBg.src})`,
  backgroundColor: volunteer ? theme.palette.custom?.yellow09 : undefined,
  [theme.breakpoints.down('sm')]: {
    padding: "30px 20px",
  },
}))

export const CommonLink = styled(Link)({
  color: theme.palette.custom?.black,
  fontWeight: 600,
  textDecoration: "none",
  '&:hover':{
    color: theme.palette.custom?.yellow
  }
})
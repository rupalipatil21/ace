import styled from "@emotion/styled";
import { AppBar, Box, Grid, List, ListItem, SvgIcon, Typography } from "@mui/material";
import { theme } from "../styles/theme";
import leaderImg from "../public/images/aceBookClub/leader.jpg";
import quoteImge from '@/public/images/about/mg-quote.jpg'
import collabimg from '@/public/images/collab/collab-howard.png'
import sponsorImg from '@/public/images/projects/rt-quote.jpg'
import fashionImg from '@/public/images/projects/mg-quote.jpg'
import RainTagImage from '@/public/images/projects/deepak-chopra.png'
import Link from "next/link";
import Image from "next/image";

interface Props {
  stickyheader?: string;
  cwidth?: string;
  homequote?: string
  rainquote?: boolean
  aboutquote?: boolean
  collabquote?: boolean
  sponsorquote?: boolean
  fashionquote?: boolean
  mb?: string
  noborder?: string
  hideonmob?: string
  hideondesk?: string
  mb100?: string
  nobordermob?: string
  padleft?: string
  volunteer?: string
  padd?: string
  talign?: string
}

const logo = {
  [theme.breakpoints.down("desk1336")]: {
    // margin: "11px 15px",
    "& img": {
      width: "70px!important",
      // margin: "0 15px"
    },
  },
}

export const StyledAppBar = styled(AppBar)<Props>(
  ({ stickyheader }) => ({
    backgroundColor: stickyheader ? "#ffffff" : undefined,
    boxShadow: stickyheader ? "0px 0px 6px 0px rgba(0, 0, 0, 0.2)" : undefined,
    "& img": {
      width: stickyheader ? "90px" : undefined,
      // marginTop: '30px',
      // marginBottom: 30,
      margin: stickyheader ? "11px 0 11px 65px" : "35px 32px 0 75px",
      [theme.breakpoints.down('md')]:{
        width: stickyheader ? 70 : undefined,
        margin: "11px 0",
        marginLeft: 15,
      },
    },
  }),
);

export const WhiteLogo = styled(Link)(() => ({
  ...logo,
  "& img": {
    width: "auto",
    [theme.breakpoints.down("xxl")]: {
      width: "revert-layer",
    },
  },
}));

export const BlackLogo = styled(Link)(() => ({
  ...logo,
  "& img": {
    // width: "auto",
    // margin: "35px 32px 0 75px",
    [theme.breakpoints.down('md')]:{
      width: "70px !important"
    }
  },
}));

export const Toplogo = styled(SvgIcon)(({ theme }: any) => ({
  width: "auto",
  height: "auto",
  [theme.breakpoints.down("sm")]: {
    marginTop: "70px",
    width: "140px",
  },
}));

export const NavToggle = styled(Box)(() => ({
  display: "none",
  flexGrow: 1,
  right: 0,
  top: 0,
  color: "#000",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    top: 10,
  },
}));

export const SubMenu = styled(Box)(() => ({
  background: "#FFE169",
  padding: "20px 0px",
  top: 0,
  justifyContent: "center",
  display: "flex",
  zIndex: 99,
  // position: 'sticky',
  "& a": {
    fontSize: "18px",
    fontWeight: "600",
    color: "#000000",
    marginRight: "38px",
    lineHeight: "24.51px",
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      marginRight: 15,
    },
  },
  '& a:last-child': {
    marginRight: 0,
  },
}));
export const Section = styled(Box)<Props>(({cwidth, padd, talign}) => ({
  padding: padd ? padd : "100px 0",
  textAlign: talign ? "left" : 'center',
  "& img": {
    width: cwidth ? "calc(100% - 234px) !important" : undefined,
    display: "inline",
    marginBottom: talign ? undefined : "40px",
    height: cwidth ? "auto !important" : undefined,
  },
  [theme.breakpoints.down("mediumDesk")]: {
    padding: padd ? padd : "80px 0px",
  },
  [theme.breakpoints.down("desk1025")]: {
    paddingLeft: 50,
    paddingRight: 50,
    '& br': {
      display: "none",
    }
  },
  [theme.breakpoints.down("sm")]: {
    padding: "40px 20px",
    '& img': {
      width: "100%",
      marginBottom: talign ? undefined : 30,
    },
  },
}));

export const AceInfo = styled(Box)({
  padding: "100px 0",
  paddingBottom: 50,
  textAlign: "center",
  background: theme.palette.custom?.grey1,
  '& .MuiTypography-root:not(:last-child)': {
    marginBottom: 30
  },
  [theme.breakpoints.down("sm")]: {
    padding: "40px 20px",
    '& br': {
      display: "none",
    },
  },
});

export const Club = styled(Box)(({
  padding: "80px 0",
  backgroundColor: theme.palette.custom?.yellow,
  textAlign: "center",
  '& .MuiTypography-aceinfoP': {
    marginBottom: 20,
  },
  [theme.breakpoints.down("sm")]: {
    padding: "40px 20px",
    '& br': {
      display: "none",
    },
  },
}));

export const StyledFooter = styled(Box)(() => ({
  padding: "50px 70px",
  "& img": {
    height: 45,
    width: 45,
    display: "inline-block",
    verticalAlign: "middle",
  },
  "& span": {
    // marginLeft: 12,
    display: "inline-block",
    verticalAlign: "middle",
  },
  ".socialMedia": {
    marginRight: 50,
  },
  ".MuiButtonBase-root": {
    marginRight: 0,
    lineHeight: "unset",
    marginBottom: 10,
  },
  [theme.breakpoints.down("sm")]:{
      padding: "30px 20px",
  }
}));

export const H1Typo = styled(Typography)({
  margin: 0,
  marginBottom: "32px",
  fontFamily: "'Libre Baskerville', serif",
  [theme.breakpoints.down('sm')]: {
      fontSize: 23,
      marginBottom: "25px",
  }
});

export const ServingTextTypo = styled(Typography)({
  fontFamily: "'Libre Baskerville', serif",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 16,
  [theme.breakpoints.down("sm")]: {
    justifyContent: "start"
  },
}) as typeof Typography;

export const HowItWork = styled(Box)(() => ({
  backgroundColor: "#F2F6FA",
  // marginTop: "100px",
}));

export const Leader = styled(Box)<Props>(({aboutquote, collabquote, sponsorquote, fashionquote, rainquote})=>({
  backgroundImage: `url(${aboutquote ? quoteImge.src : collabquote ? collabimg.src : sponsorquote ? sponsorImg.src : fashionquote ? fashionImg.src : rainquote ? RainTagImage.src : leaderImg.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  marginTop: aboutquote ? 0 : 100,
  textAlign: "center",
  padding: "95px 0px 80px",
  "& .MuiBox-root": {
    display: "inline-block",
    textAlign: aboutquote || collabquote || sponsorquote || fashionquote || rainquote ? "center" : "right",
    width: aboutquote || collabquote || sponsorquote || fashionquote || rainquote ? "80%": undefined
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 30,
    padding: "30px 20px",
    "& .MuiBox-root": {
      width: "100%",
    }
  },
}));

export const FooterLink = styled(Link)({
    color: theme.palette.custom?.grey,
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: "1.6px",
    padding: 0,
    fontFamily: "open sans",
    minWidth: "auto",
    display: "flex",
    flexDirection: "column",
    textTransform: "uppercase",
    marginBottom: 10,
    "&:hover": {
      background: "transparent",
      color: "#ffde59",
    },
    [theme.breakpoints.down("xxl")]: {
      fontSize: 14,
    },
})

export const FooterListItem = styled(ListItem)({
  display: "inline-block",
  minWidth: 150,
  width: "auto",
  marginRight: 50,
    marginBottom: 10,
  '& a':{
    color: theme.palette.custom?.grey,
    fontSize: 18,
    fontWeight: 600,
    letterSpacing: "0.8px",
    fontFamily: "open sans",
    textTransform: "uppercase",
    "&:hover": {
      background: "transparent",
      color: "#ffde59",
    },
    [theme.breakpoints.down("xxl")]: {
      fontSize: 14,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  [theme.breakpoints.down("desk1336")]: {
    marginRight: 25
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: "0",
    textAlign: "center",
    width: "50%"
  },
})

export const ClubList = styled(List)<Props>(({ volunteer })=>({
  display: "flex",
  listStyleType: 'disc',
  justifyContent: "center",
  flexDirection: "row",
  padding: 0,
  marginBottom: volunteer ? undefined : 20,
  flexWrap: 'wrap',
  '& .MuiListItem-root': {
    display: 'list-item',
    listStyleType: 'disc',
    width: 'auto',
    marginInlineStart: 40,
  },
  '& .MuiListItem-root:first-of-type': {
    marginInlineStart: 0,
  },
  '& .MuiTypography-a1':{
    textTransform: volunteer ? "initial" : "uppercase",
  }, 
  [theme.breakpoints.down("sm")]: {
    display: volunteer ? "inline-block" : "flex",
    paddingLeft: volunteer ? 25 : undefined,
    '& .MuiTypography-root': {
      fontSize: 14,
      lineHeight: "24px",
    },
    '& .MuiListItem-root': {
      width: volunteer ? "41%" : undefined,
      float: volunteer ? "left" : undefined,
      marginInlineStart: volunteer ? 0 : 40
    },
  },
}))

export const VideoBox = styled(Box)({
  maxWidth: "995px",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    '& iframe': {
      height: 300
    },
  },
})

export const RightGrid = styled(Grid)({
  paddingLeft: 54,
  '& img': {
    width: "100%"
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: 20,
    paddingLeft: 0,
  },
})

export const LeftGrid = styled(Grid)({
  paddingRight: 54,
  [theme.breakpoints.down("sm")]: {
    paddingRight: 0,
    '& .MuiTypography-aceinfoP':{
      textAlign: "left"
    },
  },
})

export const RightBox = styled(Box)<Props>(({ padleft })=>({
  paddingLeft: padleft ? padleft+`px` : 60,
  '& .MuiTypography-aceinfoP:not(:last-child)':{
    marginBottom: 30,
  },
  [theme.breakpoints.between("sm", "mediumDesk")]: {
    '& .MuiTypography-aceinfoP:not(:last-child)':{
      marginBottom: padleft ? 15 : undefined,
    },
  },
  [theme.breakpoints.down("sm")]: {
    padding: padleft ? 0 :"30px 20px",
    '& .MuiTypography-h11': {
      textAlign: "center",
    },
  },
}))

export const PartnerImage = styled(Image)({
  marginRight: "60px",
  marginTop: 30,
  marginBottom: "0 !important",
  ':last-child':{
    marginRight: 0
  },
  [theme.breakpoints.down("sm")]: {
    width: "70px !important",
    marginRight: 0,
  },
})

const timeLine = {
  borderTop: "3px solid #FFDE59",
  borderBottom: "3px solid #FFDE59",
  fontFamily: "'Libre Baskerville', serif",
  paddingTop: 40,
  color: theme.palette.custom?.black,
  "& ul li": {
    display: "list-item",
    listStyleType: "disc",
    padding: 0,
    marginBottom: 6
  },
  "& ul": {
    marginLeft: 84,
  },
  "& span.MuiTypography-yellospan": {
    color: theme.palette.custom?.yellow,
  },
  '& .MuiTypography-timelineTitle': {
    marginBottom: "5px"
  },
  [theme.breakpoints.down('xxl')]: {
    '& .MuiTypography-quoteName': {
      fontSize: "16px",
      lineHeight: "27px",  
    } 
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: "20px",
    marginTop: "20px"
  }
};

export const Sectingtext = styled(Box)(() => ({
  ...timeLine,
  marginLeft: 40,
  padding: "40px 0px",
  [theme.breakpoints.down("xxl")]: {
    padding: "26px 0px",
    '& ul':{
      marginLeft: "38px"
    },
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    borderTop: 0,
    padding: "20px 0px",
    marginBottom: 40
  },
}));

export const SectingtextLeft = styled(Box) ({
  ...timeLine,
  padding: "124px 0px",
  marginRight: 40,
  marginLeft: 40,
  fontFamily: "'Libre Baskerville', serif",
  "& span.MuiTypography-h6Name": {
    fontFamily: "'Open sans', sans-serif",
  },
  [theme.breakpoints.down('xxl')]: {
      padding: "90px 0",
  },
  [theme.breakpoints.down('sm')]: {
    margin: 0,
    textAlign: "left",
    padding: "26px 0",
    borderTop: 0,
    marginBottom: 40,
  },
});

export const TimelineRight = styled(Box)<Props>(({ mb, noborder, hideondesk, nobordermob })=>({
  ...timeLine,
  borderBottomColor: "transparent",
  borderTopColor: noborder ? "transparent" : theme.palette.custom?.yellow,
  textAlign: "left",
  display: hideondesk ? "none" : undefined,
  "& ul": {
    marginLeft: "16px !important",
    marginBottom: "8px !important"
  },
  '& .MuiTypography-quoteName': {
    marginBottom: mb ? "20px" : undefined,
    display: mb ? "block" : undefined,
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: "20px",
    marginTop: "20px",
    borderTopColor: noborder ? theme.palette.custom?.yellow : nobordermob ? "transparent" : undefined,
    '& .MuiTypography-quoteName': {
      marginBottom: mb ? "0 !important" : undefined,
    }
  }
  
}))

export const TimelineLeft = styled(Box)<Props>(({ hideonmob, hideondesk, mb100 })=>({
  ...timeLine,
  marginLeft: "0 !important",
  borderBottomColor: "transparent",
  textAlign: "left",
  display: hideondesk ? "none" : undefined,
  "& ul": {
    marginLeft: "16px !important",
    marginBottom: mb100 ? "100px" : "8px !important"
  },
  [theme.breakpoints.down('sm')]: {
    display: hideonmob ? "none" : hideondesk ? "block" : undefined,
    paddingTop: "20px",
    marginTop: "20px",
    "& ul": {
      marginBottom: mb100 ? "0px" : undefined
    }
  }
}))

export const TimeList = styled(List)({
  fontFamily: "'Open sans', sans-serif",
  '& .MuiTypography-visionPara':{
    lineHeight: "38px"
  },
  '& li': {
    marginBottom: "0 !important"
  },
  [theme.breakpoints.down("xxl")]: {
    lineHeight: "24px",
  },
  [theme.breakpoints.down("md")]: {
    '& .MuiTypography-visionPara': {
      lineHeight: "22px",
      fontSize: 14,
    }
  },
})

export const TestimonialBox = styled(Box)({
  marginTop: 40,
  '& .MuiBox-root':{
    marginBottom: 16,
    '& .MuiTypography-p_400': {
      position: "relative",
      top: 11,
      marginLeft: 55,
    },
    '& img':{
      marginBottom: 0,
      position: "absolute",
      width: 50
    },
  },
  '& .MuiTypography-h3_600': {
    marginBottom: 8,
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: 0,
    '& .MuiBox-root img':{
      width: "auto"
    },
    '& .MuiBox-root .MuiTypography-p_400': {
      marginLeft: 33,
      top: 0,
    },
  }
})

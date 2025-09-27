"use client";
import { createTheme, ThemeOptions } from "@mui/material/styles";
const Theme = createTheme();

interface Props {
  $colorWhite?: boolean
}

interface CustomPalette {
  menu: string;
  yellow: string;
  black: string;
  grey: string;
  grey1: string;
  lightBlue: string
  blue: string
  yellow09: string
  white09: string
  bordercolor: string
  inputcolor: string
  red: string
}
declare module "@mui/material/styles" {
  interface PaletteOptions {
    custom?: CustomPalette;
  }
  interface Palette {
    custom?: CustomPalette;
  }
  interface MuiAppBar {
    backgroundColor: string;
  }

  interface BreakpointOverrides {
    xxl: true
    mediumDesk: true
    desk1336: true
    desk1280: true
    desk1025: true
  }

  interface TypographyVariants {
    h11: React.CSSProperties;
    quoteText: React.CSSProperties;
    h6Name: React.CSSProperties;
    h6NameItalic: React.CSSProperties;
    aceinfoP: React.CSSProperties;
    italic: React.CSSProperties;
    a1: React.CSSProperties;
    mail: React.CSSProperties;
    footerLinks: React.CSSProperties;
    yellospan: React.CSSProperties;
    servingtext: React.CSSProperties;
    navMenu: React.CSSProperties;
    para1: React.CSSProperties;
    para2: React.CSSProperties;
    visionPara: React.CSSProperties;
    btnText: React.CSSProperties;
    donateText: React.CSSProperties;
    shareText: React.CSSProperties;
    quoteTitle: React.CSSProperties;
    quoteName: React.CSSProperties
    aboutQuote: React.CSSProperties
    quoteName2: React.CSSProperties
    title: React.CSSProperties
    year: React.CSSProperties
    timelineTitle: React.CSSProperties
    teamName: React.CSSProperties
    error: React.CSSProperties
    h3_600: React.CSSProperties
    p_400: React.CSSProperties
  }
  interface TypographyVariantsOptions {
    h11?: React.CSSProperties;
    quoteText: React.CSSProperties;
    h6Name: React.CSSProperties;
    h6NameItalic: React.CSSProperties;
    aceinfoP: React.CSSProperties;
    italic: React.CSSProperties;
    a1: React.CSSProperties;
    mail: React.CSSProperties;
    footerLinks: React.CSSProperties;
    yellospan: React.CSSProperties;
    servingtext: React.CSSProperties;
    navMenu: React.CSSProperties;
    para1: React.CSSProperties;
    para2: React.CSSProperties;
    visionPara: React.CSSProperties;
    btnText: React.CSSProperties;
    donateText: React.CSSProperties;
    shareText: React.CSSProperties;
    quoteTitle: React.CSSProperties;
    quoteName: React.CSSProperties
    aboutQuote: React.CSSProperties
    quoteName2: React.CSSProperties
    title: React.CSSProperties
    year: React.CSSProperties
    timelineTitle: React.CSSProperties
    teamName: React.CSSProperties
    error: React.CSSProperties
    h3_600: React.CSSProperties
    p_400: React.CSSProperties
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h11: true;
    quoteText: true;
    h6Name: true;
    h6NameItalic: true;
    aceinfoP: true;
    italic: true;
    a1: true;
    mail: true;
    footerLinks: true;
    yellospan: true;
    servingtext: true;
    navMenu: true;
    para1: true;
    para2: true;
    visionPara: true;
    btnText: true;
    donateText: true
    shareText: true
    quoteTitle: true
    quoteName: true
    aboutQuote: true
    quoteName2: true
    title: true
    year: true
    timelineTitle: true
    teamName: true
    error: true
    h3_600: true
    p_400: true
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    a: true;
  }
}

const h6name = {
  fontSize: "16px",
  lineHeight: "28px",
  fontWeight: "400",
};

const fs16 = {
    fontSize: 16,
    lineHeight: "22px",
    fontWeight: 600,
}
const fs30 = {
  fontSize: "30px",
  fontWeight: 700
}

const typography: ThemeOptions["typography"] = {
  h11: {
    fontSize: "36px",
    fontWeight: "400",
    display: "block",
  },
  quoteText: {
    fontSize: "20px",
    lineHeight: "27px",
    fontWeight: "400",
    letterSpacing: "1.6px",
    [Theme.breakpoints.down("sm")]: {
      fontSize: 15,
      lineHeight: "23px",
    },
  },
  h6Name: {
    ...h6name,
  },
  h6NameItalic: {
    ...h6name,
    fontStyle: "italic",
  },
  aceinfoP: {
    ...h6name,
    fontFamily: "open sans",
    display: "block",
    [Theme.breakpoints.down("sm")]: {
      fontSize: 15,
      lineHeight: "23px",
    },
  },
  italic: {
    fontStyle: "italic",
  },
  a1: {
    ...fs16,
    lineHeight: "27px",
    letterSpacing: "1.6px",
    textTransform: "uppercase",
    textDecoration: "none",
    marginBottom: 10,
  },
  mail: {
    ...fs16,
    letterSpacing: 1.28,
    color: "#3f3f3f",
    marginLeft: 18,
  },
  footerLinks: {
    ...fs16,
    color: "#3f3f3f",
    textTransform: "uppercase",
    marginBottom: 10,
    textDecoration: "none",
  },
  yellospan: {
    lineHeight: "50.4px",
    fontSize: 60,
    fontFamily: "Libre Baskerville",
    fontWeight: 700,
    [Theme.breakpoints.down("xl")]: {
      fontSize: 43
    },
    [Theme.breakpoints.down("sm")]: {
      fontSize: 34
    },
  },
  servingtext: {
    ...fs30,
    [Theme.breakpoints.down("md")]: {
      fontSize: 25
    },
    [Theme.breakpoints.down("sm")]: {
      fontSize: 23
    }
  },
  navMenu: {
    fontSize: 18,
    lineHeight: "85px",
    fontWeight: 600,
    letterSpacing: "1.6px",
  },
  para1: {
    fontSize: 47,
    lineHeight: "65px",
    fontWeight: 300,
    display: "block",
    textAlign: "center",
    [Theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      lineHeight: "33px",
    }
  },
  para2: {
    fontSize:20,
    lineHeight: "36px",
    fontWeight: 600,
    display: "block",
    textAlign: "center",
  },
  visionPara: {
    fontSize: 16,
    display: "block",
    lineHeight: "28px",
    letterSpacing: "-0.18px",
    [Theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      lineHeight: "23px",
    }
  },
  btnText: {
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: "24px",
    letterSpacing: "0.32px",
    display: "inline-block",
    textTransform: "uppercase",
  },
  donateText: {
    fontSize: 26,
    fontWeight: 700,
    lineHeight: "32.24px",
    fontFamily: "Libre Baskerville",
    textTransform: "uppercase",
    textDecoration: "none !important",
  },
  shareText: {
    ...fs16,
    textTransform: "uppercase",
    letterSpacing: "1.44px"
  },
  quoteTitle: {
    fontSize: "36px",
    lineHeight: "45px",
    letterSpacing: "0.6px",
    fontWeight: 400,
    display: "block",
    fontFamily: "'Libre Baskerville', serif",
  },
  quoteName: {
    fontSize: "18px",
    lineHeight: "28px",
    letterSpacing: "0.0324px",
    fontStyle: "italic",
    fontFamily: "open sans",
    [Theme.breakpoints.down('sm')]:{
      fontSize: 16,
    },
  },
  aboutQuote: {
    fontSize: "47px",
    lineHeight: "65px",
    fontWeight: 300,
    display: "block",    
    [Theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      lineHeight: "33px",
    }
  },
  quoteName2: {
    fontSize: "20px",
    lineHeight: "32px",
    fontWeight: 600,
    letterSpacing: "1.56px",
  },
  title: {
    fontWeight: 700,
    fontSize: "35px",
    display: "block",
    lineHeight: "40px",
    letterSpacing: "0.53px",
    fontFamily: "'Libre Baskerville', serif",    
    [Theme.breakpoints.down("sm")]: {
      fontSize: "23px",
      lineHeight: "33px",
      textAlign: "center",
      // fontWeight: 500
    }
  },
  year: {
    ...fs30,
    lineHeight: "36px",
    letterSpacing: "2.37px",
    display: "block",
    marginBottom: "10px",
    fontFamily: "open sans"
  },
  timelineTitle: {
    ...fs30,
    lineHeight: "37px",
    letterSpacing: " 0.45px",
    fontFamily: "Libre Baskerville",
    display: "block"
  },
  h3: {
    fontSize: "27px",
    lineHeight: "37px",
    letterSpacing: "1.35px",
    fontWeight: 600,
    [Theme.breakpoints.down("sm")]: {
      fontSize: "23px",
      lineHeight: "33px",
    }
  },
  teamName: {
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: 600,
    display: "block",
    [Theme.breakpoints.down("sm")]: {
      fontSize: 18,
    }
  },
  error: {
    fontSize: 12,
    fontStyle: "italic",
    float: "left",
  },
  h3_600: {
    ...h6name,
    fontWeight: 600,
    display: "block",
    [Theme.breakpoints.down("sm")]: {
      fontSize: 14,
      lineHeight: "19px"
    },
  },
  p_400: {
    ...h6name,
    letterSpacing: "0.0234px",
    [Theme.breakpoints.down("sm")]: {
      fontSize: 13,
      lineHeight: "20px"
    },
  },
};

export const theme = createTheme({
  palette: {
    custom: {
      menu: "#ffffff",
      yellow: "#FFE169",
      black: "#000000",
      grey: "#3F3F3F",
      grey1: "#F2F6FA",
      lightBlue: "rgba(38, 97, 168, 0.06)",
      blue: "rgba(15, 80, 159, 0.9)",
      yellow09: "rgba(255, 222, 89, 0.9)",
      white09: "rgba(255, 255, 255, 0.9)",
      bordercolor: "#ced4da",
      inputcolor: "#707070",
      red: "#ff0000",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        // positionFixed: 'fixed',
        colorPrimary: ({ theme }) =>  ({
          backgroundColor: "transparent",
          [theme.breakpoints.down("md")]: {
            backgroundColor: "#fff",
          },
        }),
      },
    },
    MuiButton: {
      variants: [
        {
          props: {
            variant: "a",
          },
          style: ({ theme }) => ({
            color: "#000",
            fontSize: 18,
            lineHeight: "85px",
            fontWeight: 600,
            letterSpacing: "1.6px",
            marginRight: "37px",
            padding: 0,
            fontFamily: "open sans",
            minWidth: "auto",
            "&:hover": {
              background: "transparent",
              color: "#ffde59",
            },
            [theme.breakpoints.down("xxl")]: {
              fontSize: 14,
            },
            [theme.breakpoints.down("desk1280")]: {
              fontSize: "10px",
              lineHeight: "20px",
              marginRight: 30,
            },
            [theme.breakpoints.down("lg")]: {
              marginRight: 20
            },
          }),
        },
      ],
    },
    // MuiTypography: {
    //     defaultProps: {
    //       variantMapping: {
    //         h11: 'h1',
    //       },
    //     },
    // },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.down("sm")]: {
            padding: 0,
          },
        }),
      },
    },
  },
  typography: {
    fontFamily: "open sans",
    ...typography,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      desk1025: 1025,
      lg: 1140,
      desk1280: 1280,
      desk1336: 1336,
      xl: 1536,
      mediumDesk: 1600,
      xxl: 1700,
    },
  },
  spacing: [8, 16, 24, 32, 40, 48, 64],
});

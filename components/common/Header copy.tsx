"use client";
import { Box, Button, Drawer, Grid, IconButton, List, ListItem, Slide, Typography, useMediaQuery, useScrollTrigger, useTheme,} from "@mui/material";
import { BlackLogo, NavToggle, StyledAppBar, WhiteLogo, } from "../../styles/ace.styled";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BLogo from "../../public/images/ace-fixed-logo.png";
import WLogo from "../../public/images/ace-logo.svg";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import { Acenavbarbox } from "@/styles/common.styled";

const NavMenu = [
  { id: 1, name: "About us", link: "/about-us" },
  { id: 2, name: "ace book club", link: "/ace-book-club" },
  { id: 3, name: "our projects", link: "/our-projects" },
  { id: 4, name: "our collabs", link: "/our-collabs" },
  { id: 5, name: "contact us", link: "/contact-us" },
  { id: 6, name: "press", link: "/press" },
  { id: 7, name: "snapshots", link: "/snapshots" },
  { id: 8, name: "donate", link: "/donate" },
];

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}
function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}
export default function Header(props: Props) {
  const theme = useTheme()
  const pathname = usePathname();
  const router = useRouter();
  const [header, setHeader] = useState("");

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const listenScrollEvent = () => {
    if (window.scrollY < 50) {
      return setHeader("");
    } else if (window.scrollY > 70) {
      return setHeader("stickyheader");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  type Anchor = "top";

  const [state, setState] = React.useState({
    top: false,
  });
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <Typography variant="a1" href="#" component="a">
            ABOUT US
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant="a1" href="#" component="a">
            Our Collabs
          </Typography>
          {/* <ListItemText primary={'Our Collabs'} /> */}
        </ListItem>
        <ListItem>
          <Typography variant="a1" href="#" component="a">
            Ace Book Club
          </Typography>
        </ListItem>
      </List>
    </Box>
  );

  const stickyheader = header;
  return (
    // <ThemeProvider theme={theme}>
      <HideOnScroll {...props}>
        <StyledAppBar elevation={0} stickyheader={stickyheader}>
          <Grid container >
            <Grid size={{xs: 12, md:2}}>
              { pathname == '/ace-book-club' || stickyheader || isMobile ? (
                <BlackLogo href="/">
                  <Image src={BLogo} alt="Logo" />
                </BlackLogo>
              ) : (
                <WhiteLogo href="/">
                  <Image src={WLogo} alt="Logo" />
                  {/* <CardMedia component="img" image={BLogo}></CardMedia> */}
                </WhiteLogo>
              )} 
              <NavToggle sx={{ position: "absolute" }}>
                <IconButton
                  size="large"
                  // onClick={handleOpenNavMenu}
                  onClick={toggleDrawer("top", true)}
                  // onClose={toggleDrawer('top', true)}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="top"
                  open={state["top"]}
                  onClose={toggleDrawer("top", false)}
                >
                  {list("top")}
                </Drawer>
              </NavToggle>
            </Grid>
            <Grid size={{xs: 12, md:10}} >
              <Acenavbarbox>
                {NavMenu.map((menu, i) => (
                  <Button
                    className={menu.link === pathname ? "active" : ""}
                    variant="a"
                    key={i}
                    onClick={() => router.push(menu.link)}
                    sx={{ 
                      color: pathname == '/ace-book-club' || stickyheader ? '#000 !important' : "#fff"
                    }}
                  >
                    {menu.name}
                  </Button>
                ))}
              </Acenavbarbox>
            </Grid>
          </Grid>
        </StyledAppBar>
      </HideOnScroll>
    // </ThemeProvider>
  );
}

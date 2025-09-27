'use client'

import React, { useRef, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { BlackLogo, NavToggle, StyledAppBar, WhiteLogo } from '@/styles/ace.styled';
import { Acenavbarbox, MobList, StyledDrawer, StyledMenu } from '@/styles/common.styled';
import BLogo from "../../public/images/ace-fixed-logo.png";
import WLogo from "../../public/images/ace-logo.svg";
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { theme } from '@/styles/theme';
import { Box, Button, IconButton, ListItem, MenuItem, Slide, Toolbar, Typography, useMediaQuery, useScrollTrigger } from '@mui/material';
import { navItems } from '@/lib/constant'

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

const drawerWidth = "100%";

type MenuItemType = {
  id: number;
  name: string;
  hasSubMenu: boolean;
  subMenu?: {
    subMenuName: string;
    subMenuLink: string;
  }[];
};

export default function DrawerAppBar(props: Props) {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [header, setHeader] = useState("");
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedMenu, setSelectedMenu] = useState<MenuItemType | null>(null);
    const timeoutId = useRef<NodeJS.Timeout | null>(null);
    const router = useRouter();

    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    
    const stickyheader = header;

    const listenScrollEvent = () => {
        if (window.scrollY < 50) {
        return setHeader("");
        } else if (window.scrollY > 70) {
        return setHeader("stickyheader");
        }
    };

    React.useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
    
        return () => window.removeEventListener("scroll", listenScrollEvent);
      }, []);
    //   type Anchor = "top";

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} >
        <MobList>
            {navItems.map((menu,item) => (
            <ListItem key={item} disablePadding>
                <Typography 
                    className={menu.link === pathname ? "active" : ""}
                    color={pathname == '/ace-book-club' ? theme.palette.custom?.black+"!important" : undefined}
                    variant="a1" href={menu.link} component="a">{menu.name} </Typography>
            </ListItem>
            ))}
        </MobList>
        </Box>
    );

    const handleOpen = (event: React.MouseEvent<HTMLElement>, menu: any) => {
        if (timeoutId.current) clearTimeout(timeoutId.current);
        setAnchorEl(event.currentTarget);
        setSelectedMenu(menu);
    };
    
    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, menu: MenuItemType) => {
        // clearTimeout(closeTimeout);
        setAnchorEl(event.currentTarget);
        setSelectedMenu(menu);
    };
    const handleClose = () => {
        // if (!!timeoutId) {
        // clearTimeout(timeoutId.current);
        // }
        timeoutId.current = setTimeout(() => {
            setAnchorEl(null);
            setSelectedMenu(null);
        }, 0);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        // setSelectedMenu(null);
    };

    const handleMenuEnter = () => {
        if (timeoutId.current) {
        clearTimeout(timeoutId.current);
        }
    };

//   const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <HideOnScroll {...props}>
        <Box sx={{ display: 'flex' }}>
            <StyledAppBar elevation={0} stickyheader={stickyheader} >
                <Toolbar disableGutters>
                    <Box>
                        { pathname == '/ace-book-club' || stickyheader || isMobile ? (
                            <BlackLogo href="/">
                            <Image src={BLogo} alt="Logo" />
                            </BlackLogo>
                        ) : (
                            <WhiteLogo href="/">
                            <Image src={WLogo} alt="Logo" />
                            </WhiteLogo>
                        )} 
                    </Box>
                    <NavToggle sx={{ position: "absolute" }}>
                        <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: 'none' } }}
                        >
                        {mobileOpen ? <ClearIcon /> : <MenuIcon/>}
                        </IconButton>
                    </NavToggle>
                    
                    <Acenavbarbox stickyheader={header}
                        sx={{  
                            display: { 
                                sm: 'none', 
                                md: 'flex' 
                            },
                        }}>

                        {navItems.map((menu,item) => (
                        <React.Fragment key={item}>
                            <Button
                                className={menu.link === pathname ? "active" : ""}
                                sx={{ 
                                    color: pathname == '/ace-book-club' || stickyheader ? '#000 !important' : "#fff",
                                    zIndex: (theme) => theme.zIndex.modal + 1 
                                }}
                                onMouseOver={(e) => handleOpen(e, menu)}
                                onMouseLeave={handleClose}
                                variant="a"
                                onClick={() => router.push(menu.link)}
                                disableRipple
                            >
                                {menu.name}
                            </Button>
                            {menu.hasSubMenu && selectedMenu?.id === menu.id && (
                                <StyledMenu
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        onMouseOver: handleMenuEnter,
                                        onMouseLeave: handleMenuClose,
                                    }}
                                    disableScrollLock
                                    disablePortal
                                    elevation={0}
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "left",
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "left",
                                    }}
                                    sx={{ '& ul li:hover:before': { position: "absolute" } }}
                                    PaperProps={{
                                        modifiers: [{
                                            options: {
                                                name: "offset",
                                                offset: [0, 32]
                                            }
                                        }]
                                    }}
                                    ModalProps={{
                                        keepMounted: false, // ⛔️ don't keep it around
                                    }}
                                >
                                {menu.subMenu?.map((item, index) => (
                                    <MenuItem 
                                        // onClick={handleClose} 
                                        disableRipple 
                                        key={index} 
                                        onClick={() =>{ handleClose; router.push(item.subMenuLink)}}
                                    >
                                        <Typography variant="quoteName">
                                            {item.subMenuName}
                                        </Typography>
                                    </MenuItem>
                                ))}
                                </StyledMenu>
                            )}
                        </React.Fragment>
                        ))}
                    </Acenavbarbox>
                </Toolbar>
            </StyledAppBar>
            <StyledDrawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
                anchor='top'
                sx={{
                display: { sm: 'block', md: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </StyledDrawer>
        </Box>
    </HideOnScroll>
  );
}

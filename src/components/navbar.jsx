import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import {
    AppBar,
    Toolbar,
    Container,
    Typography,
    Drawer,
    IconButton,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemButton,
    Box,
    ListSubheader,
} from "@mui/material";

import {
    Dashboard,
    PhoneIphone,
    Home,
    MenuBook,
    Biotech,
    RssFeed,
    Telegram,
    Menu,
    LibraryBooks,
    LocalPolice,
} from "@mui/icons-material";

const inItems = [
    {
        title: "Home",
        route: "/",
        icon: <Home />,
    },
    {
        title: "Manual",
        route: "/manual",
        icon: <LibraryBooks />,
    },
    {
        title: "Policy",
        route: "/policy",
        icon: <LocalPolice />,
    },
];

const outItems = [
    {
        title: "TFAsoft",
        href: "https://tfasoft.amirhossein.info",
        icon: <Telegram />,
    },
    {
        title: "Dashboard",
        href: "https://dashboard.amirhossein.info",
        icon: <Dashboard />,
    },
    {
        title: "Docs",
        href: "https://docs.amirhossein.info",
        icon: <MenuBook />,
    },
    {
        title: "Demo",
        href: "https://demo.amirhossein.info",
        icon: <Biotech />,
    },
    {
        title: "Blog",
        href: "https://blog.amirhossein.info",
        icon: <RssFeed />,
    },
    {
        title: "Mobile",
        href: "https://mobile.amirhossein.info",
        icon: <PhoneIphone />,
    },
];

const Navbar = () => {
    const history = useHistory();
    const location = useLocation();

    const [drawerOpen, setDrawerOpen] = useState(false);

    const drawer = (
        <Box
            onClick={() => setDrawerOpen(!drawerOpen)}
        >
            <Toolbar
                sx={{
                    bgcolor: "primary.main"
                }}
            >
                <Typography
                    variant="h6"
                    onClick={() => history.push('/')}
                    sx={{
                        cursor: "pointer",
                        color: "white",
                        my: 2,
                    }}
                >
                    TFAmobile
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {/* <ListSubheader> items</ListSubheader> */}
                {
                    inItems.map((item) => {
                        return (
                            <ListItem>
                                <ListItemButton
                                    onClick={() => history.push(item.route)}
                                    selected={location.pathname === item.route}
                                >
                                    <ListItemIcon sx={{ color: "primary.main" }}>
                                        { item.icon }
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })
                }
                <Divider />
                <ListSubheader>TFAsoft services</ListSubheader>
                {
                    outItems.map((item) => {
                        return (
                            <ListItem>
                                <ListItemButton
                                    href={item.href}
                                >
                                    <ListItemIcon sx={{ color: "primary.main" }}>
                                        { item.icon }
                                    </ListItemIcon>
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })
                }
            </List>
        </Box>
    );

    return (
        <AppBar
            elevation={0}
        >
            <Container>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        onClick={() => setDrawerOpen(true)}
                        sx={{
                            mr: 2,
                        }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography
                        variant="h5"
                        onClick={() => history.push('/')}
                        sx={{
                            flexGrow: 1,
                            cursor: "pointer",
                        }}
                    >
                        TFA Mobile
                    </Typography>
                </Toolbar>
            </Container>

            <Box
                component="nav"
            >
                <Drawer
                    variant="temporary"
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: 300,
                        },
                    }}
                >
                    <Box>
                        {drawer}
                    </Box>
                </Drawer>
            </Box>
        </AppBar>
    );
}

export default Navbar;
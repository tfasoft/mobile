import {
    colors as Colors,
    Typography,
    Toolbar,
    Button,
    Grid,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Card,
    CardContent,
} from "@mui/material";

import {
    LabelImportant,
    Apple,
    Android,
    Download,
} from "@mui/icons-material";

import iPhonePicture from "../assets/images/iphone.png";

const whyItems = [
    {
        "text": "Manage accounts",
    },
    {
        "text": "Create a profile",
    },
    {
        "text": "Use your email and password to login",
    },
    {
        "text": "You can stop using Telegram any more!",
    }
];

const downlaodItems = [
    {
        "icon": <Android sx={{ color: Colors.green[900] }} />,
        "link": "https://google.com",
        "text": "Download for Android",
        "disable": true,
    },
    {
        "icon": <Apple sx={{ color: Colors.grey[900] }} />,
        "link": "https://apple.com",
        "text": "Download for iOS",
        "disable": true,
    },
    {
        "icon": <Download color="primary" />,
        "link": "#",
        "text": "Download directly from here ( Android )",
        "disable": false,
    },
];



const HomePage = () => {
    return (
        <Box>
            <Box>
                <Grid
                    container
                    spacing={1}
                >
                    <Grid
                        md={6}
                        sm={12}
                        xs={12}
                        item
                    >
                        <Box
                            sx={{
                                height: "100vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Box>
                                <Typography
                                    variant="h4"
                                    fontSize={35}
                                    fontWeight="bold"
                                    color="primary"
                                >
                                    Do more with
                                </Typography>
                                <Typography
                                    variant="h3"
                                    fontSize={75}
                                    fontWeight="bold"
                                    color="primary"
                                    sx={{
                                        textDecoration: "underline"
                                    }}
                                    gutterBottom
                                >
                                    TFA Mobile!
                                </Typography>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    href="#more"
                                >
                                    <b>Read more</b>
                                </Button>
                                &nbsp;
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href="#download"
                                    disableElevation
                                >
                                    <b>Download application</b>
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        md={6}
                        sm={12}
                        xs={12}
                        sx={{
                            display: { xs: 'none', sm: 'none', md: 'block' },
                        }}
                        item
                    >
                        <Box
                            sx={{
                                height: "100vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                background: {
                                    xs: `linear-gradient(to bottom left, #607d8b 50%, #f8fbff 50%)`,
                                    sm: `linear-gradient(to bottom left, #607d8b 50%, #f8fbff 50%)`,
                                    md: `linear-gradient(to bottom left, #607d8b 50%, #f8fbff 50%)`,
                                },
                            }}
                        >
                            <Box
                                component="img"
                                alt="iPhone"
                                sx={{
                                    height: "75%",
                                    "-webkit-box-reflect": "below 0px linear-gradient(to bottom, rgba(0,0,0,0.0) 50%, rgba(0,0,0,0.4))",
                                }}
                                src={iPhonePicture}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box id="more">
                <Grid
                    container
                    spacing={1}
                >
                    <Grid
                        md={6}
                        sm={12}
                        xs={12}
                        item
                    >
                        <Box
                            sx={{
                                height: "100vh",
                                py: 5,
                                px: 5,
                                background: {
                                    xs: `linear-gradient(to bottom left, #607d8b 50%, #f8fbff 50%)`,
                                    sm: `linear-gradient(to bottom left, #607d8b 50%, #f8fbff 50%)`,
                                    md: 'linear-gradient(to bottom right, #607d8b 50%, #f8fbff 50%)',
                                },
                            }}
                        >
                            <Toolbar />
                            <Card
                                variant="outlined"
                                sx={{
                                    borderColor: "primary.main",
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="h4"
                                        fontSize={30}
                                        fontWeight="bold"
                                        color="primary"
                                        gutterBottom
                                    >
                                        Why using TFAmobile?
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        you can do further vs what you can do with TFAbot!
                                    </Typography>
                                    <List>
                                        {
                                            whyItems.map((item) => {
                                                return (
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <LabelImportant color="primary" />
                                                        </ListItemIcon>
                                                        <ListItemText primary={item.text} />
                                                    </ListItem>
                                                );
                                            })
                                        }
                                    </List>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid
                        md={6}
                        sm={12}
                        xs={12}
                        sx={{
                            display: { xs: 'none', sm: 'none', md: 'block' },
                        }}
                        item
                    >
                        <Box
                            sx={{
                                height: "100vh",
                                py: 5,
                                px: 5,
                                background: {
                                    xs: `linear-gradient(to top left, #607d8b 50%, #f8fbff 50%)`,
                                    sm: `linear-gradient(to top left, #607d8b 50%, #f8fbff 50%)`,
                                    md: `linear-gradient(to top left, #607d8b 50%, #f8fbff 50%)`,
                                },
                            }}
                        >
                            
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box id="download">
                <Grid
                    container
                    spacing={1}
                >
                    <Grid
                        md={6}
                        sm={12}
                        xs={12}
                        sx={{
                            display: { xs: 'none', sm: 'none', md: 'block' },
                        }}
                        item
                    >
                        <Box
                            sx={{
                                height: "100vh",
                                py: 5,
                                px: 5,
                                background: {
                                    xs: `linear-gradient(to bottom left, #607d8b 50%, #f8fbff 50%)`,
                                    sm: `linear-gradient(to bottom left, #607d8b 50%, #f8fbff 50%)`,
                                    md: 'linear-gradient(to top right, #607d8b 50%, #f8fbff 50%)',
                                },
                            }}
                        >
                        </Box>
                    </Grid>
                    <Grid
                        md={6}
                        sm={12}
                        xs={12}
                        item
                    >
                        <Box
                            sx={{
                                height: "100vh",
                                py: 5,
                                px: 5,
                                background: {
                                    xs: `linear-gradient(to top left, #607d8b 50%, #f8fbff 50%)`,
                                    sm: `linear-gradient(to top left, #607d8b 50%, #f8fbff 50%)`,
                                    md: `linear-gradient(to bottom left, #607d8b 50%, #f8fbff 50%)`,
                                },
                            }}
                        >
                            <Toolbar />
                            <Card
                                variant="outlined"
                                sx={{
                                    borderColor: "primary.main",
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="h4"
                                        fontSize={30}
                                        fontWeight="bold"
                                        color="primary"
                                        gutterBottom
                                    >
                                        Download TFAmobile
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        Dowbload TFAmobile via these links
                                    </Typography>
                                    <List>
                                        {
                                            downlaodItems.map((item) => {
                                                return (
                                                    <ListItem>
                                                        <ListItemButton href={item.link} disabled={item.disable}>
                                                            <ListItemIcon>
                                                                {item.icon}
                                                            </ListItemIcon>
                                                            <ListItemText primary={item.text} />
                                                        </ListItemButton>
                                                    </ListItem>
                                                );
                                            })
                                        }
                                    </List>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default HomePage;
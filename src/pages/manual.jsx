import {
    Box,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Card,
    CardContent,
} from "@mui/material";

import {
    LabelImportant,
} from "@mui/icons-material";

const stepItems = [
    "Download and install application",
    "Open it and tap on ' Connect to Telegram '",
    "Open TFAbot and tab on ' Connect to mobile '",
    "Copy the ' M-Code '",
    "Paste the ' M-Code ' in the field",
    "Now you have connected your account to mobile!",
    "Last step, go to ' Settings ' and create an Email and a Password"
];

const ManualPage = () => {
    return (
        <Box>
            <Grid
                container
                spacing={1}
            >
                <Grid
                    md={6}
                    sm={12}
                    xs={12}
                    sx={{
                        bgcolor: "primary.main",
                    }}
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
                                variant="h3"
                                fontSize={70}
                                fontWeight="bold"
                                color="white"
                            >
                                Manual
                            </Typography>
                            <Typography
                                variant="h4"
                                fontSize={30}
                                fontWeight="bold"
                                color="white"
                            >
                                How to use TFAmobile?
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    md={6}
                    sm={12}
                    xs={12}
                    sx={{
                        background: {
                            xs: `linear-gradient(to bottom left, #607d8b 50%, #f8fbff 50%)`,
                            sm: `linear-gradient(to bottom left, #607d8b 50%, #f8fbff 50%)`,
                            md: 'linear-gradient(to bottom right, #607d8b 50%, #f8fbff 50%)',
                        },
                    }}
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
                                        Here we go!
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        Just follow the instructure!
                                    </Typography>
                                    <List>
                                        {
                                            stepItems.map((item) => {
                                                return (
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <LabelImportant color="primary" />
                                                        </ListItemIcon>
                                                        <ListItemText primary={item} />
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
    );
}

export default ManualPage;
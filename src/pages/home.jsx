import {
    Container,
    Typography,
    Button,
    Grid,
    Box,
} from "@mui/material";

import iPhonePicture from "../assets/images/iphone.png";

const HomePage = () => {
    return (
        <Box>
            <Grid
                container
                spacing={1}
            >
                <Grid
                    md={6}
                    sm={6}
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
                            >
                                TFA Mobile
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    md={6}
                    sm={6}
                    xs={12}
                    item
                >
                    <Box
                        sx={{
                            height: "100vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: `linear-gradient(to bottom left, #607d8b 50%, #f8fbff 50%)`,
                        }}
                    >
                        <Box
                            component="img"
                            alt="iPhone"
                            sx={{
                                height: "75%"
                            }}
                            src={iPhonePicture}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomePage;
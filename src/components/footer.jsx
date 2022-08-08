import {
    Box,
    Container,
    Toolbar,
    Typography,
} from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ bgcolor: "primary.main" }}>
            <Container>
                <Toolbar>
                    <Typography
                        variant="body1"
                        fontWeight="bold"
                        sx={{
                            color: "white",
                        }}
                    >
                        TFAsoft {new Date().getFullYear()} &copy;
                    </Typography>
                </Toolbar>
            </Container>
        </Box>
    );
}

export default Footer;
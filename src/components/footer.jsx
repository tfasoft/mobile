import {
    Box,
    Container,
    Toolbar,
    Typography,
    Button,
} from "@mui/material";

const linkItems = [
    {
        "title": "TFAsoft",
        "href": "https://tfasoft.amirhossein.info"
    },
    {
        "title": "Dashboard",
        "href": "https://dashboard.amirhossein.info"
    },
    {
        "title": "Docs",
        "href": "https://docs.amirhossein.info"
    },
    {
        "title": "Blog",
        "href": "https://blog.amirhossein.info"
    },
    {
        "title": "Demo",
        "href": "https://demo.amirhossein.info"
    },
];

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
                            flexGrow: 1,
                        }}
                    >
                        TFAsoft {new Date().getFullYear()} &copy;
                    </Typography>
                    {
                        linkItems.map((item) => {
                            return (
                                <Button
                                    variant="text"
                                    color="inherit"
                                    href={item.href}
                                    sx={{
                                        color: "white"
                                    }}
                                >
                                    {item.title}
                                </Button>
                            );
                        })
                    }
                </Toolbar>
            </Container>
        </Box>
    );
}

export default Footer;
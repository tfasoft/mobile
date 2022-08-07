import {
    AppBar,
    Toolbar,
    Container,
    Typography,
    Button,
} from "@mui/material";

const Navbar = () => {
    return (
        <AppBar
            elevation={0}
        >
            <Container>
                <Toolbar>
                    <Typography
                        variant="h5"
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        TFA Mobile
                    </Typography>
                    <Button
                        variant="text"
                        color="inherit"
                    >
                        TFAsoft
                    </Button>
                    <Button
                        variant="text"
                        color="inherit"
                    >
                        Docs
                    </Button>
                    <Button
                        variant="text"
                        color="inherit"
                    >
                        Blog
                    </Button>
                    <Button
                        variant="text"
                        color="inherit"
                    >
                        Manual
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
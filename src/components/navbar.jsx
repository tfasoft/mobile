import { useHistory } from "react-router-dom";

import {
    AppBar,
    Toolbar,
    Container,
    Typography,
    Button,
} from "@mui/material";

const navItems = [
    {
        title: "Manual",
        route: "/manual",
    },
    {
        title: "Policy",
        route: "/policy",
    },
];

const Navbar = () => {
    const history = useHistory();

    return (
        <AppBar
            elevation={0}
        >
            <Container>
                <Toolbar>
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
                    {
                        navItems.map((item) => {
                            return (
                                <Button
                                    variant="text"
                                    color="inherit"
                                    onClick={() => history.push(item.route)}
                                >
                                    {item.title}
                                </Button>
                            );
                        })
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;
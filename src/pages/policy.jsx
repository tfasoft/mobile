import {
    Box,
    Typography,
} from "@mui/material";

const PolicyPage = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Typography
                variant="h3"
                fontWeight="bold"
                color="primary"
            >
                Policy, coming soon.
            </Typography>
        </Box>
    );
}

export default PolicyPage;
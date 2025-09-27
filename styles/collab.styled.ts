import { Box, styled } from "@mui/material";

export const CollabSection = styled(Box)(({ theme })=>({
    padding: "70px 0",
    '& .MuiGrid-container:nth-of-type(odd) img': {
        marginRight: "40px",
        float: "right",
    },
    '& .MuiGrid-container:nth-of-type(even) img': {
        marginLeft: "40px",
    },
    '& .MuiGrid-container:nth-of-type(even) ': {
        textAlign: "right",
        flexDirection: "row-reverse",
    },
    '& .MuiGrid-container': {
        marginBottom: "80px",
    },
    '& .MuiGrid-container:last-child': {
        marginBottom: 0,
    },
    [theme.breakpoints.down('sm')]: {
        padding: "30px 35px",
        '& .MuiGrid-container': {
            justifyContent: "center",
            marginBottom: "30px"
        },
        '& .MuiGrid-container:nth-of-type(odd) img': {
            float: "unset",
            marginRight: 0
        },
        '& .MuiGrid-container:nth-of-type(even) img': {
            marginLeft: 0,
        },
        '& .MuiGrid-container:nth-of-type(even) ': {
            textAlign: "left",
        },
    }
}))
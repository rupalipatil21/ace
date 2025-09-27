import { ShareInstaBox } from "@/styles/common.styled";
import { Link, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';

export default function ShareInsta({isOnWhiteBg}:any){
    return(
        <ShareInstaBox>
            <Typography variant="shareText" color={isOnWhiteBg ? "custom.black" : "custom.menu"}>Share</Typography>
            <Link
                href="https://www.instagram.com/allcareforeveryone/?hl=en"
                variant="shareText"
                color={isOnWhiteBg ? "custom.black" : "custom.menu"}
            >
                <InstagramIcon />
                instagram
            </Link>
            <Typography variant="shareText" color={isOnWhiteBg ? "custom.black" : "custom.menu"}>#EQUALITYFOREVERYONE</Typography>
        </ShareInstaBox>
    )
}
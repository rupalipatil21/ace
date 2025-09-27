import { ClubList } from "@/styles/ace.styled";
import { Box, ListItem, Typography } from "@mui/material";

export default function ListDesign({ lists, volunteer }:any){
    return(
        <Box>
            <ClubList volunteer={volunteer}>
                {
                    
                    lists.map((list:any, index:any)=>(
                        <ListItem disablePadding key={index}>
                            <Typography variant="a1" letterSpacing="0">{list}</Typography>
                        </ListItem>
                    ))
                }
            </ClubList>
        </Box>
    )
}
"use client"
import { Leader } from "@/styles/ace.styled";
import { Box, Typography } from "@mui/material";

export default function QuoteBox({aboutquote, collabquote, sponsorquote, fashionquote, rainquote}:any){
    return(
        <Leader aboutquote={aboutquote} collabquote={collabquote} sponsorquote={sponsorquote} homequote="true" fashionquote={fashionquote} rainquote={rainquote}>
            <Box>
                <Typography
                    color="custom.menu"
                    variant={aboutquote || collabquote || sponsorquote || fashionquote || rainquote ? "aboutQuote" : "quoteTitle" }
                    mb={ aboutquote || collabquote || sponsorquote || fashionquote || rainquote ? "10px" : "32px" }
                >
                    { 
                        aboutquote ? "“By education, I mean an all-round drawing out of the best in child and man, in body, mind and spirit.” " 
                        : collabquote ? "“Small acts, when multiplied by millions of people, can transform the world. ”"
                        : sponsorquote ? '"The highest education is that which does not merely give us information but makes our life in harmony with all existence."'
                        : fashionquote ? "“In a gentle way, you can shake the world.”"
                        : rainquote ? '“If love is universal, no one can be left out."'
                        : "Today A Reader, Tomorrow A Leader"
                    }
                </Typography>
                
                <Typography variant={aboutquote || collabquote || sponsorquote || fashionquote || rainquote ? "quoteName2" : "quoteName"} color="custom.menu">
                    { 
                        aboutquote || fashionquote ? "MAHATMA GANDHI" 
                        : collabquote ? "HOWARD ZINN"
                        : sponsorquote ?  "RABINDRANATH TAGORE"
                        : rainquote ? "DEEPAK CHOPRA"
                        : "Margaret Fuller" }
                </Typography>
            </Box>
        </Leader>
    )
}
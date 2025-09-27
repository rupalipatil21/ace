"use client"
import { Box, Grid, Typography, ListItem } from "@mui/material";
import {
  Sectingtext,
  ServingTextTypo,
  SectingtextLeft,
  TimeList,
} from "../../styles/ace.styled";
import { theme } from "../../styles/theme";
import Image from "next/image";
import t1 from '@/public/images/aceBookClub/t1.jpg'
import t2 from '@/public/images/aceBookClub/t2.jpg'
import t3 from '@/public/images/aceBookClub/t3.jpg'
import { GridContainer } from "@/styles/common.styled";

export default function TimeLine() {
  return (
    <Box padding={{ xs: "0 20px", sm: 0}}>
      <Grid sx={{ flexGrow: 1 }} container spacing={5} rowSpacing={{xs: 0, sm: "80px"}}>
        <Grid size={12}>
          <GridContainer container gap="0px" >
            <Grid size={{xs: 12, sm: 5, lg:3}} position="relative">
              <Image
                src={t1}
                alt="image 1"
              />
            </Grid>
            <Grid size={{xs: 12, sm: 6, lg:3}}>
              <Sectingtext textAlign={"center"}>
                <ServingTextTypo
                  component="p"
                  variant="servingtext"
                  color={theme.palette.custom?.black}
                >
                  Serving <Typography variant="yellospan">7</Typography> Schools
                </ServingTextTypo>
                <TimeList >
                  <ListItem>
                   <Typography variant="visionPara" > SSM Shivaji Vidyalaya MCM Girls&apos; School</Typography>
                  </ListItem>
                  <ListItem><Typography variant="visionPara" > SSM Shivaji Vidyalaya Boys&apos; School </Typography></ListItem>
                  <ListItem><Typography variant="visionPara" > SSM Shivaji Vidyalaya Primary School</Typography></ListItem>
                  <ListItem><Typography variant="visionPara" > Castle Black International School</Typography></ListItem>
                  <ListItem><Typography variant="visionPara" > Ahilya Vidyamandir School</Typography></ListItem>
                  <ListItem><Typography variant="visionPara" > N. M. Babasaheb Gawade School</Typography></ListItem>
                  <ListItem><Typography variant="visionPara" > K. M. S. Dr. Shirodkar High School</Typography></ListItem>
                </TimeList>
              </Sectingtext>
            </Grid>
          </GridContainer>
        </Grid>
        <Grid size={12}>
          <GridContainer container flexDirection={{xs: "column-reverse", sm: "row"}}>
            <Grid size={{xs: 12, sm: 5, lg:3}}>
              <SectingtextLeft textAlign={"right"}>
                <Typography variant="servingtext" component="p">
                  Educating{" "}
                </Typography>
                <Typography
                  variant="yellospan"
                  display={"block"}
                  margin={{sm: "15px 0"}}
                >
                  2,100 +
                </Typography>
                <Typography variant="servingtext" component="p">
                  Students
                </Typography>
              </SectingtextLeft>
            </Grid>
            <Grid size={{xs: 12, sm: 5, lg:3}} position="relative">
              <Image
                src={t2}
                alt="image"
              />
            </Grid>
          </GridContainer>
        </Grid>
        <Grid size={12}>
          <GridContainer container>
            <Grid size={{xs: 12, sm: 5, lg:3}} position="relative">
              <Image
                src={t3}
                alt="image"
              />
            </Grid>
            <Grid size={{xs: 12, sm: 5, lg:3}}>
              <SectingtextLeft mb={{xs: "0px"}}>
                <Typography variant="servingtext" component="p">
                  Over{" "}
                </Typography>
                <Typography
                  variant="yellospan"
                  display={"block"}
                  margin={{sm: "15px 0"}}
                >
                  10,000
                </Typography>
                <Typography variant="servingtext" component="p" mb={2}>
                  Books
                </Typography>
                <Typography variant="h6Name">
                  In English and 12 Regional Languages
                </Typography>
              </SectingtextLeft>
            </Grid>
          </GridContainer>
        </Grid>
      </Grid>
    </Box>
  );
}

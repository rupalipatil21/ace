"use client"
import { Grid, CardMedia, Typography, Container } from "@mui/material";
import { H1Typo, HowItWork, LeftGrid, RightBox, RightGrid, Section } from "../../styles/ace.styled";
import Image from "next/image";
import curationImg from "../../public/images/aceBookClub/curation-of-books.png";
import QuoteBox from "../common/quoteBox";

export default function HowItWorks() {
  return (
    <>
      <HowItWork>
        <Grid container>
          <Grid size={{xs: 12, md:5}}>
            <CardMedia
              className="w-100"
              component="img"
              src="../../images/aceBookClub/how.jpg"
            ></CardMedia>
          </Grid>
          <Grid size={{xs: 12, md:7}} margin={"auto"}>
            <RightBox >
              <H1Typo variant="h11" sx={{ textAlign: "left" }}>
                <Typography component="span" variant="italic">
                  How
                </Typography>{" "}
                It Works ?
              </H1Typo>
              <Typography variant="aceinfoP">
                The ACE Book Club is essentially a community and a mobile
                library. It is a van filled with around 10,000 beloved books,
                donated by children so that more youngsters can experience the
                joy of reading and being part of a community. Each week, the van
                travels through Mumbai, offering underserved children open
                access to the library and opportunities to share ideas with
                other children and volunteers.
              </Typography>
              <Typography variant="aceinfoP">
                The van follows a schedule to serve 7 Brihanmumbai Municipal
                Corporation (BMC) schools where children can borrow or return
                books and participate in the creative club workshops organized.
              </Typography>
            </RightBox>
          </Grid>
        </Grid>
      </HowItWork>
      <QuoteBox />
      <Section>
        <Container maxWidth="lg" disableGutters>
          <Grid container alignItems={"center"}>
            <LeftGrid size={{xs: 12, md:5}}>
              <H1Typo variant="h11" sx={{ textAlign: "left" }}>
                <Typography component="span" variant="italic">
                  Curation{" "}
                </Typography>{" "}
                of books
              </H1Typo>
              <Typography variant="aceinfoP" component="p">
                We have worked with mentors in the space of rural education and
                learning to ensure that the books we offer will be relatable ,
                exciting and that there will always be something for every child
                across languages, age categories, backgrounds and genre. We are
                also working with local authors , book store owners and
                publishers to ensure that our offerings are always contextually
                relevant.
              </Typography>
            </LeftGrid>
            <RightGrid size={{xs: 12, md:7}}>
              <Image src={curationImg} alt="Curation of Books" />
            </RightGrid>
          </Grid>
        </Container>
      </Section>
    </>
  );
}

"use client"
import FormDesign from "@/components/common/formDesign";
import VerticalTextColorChanger from "@/components/common/VerticalTextColorChanger";
import ReachUs from "@/components/contact/reachUs";
import Volunteer from "@/components/contact/volunteer";
import { SectionObserverProvider } from "@/context/SectionObserverContext";
import { H1Typo } from "@/styles/ace.styled";
import { BgImageBox, ContactBox} from "@/styles/common.styled";
import { Container, Typography } from "@mui/material";

export default function Page() {
    return(
        <SectionObserverProvider>
            <VerticalTextColorChanger />
            <Container maxWidth={false} disableGutters>
                <BgImageBox contactbanner="true">
                    <Container maxWidth="lg" disableGutters>
                        <ContactBox>
                            <H1Typo variant="h11" >We would <Typography variant="italic">love to hear</Typography> from you!</H1Typo>
                            <FormDesign />
                        </ContactBox>
                    </Container>
                </BgImageBox>
            </Container>
            <Volunteer />
            <ReachUs />
        </SectionObserverProvider>
    )
}
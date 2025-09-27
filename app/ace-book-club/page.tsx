"use client";
import TopSection from "../../components/ace-book-club/topSection";
import TimeLine from "../../components/ace-book-club/timeline";
import HowItWorks from "../../components/ace-book-club/howItWorks";
import CreativeClub from "@/components/ace-book-club/creativeClub";
import Donate from "@/components/ace-book-club/donate";
import Testimonials from "@/components/ace-book-club/testimonials";
import { SectionObserverProvider } from "@/context/SectionObserverContext";

export default function Home() {
  return (
    <SectionObserverProvider>
      <TopSection />
      <TimeLine />
      <Testimonials />
      <HowItWorks />
      <CreativeClub />
      <Donate />
    </SectionObserverProvider>
  );
}

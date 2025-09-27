"use client";

import { ThemeProvider } from "@emotion/react";
// import { usePathname } from "next/navigation";
import { theme } from "../../styles/theme";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {

  // const pathname = usePathname();
  // const noHeaderPaths = [
  //   "/login",
  //   "/dashboard",
  //   "/career-enquiry",
  //   "/contact-enquiry",
  // ];
  // const shouldShowHeader = !noHeaderPaths.includes(pathname);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        {/* <ShareInsta /> */}
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
}

import React from "react";
import Header from "./header";
import { Box } from "@chakra-ui/react";
import LayoutNewsLater from "./NewsLater";
import Footer from "./footer";

function DefaultLayout({ desktopComponent, tabletComponent, mobileComponent }) {
  return (
    <Box overflow='hidden'>
      <Header />
      <Box display={{ lg: "block", base: "none" }}>{desktopComponent}</Box>
      <Box display={{ md: "block", base: "none" }}></Box>
      <Box display={{ sm: "block", base: "none" }}></Box>
      <LayoutNewsLater />
      <Footer />
    </Box>
  );
}

export default DefaultLayout;

import React from "react";
import Header from "./header";
import { Box } from "@chakra-ui/react";
import LayoutNewsLater from "./NewsLater";
import Footer from "./footer";

function DefaultLayout({ desktopComponent, tabletComponent, mobileComponent }) {
  return (
    <Box overflow="hidden">
      <Header />
      {/* <Box display={{ lg: "block" }}>{desktopComponent}</Box>
      <Box display={{ md: "block" }}></Box>
      <Box display={{ sm: "block" }}></Box> */}
      {/* <LayoutNewsLater /> */}
      <Footer />
    </Box>
  );
}

export default DefaultLayout;

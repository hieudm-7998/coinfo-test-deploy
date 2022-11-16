import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import Header from "./header";
import Footer from "./footer";

export default function NewsDetailLayout({ children }) {
  const router = useRouter();
  return (
    <ChakraProvider>
      <Header />
      <div className="container-fluid">{children}</div>
      <Footer />
    </ChakraProvider>
  );
}

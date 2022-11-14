import React from "react";
import Link from "next/link";
import {
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Grid,
  GridItem,
  ChakraProvider,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import Header from "./header";
import Footer from "./footer";
import MenuBar from "../news-detail/menu-bar/MenuBar";

export default function NewsLayout({ children }) {
  const router = useRouter();
  return (
    <ChakraProvider>
      <Header />
      <Container>
        <MenuBar />
      </Container>
      {children}
      <Footer />
    </ChakraProvider>
  );
}

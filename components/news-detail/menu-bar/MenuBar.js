import React, { useEffect } from "react";
import Link from "next/link";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import Nav from "react-bootstrap/Nav";

const menuItems = [
  {
    name: "Tin mới",
    link: "/news/tin-moi",
  },
  {
    name: "Tin nóng",
    link: "/news/tin-nong",
  },
  {
    name: "Bitcoin",
    link: "/news/bitcoin",
  },
  {
    name: "Altcoin",
    link: "/news",
  },
  {
    name: "Defi",
    link: "/news",
  },
  {
    name: "NFT",
    link: "/news",
  },
];

function MenuBar(props) {
  const router = useRouter();

  return (
    // <Grid p={5} templateColumns="repeat(3, 1fr)" gap={4}>
    //   <GridItem colSpan={2}>
    //     <Flex align="center" gap={10}>
    //       {menuItems.map((item, index) => {
    //         return (
    //           <Link
    //             href={item.link}
    //             fontSize="23px"
    //             className={router.pathname == item.link ? "active" : ""}
    //             // color={  :"#8E9BAE"}
    //             key={index}
    //           >
    //             {item.name}
    //           </Link>
    //         );
    //       })}
    //     </Flex>
    //   </GridItem>
    //   <GridItem colSpan={1}>
    //     <InputGroup className="seach-block">
    //       <InputLeftElement
    //         pointerEvents="none"
    //         children={<SearchIcon color="#8E9BAE" />}
    //       />
    //       <Input type="tel" placeholder="Search..." bg="#F3F3F3" rounded={50} />
    //     </InputGroup>
    //   </GridItem>
    // </Grid>
    <Nav className="justify-content-between align-items-center py-3">
      <div className="d-flex">
        <Link href="/news/tin-moi" passHref>
          <Nav.Link
            className={
              router.pathname == `/news/tin-moi` ? "news-link-active" : ""
            }
            style={{ fontSize: "1.5rem", color: "#8E9BAE" }}
          >
            News
          </Nav.Link>
        </Link>
        <Link href="/news/tin-nong" fontSize="23px" passHref>
          <Nav.Link
            className={
              router.pathname == `/news/tin-nong` ? "news-link-active" : ""
            }
            style={{ fontSize: "1.5rem", color: "#8E9BAE" }}
          >
            Bitcoin
          </Nav.Link>
        </Link>
        <Link href="/news/bitcoin" fontSize="23px" passHref>
          <Nav.Link
            className={
              router.pathname == `/news/bitcoin` ? "news-link-active" : ""
            }
            style={{ fontSize: "1.5rem", color: "#8E9BAE" }}
          >
            Altcoin
          </Nav.Link>
        </Link>
        <Link href="/news/altcoin" fontSize="23px" passHref>
          <Nav.Link
            className={
              router.pathname == `/news/altcoin` ? "news-link-active" : ""
            }
            style={{ fontSize: "1.5rem", color: "#8E9BAE" }}
          >
            Defi
          </Nav.Link>
        </Link>
        <Link href="/news/defi" fontSize="23px" passHref>
          <Nav.Link
            className={
              router.pathname == `/news/defi` ? "news-link-active" : ""
            }
            style={{ fontSize: "1.5rem", color: "#8E9BAE" }}
          >
            NFT
          </Nav.Link>
        </Link>
        <Link href="/news/nft" fontSize="23px" passHref>
          <Nav.Link
            className={router.pathname == `/news/nft` ? "news-link-active" : ""}
            style={{ fontSize: "1.5rem", color: "#8E9BAE" }}
          >
            Trending
          </Nav.Link>
        </Link>
      </div>
      <div>
        <InputGroup>
          <InputLeftElement children={<SearchIcon color="#8E9BAE" />} />
          <Input type="text" placeholder="Search..." />
        </InputGroup>
      </div>
    </Nav>
  );
}

export default MenuBar;

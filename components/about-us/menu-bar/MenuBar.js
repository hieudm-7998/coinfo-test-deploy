import React from "react";
import {
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
const menuItems = [
  {
    name: "Tin mới",
    link: "news",
  },
  {
    name: "Tin nóng",
    link: "news",
  },
  {
    name: "Bitcoin",
    link: "news",
  },
  {
    name: "Altcoin",
    link: "news",
  },
  {
    name: "Defi",
    link: "news",
  },
  {
    name: "NFT",
    link: "news",
  },
];

function MenuBar(props) {
  return (
    <Grid p={5} templateColumns="repeat(3, 1fr)" gap={4}>
      <GridItem colSpan={2}>
        <Flex align="center" gap={10}>
          {menuItems.map((item, index) => {
            return (
              <Text fontSize="23px" color="#8E9BAE" key={index}>
                {item.name}
              </Text>
            );
          })}
        </Flex>
      </GridItem>
      <GridItem colSpan={1}>
        <InputGroup className="seach-block">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="#8E9BAE" />}
          />
          <Input type="tel" placeholder="Search..." bg="#F3F3F3" rounded={50} />
        </InputGroup>
      </GridItem>
    </Grid>
  );
}

export default MenuBar;

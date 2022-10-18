import React from "react";
import PostItem from "../item/PostItem";
import RelatedPostItem from "../item/RelatedPostItem";
import { Grid, GridItem, Flex, Box, Img } from "@chakra-ui/react";

const relatedData = {
  user: {
    avatar: "/assets/images/mock-img/user-avatar.png",
    name: "COINFO Author",
  },
  image: "/assets/images/mock-img/image_demo.png",
  title: "Competitive Advantage in a Commoditized Industry",
  topic: "Bitcoin, Defi, NFT",
  channel: "Seeking Alpha",
  time: "11/03/22 | 20:00",
};

function TopNewsBanner({ data }) {
  return (
    <Grid p={5} pb={20} templateColumns="repeat(7, 1fr)" gap={20}>
      <GridItem position='relative' colSpan={4}>
        <Img src="/assets/images/mock-img/news-img.png" w="100%" />
        <Box position='absolute' bottom={-50} left='50%' transform='translate(-50%, 0)' w={3/4}>
        <div className="up-down-animation">
          <RelatedPostItem data={relatedData} />
          </div>
        </Box>
      </GridItem>
      <GridItem colSpan={3}>
        <Flex flexDirection="column" justifyContent="space-between" h="100%">
          {data.map((item, index) => {
            return <PostItem key={index} data={item} hasSocialIcons />;
          })}
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default TopNewsBanner;

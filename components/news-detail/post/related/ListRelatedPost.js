import React from "react";
import RelatedPostItem from "../item/RelatedPostItem";
import Pagination from "../../../common/Pagination.tsx";
import { Flex, Box, Img, Tag } from "@chakra-ui/react";

function ListRelatedPost({ listData }) {
  return (
    <Box>
      <Box position="relative" mb={10}>
        <Img src="/assets/images/mock-img/ads-img.png" w='100%' />
        <Tag
          position="absolute"
          top={4}
          right={4}
          p={3}
          rounded={10}
          variant="solid"
          bg="rgba(22, 92, 221, 1)"
          fontSize='18px'
        >
          Ads
        </Tag>
      </Box>
      <Flex flexDirection="column" gap={6} mb="70px">
        {listData.map((item, index) => {
          return <RelatedPostItem key={index} data={item} hasImage />;
        })}
      </Flex>
      <Pagination />
    </Box>
  );
}

export default ListRelatedPost;

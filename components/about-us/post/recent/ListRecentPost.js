import React from "react";
import PostItem from "../item/PostItem";
import styled from "styled-components";
import { Box, Text } from "@chakra-ui/react";

const PostBlock = styled.div``;

const ListRecentPost = ({ recentPostData }) => {
  return (
    <Box textAlign='center' px={6} py={3} bg='#f8fafc' rounded={20} mb={5} >
      <Text mb={4} fontWeight='bold' fontSize={32}>Recent Post</Text>
      <PostBlock>
        {recentPostData.map((item, index) => {
          return <PostItem key={index} data={item} />;
        })}
      </PostBlock>
    </Box>
  );
};

export default ListRecentPost;

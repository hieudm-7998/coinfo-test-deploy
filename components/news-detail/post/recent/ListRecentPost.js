import React from "react";
import PostItem from "../item/PostItem";
import styled from "styled-components";
import { Box, Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

const PostBlock = styled.div``;

const ListRecentPost = ({ recentPostData }) => {
  return (
    <div
      className="text-center px-3 py-3 mb-5"
      style={{ background: "#f8fafc", borderRadius: "20px" }}
    >
      <Grid>
        <GridItem>
          <Text mb={4} fontWeight="bold" fontSize={32}>
            Recent Post
          </Text>
        </GridItem>
        <GridItem>
          {recentPostData.map((item, index) => {
            return <PostItem key={index} data={item} />;
          })}
        </GridItem>
      </Grid>
    </div>
  );
};

export default ListRecentPost;

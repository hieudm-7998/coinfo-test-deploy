import React from "react";
import DefaultLayout from "../components/layout/default";
import ListRecentPost from "../components/news-detail/post/recent/ListRecentPost";
import StayInTouch from "../components/news-detail/StayInTouch";
import NewsDescription from "../components/news/NewsDescription";
import TagsBlock from "../components/news/TagsBlock";
import ContentBlock from "../components/news/ContentBlock";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { recentPostData } from "../constant/news/index";

const NewsPage = () => {
  const desktopComponent = (
    <Box mt={20} px={35}>
      <Grid templateColumns="repeat(10, 1fr)" gap={20}>
        <GridItem colSpan={2}>
          <Box mb={6}>
            <ContentBlock />
          </Box>
          <TagsBlock />
        </GridItem>
        <GridItem colSpan={5}>
          <NewsDescription />
        </GridItem>
        <GridItem colSpan={3}>
          <ListRecentPost recentPostData={recentPostData} />
          <StayInTouch />
        </GridItem>
      </Grid>
    </Box>
  );

  return <DefaultLayout desktopComponent={desktopComponent} />;
};
export default NewsPage;

import React from "react";
import DefaultLayout from "../components/layout/default";
import ListRecentPost from "../components/about-us/post/recent/ListRecentPost";
import StayInTouch from "../components/about-us/StayInTouch";
import TrendTopicSwiper from "../components/about-us/TrendTopicSwiper";
import MenuBar from "../components/about-us/menu-bar/MenuBar";
import TopNewsBanner from "../components/about-us/post/news-banner/TopNewsBanner";
import ListRealatedPost from "../components/about-us/post/related/ListRelatedPost";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import {
  recentPostData,
  trendingTopics,
  relatedPost,
} from "../constant/news/index";

const AboutUs = () => {
  const desktopComponent = (
    <Box w={4 / 5} mx="auto">
      <MenuBar />
      <TopNewsBanner data={recentPostData} />
      <TrendTopicSwiper title="Learn2Earn" data={trendingTopics} />
      <Grid pt={20} templateColumns="repeat(3, 1fr)" gap={20}>
        <GridItem colSpan={2}>
          <ListRealatedPost listData={relatedPost} />
        </GridItem>
        <GridItem colSpan={1}>
          <ListRecentPost recentPostData={recentPostData} />
          <StayInTouch />
        </GridItem>
      </Grid>
    </Box>
  );

  return <DefaultLayout desktopComponent={desktopComponent} />;
};
export default AboutUs;

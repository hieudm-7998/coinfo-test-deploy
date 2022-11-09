import React from "react";
import ListRecentPost from "../../components/news-detail/post/recent/ListRecentPost";
import StayInTouch from "../../components/news-detail/StayInTouch";
import TrendTopicSwiper from "../../components/news-detail/TrendTopicSwiper";
import TopNewsBanner from "../../components/news-detail/post/news-banner/TopNewsBanner";
import ListRealatedPost from "../../components/news-detail/post/related/ListRelatedPost";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import {
  recentPostData,
  trendingTopics,
  relatedPost,
} from "../../constant/news/index";
import dynamic from "next/dynamic";
const NewsLayout = dynamic(() => import("../../components/layout/News"), {
  ssr: false,
});

export default function News() {
  return (
    <>
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
    </>
  );
}

News.getLayout = function getLayout(page) {
  return <NewsLayout>{page}</NewsLayout>;
};

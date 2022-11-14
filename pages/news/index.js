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
    <div>
      <div className="container">
        <TopNewsBanner data={recentPostData} />
      </div>
      <TrendTopicSwiper title="Learn2Earn" data={trendingTopics} />
      <div className="container">
        <div className="row my-5">
          <div className="col-12 col-md-8">
            <ListRealatedPost listData={relatedPost} />
          </div>
          <div className="col-12 col-md-4">
            <ListRecentPost recentPostData={recentPostData} />
            <StayInTouch />
          </div>
        </div>
      </div>
    </div>
  );
}

News.getLayout = function getLayout(page) {
  return <NewsLayout>{page}</NewsLayout>;
};

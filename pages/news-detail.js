import React from "react";
import ListRecentPost from "../components/news-detail/post/recent/ListRecentPost";
import StayInTouch from "../components/news-detail/StayInTouch";
import NewsDescription from "../components/news/NewsDescription";
import TagsBlock from "../components/news/TagsBlock";
import ContentBlock from "../components/news/ContentBlock";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { recentPostData } from "../constant/news/index";
import dynamic from "next/dynamic";
const NewsDetailLayout = dynamic(
  () => import("../components/layout/NewsDetail"),
  {
    ssr: false,
  }
);

export default function NewsDetailPage() {
  return (
    <div className="row py-5">
      <div className="col-xl-3 col-12 mb-5">
        <Box className="mb-3">
          <ContentBlock />
        </Box>
        <TagsBlock />
      </div>
      <div className="col-xl-6 col-12">
        <NewsDescription />
      </div>
      <div className="col-xl-3 col-12">
        <ListRecentPost recentPostData={recentPostData} />
        <StayInTouch />
      </div>
    </div>
  );
}

NewsDetailPage.getLayout = function getLayout(page) {
  return <NewsDetailLayout>{page}</NewsDetailLayout>;
};

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
    <div className="row" style={{ marginBottom: "100px" }}>
      <div className="col-12 col-md-6 position-relative news-top-banner">
        <img src="/assets/images/mock-img/news-img.png" className="img-fluid" />
        <div className="news-top-new-popup">
          <div className="up-down-animation">
            <RelatedPostItem data={relatedData} />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 position-relative">
        <div className="d-flex flex-column justify-content-between align-items-center">
          {data.map((item, index) => {
            return <PostItem key={index} data={item} hasSocialIcons />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TopNewsBanner;

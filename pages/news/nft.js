import React from "react";
import NewsLayout from "../../components/layout/News";

export default function NFT() {
  return <div>NFT</div>;
}

NFT.getLayout = function getLayout(page) {
  return <NewsLayout>{page}</NewsLayout>;
};

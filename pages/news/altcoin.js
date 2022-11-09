import React from "react";
import NewsLayout from "../../components/layout/News";

export default function AltCoin() {
  return <div>AltCoin</div>;
}

AltCoin.getLayout = function getLayout(page) {
  return <NewsLayout>{page}</NewsLayout>;
};

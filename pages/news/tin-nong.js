import React from "react";
import NewsLayout from "../../components/layout/News";

export default function tinNong() {
  return <div>tin nong</div>;
}

tinNong.getLayout = function getLayout(page) {
  return <NewsLayout>{page}</NewsLayout>;
};

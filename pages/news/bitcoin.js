import React from "react";
import NewsLayout from "../../components/layout/News";

export default function Bitcoin() {
  return <div>Bitcoin</div>;
}

Bitcoin.getLayout = function getLayout(page) {
  return <NewsLayout>{page}</NewsLayout>;
};

import React from "react";
import NewsLayout from "../../components/layout/News";

export default function tinMoi() {
  return <div>tin-moi</div>;
}

tinMoi.getLayout = function getLayout(page) {
  return <NewsLayout>{page}</NewsLayout>;
};

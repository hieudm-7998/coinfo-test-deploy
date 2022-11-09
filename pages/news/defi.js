import React from "react";
import NewsLayout from "../../components/layout/News";

export default function Defi() {
  return <div>Defi</div>;
}

Defi.getLayout = function getLayout(page) {
  return <NewsLayout>{page}</NewsLayout>;
};

import React from "react";
import Header from "/components/layout/header";
import TopBanner from "/components/about-us/TopBanner";
import CustomerSlide from "/components/about-us/CustomerSlide";
import CustomerFeedback from "/components/about-us/CustomerFeedback";
import JobHiring from "/components/about-us/JobHiring";
import NewsLater from "/components/home/NewsLater";
import Footer from "/components/layout/footer";

function aboutUs() {
  return (
    <div>
      <Header />
      <TopBanner />
      <CustomerSlide />
      <CustomerFeedback />
      <JobHiring />
      <NewsLater />
      <Footer />
    </div>
  );
}

export default aboutUs;

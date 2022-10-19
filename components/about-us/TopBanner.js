import React from "react";

const TopBannerVariant = [
  {
    icon: "/assets/images/abu-vision.png",
    heading: "Our Vision",
    info: "With you coding your freedom and unlocking your potential passive income.",
  },
  {
    icon: "/assets/images/abu-mission.png",
    heading: "Our Mission",
    info: "Application for you to invest smarter, trade wiser.",
  },
  {
    icon: "/assets/images/abu-value.png",
    heading: "Our Value",
    info: "Dedicated to giving you the best plan and strategies in investment and trading.",
  },
];

function TopBanner() {
  return (
    <div className="abu-topbanner">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h1 className="abu-leftcol-heading">Welcome to COINFO</h1>
            <p className="abu-leftcol-info">
              We’ve gathered trending insight news and trade signal to keep you
              on the fast track to trading success.
            </p>
            <button className="abu-leftcol-button btn btn-primary">
              Get in touch with us
            </button>
          </div>
          <div className="col-lg-4">
            <img
              className="img-fluid"
              src="/assets/images/aboutus-topbanner.png"
              alt=""
            />
          </div>
          <div className="col-lg-4">
            <h1 className="abu-rightcol-heading">Core Principles</h1>
            <h1 className="abu-rightcol-heading mb-5">
              Platform <span className="abu-span">Work!</span>
            </h1>
            {TopBannerVariant.map((item, index) => {
              return (
                <div className="abu-banner-value" key={index}>
                  <div>
                    <img src={item.icon} alt="" />
                  </div>
                  <div>
                    <h1>{item.heading}:</h1>
                    <p>{item.info}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;

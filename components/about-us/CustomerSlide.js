import React from "react";
import Slider from "react-slick";

function CustomSlide(props) {
  return (
    <div className="abu-customer-slide-block">
      <div className="abu-customer-slide-block-info">
        <div>
          <h1>Thien Nguyen</h1>
          <p>Project Management</p>
        </div>
        <div className="d-flex">
          <img
            style={{ marginRight: 3 + "px" }}
            src="/assets/images/linkedin.png"
            alt=""
          />
          <img src="/assets/images/twitter.png" alt="" />
        </div>
      </div>
      {/* <img
        className="img-fluid"
        src={`/assets/images/team-member-${props.index}.png`}
        alt=""
      /> */}
      <img
        className="img-fluid rounded"
        src={`/assets/images/dummy-profile-pic.jpg`}
        alt=""
      />
    </div>
  );
}

export default function CustomerSlide() {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    arrows: false,
  };
  return (
    <div className="abu-customer-slide">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 px-3">
            <Slider {...settings}>
              <CustomSlide index={1} />
              <CustomSlide index={2} />
              <CustomSlide index={3} />
            </Slider>
          </div>
          <div className="col-12 col-md-6 px-3 pt-5 bg-ourteam">
            <h1 className="abu-customer-slider-heading">COINFO Team</h1>
            <h1 className="abu-customer-slider-heading mb-3">
              <span>Destination</span> of Us!
            </h1>
            <p className="abu-customer-slider-info mb-3">
              We aim for a better understanding of the economics of
              cryptocurrencies before you begin your path to crypto trading.
              Minimum risk and maximum reward using some simple but effective
              technical analysis techniques.
            </p>
            <button className="btn btn-primary abu-customer-slide-viewall-btn">
              View All →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

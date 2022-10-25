import React from "react";
// import { Badge } from "@chakra-ui/react";
import Slider from "react-slick";

function CustomSlide() {
  return (
    <div className="abu-job-block">
      <div className="abu-job-block-header mb-3 d-flex justify-content-between align-items-center">
        <span className="abu-job-post-badge">Digital Marketing</span>
        <p>13h ago</p>
      </div>
      <div className="abu-job-block-body">
        <h1 className="mb-3">Associate Product Marketing Consumer Marketing</h1>
        <div className="d-flex mb-5">
          <div className="d-flex align-items-center me-5">
            <img
              className="me-1"
              src="/assets/images/abu-time-icon.png"
              alt=""
            />
            <p>Part Time</p>
          </div>
          <div className="d-flex align-items-center">
            <img
              className="me-1"
              src="/assets/images/abu-location-icon.png"
              alt=""
            />
            <p>Tokyo, Japan</p>
          </div>
        </div>
      </div>
      <div className="abu-job-block-footer">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              className="me-2"
              src="/assets/images/abu-job-avatar.png"
              alt=""
            />
            <h1>Umasta</h1>
          </div>
          <div className="d-flex align-items-center">
            <p>Apply Now</p>
            <img src="/assets/images/abu-job-apply.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function JobHiring() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    dots: true,
  };

  return (
    <div className="abu-job-bg">
      <div className="container abu-job">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h1 className="abu-job-heading">
              Work <span className="brd-btm-blue">with Us!</span>
            </h1>
            <h2 className="abu-job-subheading">Open vacancies</h2>
          </div>
          <button className="btn abu-job-viewalljob">View All Job</button>
        </div>
        <div>
          <Slider {...settings}>
            <CustomSlide />
            <CustomSlide />
            <CustomSlide />
            <CustomSlide />
            <CustomSlide />
            <CustomSlide />
          </Slider>
        </div>
      </div>
    </div>
  );
}

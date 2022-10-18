import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { data } from "/constant/CustomerFeedback/index.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HomeDuelSlider = () => {
  const imgSliderRef = useRef(null);
  const txtSliderRef = useRef(null);
  const sliderRef = useRef();
  const [swiperIndex, setSwiperIndex] = useState(0);

  useEffect(() => {
    sliderRef.current.swiper.slideTo(swiperIndex);
  }, [swiperIndex]);

  const TextSliderSetting = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 1000,
    arrows: false,
  };

  const TextSliderSettingMobile = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    speed: 1000,
    arrows: false,
  };

  const ImgSliderSetting = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: false,
    arrows: false,
    speed: 1000,
  };

  // prev slider
  function PrevSlider() {
    imgSliderRef.current.slickPrev();
    txtSliderRef.current.slickNext();
  }

  function NextSlide() {
    imgSliderRef.current.slickNext();
    txtSliderRef.current.slickPrev();
  }

  return (
    <>
      <div className="testimonial-area testimonial-hrrd positioning pt-100 d-lg-block d-none d-sm-none">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 wow animate fadeInUp"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
            >
              <div className="testimonial-content-slide-wrap feedback-customer">
                {/* <Slider {...TextSliderSetting} ref={txtSliderRef}>
                  <div className="testimonial-content-slide-box">
                    <h2>
                      “I’ve downloadeddd Chakri from my Google Play about 1
                      years ago. Chakri make the prototyping process so easy and
                      faster. I feel this is the best apps for Prototyping use”
                    </h2>
                    <p>— Ferdinand Stingo - Co Founder of CocoPay Company</p>
                  </div>
                  <div className="testimonial-content-slide-box">
                    <h2>
                      “I’ve downloaded Chakri from my Google Play about 1 years
                      ago. Chakri make the prototyping process so easy and
                      faster. I feel this is the best apps for Prototyping use”
                    </h2>
                    <p>— Ferdinand Stingo - Co Founder of CocoPay Company</p>
                  </div>
                </Slider> */}
                <Swiper
                  onSlideChange={(swiper) => setSwiperIndex(swiper.activeIndex)}
                  ref={sliderRef}
                >
                  {data.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="p-4">
                          <p className="customer-description">
                            {item.description_text}
                          </p>
                          <p className="customer-name">{item.user_name}</p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <div className="tcsb_nav">
                  <button
                    onClick={() => setSwiperIndex(swiperIndex - 1)}
                    disabled={swiperIndex === 0}
                    className={swiperIndex === 0 ? "grey-disabled" : ""}
                  >
                    <i className="bi bi-arrow-left"></i>
                  </button>
                  <button
                    onClick={() => setSwiperIndex(swiperIndex + 1)}
                    disabled={swiperIndex === data.length - 1}
                    className={
                      swiperIndex === data.length - 1 ? "grey-disabled" : ""
                    }
                  >
                    <i className="bi bi-arrow-right"></i>
                  </button>
                  <div className="d-flex my-3">
                    {data.map((item, index) => {
                      return (
                        <img
                          key={index}
                          className={`rounded-image feedback-avatar ${
                            index === swiperIndex
                              ? "feedback-avatar-border"
                              : ""
                          }`}
                          src={item.description_image}
                          alt=""
                          width={80}
                          height={80}
                          onClick={() => setSwiperIndex(index)}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 mobt-50">
              <div className="testimonial-img-slide-wrap text-center">
                {/* <Slider {...ImgSliderSetting} ref={imgSliderRef}>
                  <div className="testimonial-img-slide-box">
                    <img
                      src="/assets/images/testimonial-img-hrrd.png"
                      alt=""
                      className="wow animate fadeInUp"
                    />
                  </div>
                  <div className="testimonial-img-slide-box">
                    <img
                      src="/assets/images/testimonial-img-hrrd.png"
                      alt=""
                      className="wow animate fadeInUp"
                    />
                  </div>
                </Slider> */}
                <Swiper
                  onSlideChange={(swiper) => setSwiperIndex(swiper.activeIndex)}
                  ref={sliderRef}
                >
                  {data.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="d-flex align-items-center p-4 mx-auto">
                          <img
                            src={item.description_image}
                            alt=""
                            className="feedback-image"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                {/* <i className="bx bxs-quote-left"></i> */}
                <img
                  className="feedback-behind"
                  src="/assets/images/behind-feedback-image.png"
                  alt=""
                />
                <img
                  className="quote-left"
                  src="/assets/images/quote-left.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="shape hrrd-testimonial-shape"
          src="assets/images/feedback-decor.png"
          alt=""
        />
      </div>

      <div className="testimonial-area testimonial-hrrd pt-100 d-lg-none d-block d-sm-block">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 ">
              <div className="testimonial-img-slide-wrap">
                {/* <Slider {...ImgSliderSetting}>
                  <div className="testimonial-img-slide-box">
                    <img src="assets/images/testimonial-img-hrrd.png" alt="" />
                    <i className="bx bxs-quote-left"></i>
                  </div>
                  <div className="testimonial-img-slide-box">
                    <img src="assets/images/testimonial-img-hrrd.png" alt="" />
                    <i className="bx bxs-quote-left"></i>
                  </div>
                </Slider> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12 col-12 mobt-50">
              <div className="testimonial-content-slide-wrap">
                <Slider {...TextSliderSettingMobile}>
                  <div className="testimonial-content-slide-box">
                    <h2>
                      “I’ve downloaded Chakri from my Google Play about 1 years
                      ago. Chakri make the prototyping process so easy and
                      faster. I feel this is the best apps for Prototyping use”
                    </h2>
                    <p>— Ferdinand Stindl - Co Founder of CocoPay Company</p>
                  </div>
                  <div className="testimonial-content-slide-box">
                    <h2>
                      “I’ve downloaded Chakri from my Google Play about 1 years
                      ago. Chakri make the prototyping process so easy and
                      faster. I feel this is the best apps for Prototyping use”
                    </h2>
                    <p>— Ferdinand Stindl - Co Founder of CocoPay Company</p>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeDuelSlider;

import React, { useState, useRef, useEffect } from "react";
import { data } from "/constant/about-us/CustomerData.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function CustomerFeedback() {
  const imgSliderRef = useRef(null);
  const txtSliderRef = useRef(null);
  const sliderRef = useRef();

  const [swiperIndex, setSwiperIndex] = useState(0);

  useEffect(() => {
    sliderRef.current.swiper.slideTo(swiperIndex);
  }, [swiperIndex]);

  return (
    <div className="container abu-customer-feedback">
      <div className="d-flex flex-column">
        <div className="text-center w-50 mx-auto">
          {/* <h3 className="mb-5">
            &quot;At COINFO, we believe having the secret of successful trading,
            investing plan and strategy can make a world of difference to any
            trader, no matter their experience level.&quot;
          </h3>
          <h1>ABC</h1>
          <h4>Founder of COINFO</h4> */}
          <Swiper
            onSlideChange={(swiper) => setSwiperIndex(swiper.activeIndex)}
            ref={sliderRef}
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="mb-5">
                    <h3 className="mb-4">
                      &quot;{item.description_text}&quot;
                    </h3>
                    <h1>{item.user_name}</h1>
                    <h4>{item.user_position}</h4>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center my-3">
        {data.map((item, index) => {
          return (
            <img
              key={index}
              className={`rounded-image feedback-avatar ${
                index === swiperIndex ? "feedback-avatar-border" : ""
              }`}
              src={item.user_avatar}
              alt=""
              width={80}
              height={80}
              onClick={() => setSwiperIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

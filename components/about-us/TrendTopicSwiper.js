import React, { useState, useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;
const SeeAll = styled.p`
  color: #165cdd;
  font-size: 20px;
`;

const Content = styled.div``;
const Title = styled.p`
  color: #000000;
  font-size: 40px;
  font-weight: 800;
`;
const ThumbnailsBlock = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Thumbnails = styled.img`
  border-radius: 20px;
`;
const ThumbnailsTitle = styled.p`
  position: absolute;
  bottom: 18px;
  font-size: 24px;
  font-weight: 800;
  color: #fff;
`;
const SwiperBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
const NavigationItem = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

function TrendTopicSlider({ title, data }) {
  const sliderRef = useRef();
  const [swiperIndex, setSwiperIndex] = useState(0);

  useEffect(() => {
    sliderRef.current.swiper.slideTo(swiperIndex);
  }, [swiperIndex]);

  return (
    <Box
      bg="#f0f9ff"
      p="65px"
      w="100vw"
      position="relative"
      left="calc(-50vw + 50%)"
    >
      <Content>
        <Header>
          <Title>{title}</Title>
          <SeeAll>See all categories </SeeAll>
        </Header>
        <SwiperBlock>
          <NavigationItem
            src="../assets/images/arrow-circle-left.png"
            onClick={() => setSwiperIndex(swiperIndex - 1)}
            disabled={swiperIndex === 0}
          />

          <Swiper ref={sliderRef} slidesPerView={7} spaceBetween={65}>
            {data.map(({ image, name }, index) => (
              <SwiperSlide key={index}>
                <ThumbnailsBlock>
                  <Thumbnails src={image} />
                  <ThumbnailsTitle>{name}</ThumbnailsTitle>
                </ThumbnailsBlock>
              </SwiperSlide>
            ))}
          </Swiper>
          <NavigationItem
            src="../assets/images/arrow-circle-right.png"
            onClick={() => setSwiperIndex(swiperIndex + 1)}
            disabled={swiperIndex === data.length - 1}
          />
        </SwiperBlock>
      </Content>
    </Box>
  );
}

export default TrendTopicSlider;

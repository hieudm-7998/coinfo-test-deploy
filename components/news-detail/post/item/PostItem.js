import React from "react";
import styled from "styled-components";
import SocialMediaBlock from "../../SocialMediaBlock";
const PostItemBlock = styled.div`
  display: flex;
  gap: 18px;
  text-align: left;
  border-top: ${(props) => (!props.hasSocialIcons ? "1px solid #d8dde3" : "")};
  border-bottom: ${(props) =>
    props.hasSocialIcons ? "1px solid #d8dde3" : ""};
`;
const PostImage = styled.img`
  border-radius: 20px;
`;
const DescriptionBlock = styled.div`
  position: relative;
`;

const Topic = styled.p`
  color: #165cdd;
  margin-bottom: 5px;
`;
const Title = styled.p`
  color: #1b2537;
  font-weight: 700;
  font-size: ${(props) => (props.hasSocialIcons ? "30px" : "20px")};
  line-height: ${(props) => (props.hasSocialIcons ? "35px" : "24px")};
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  background: #8e9bae;
  border-radius: 50%;
`;

function PostItem({
  data: { image, topic, title, channel, time },
  hasSocialIcons,
}) {
  return (
    <PostItemBlock className="py-3" hasSocialIcons={hasSocialIcons}>
      <PostImage src={image} alt={channel} />
      <DescriptionBlock>
        <Topic>{topic}</Topic>
        <Title className="my-2" hasSocialIcons={hasSocialIcons}>
          {title}
        </Title>
        <div className="channel-and-time">
          <div className="d-flex align-items-center" style={{ gap: "10px" }}>
            {channel} <Dot /> {time}
          </div>
          {hasSocialIcons && <SocialMediaBlock size={32} />}
        </div>
      </DescriptionBlock>
    </PostItemBlock>
  );
}

export default PostItem;

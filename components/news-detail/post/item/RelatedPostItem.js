import React from "react";
import styled from "styled-components";
import { Flex, Box, Text, Img } from "@chakra-ui/react";
import SocialMediaBlock from "../../SocialMediaBlock";

const Dot = styled.div`
  width: 4px;
  height: 4px;
  background: #8e9bae;
  border-radius: 50%;
`;

function RelatedPostItem({
  data: { title, topic, user, channel, time },
  hasImage,
}) {
  return (
    <div
      className="d-flex flex-column w-100 bg-white p-3"
      style={{
        border: "1px solid rgba(88, 146, 255, 1)",
        borderRadius: "20px",
      }}
    >
      {hasImage && <Img src="/assets/images/mock-img/graph.png" />}
      <div>
        <Text color="#165cdd" fontWeight={600} className="mb-3">
          {topic}
        </Text>
        <Text
          color="#1B2537"
          fontWeight="700"
          fontSize="1.75rem"
          className="mb-3"
        >
          {title}
        </Text>
      </div>
      <div className="news-top-new-postitem">
        <Flex className="user-info" alignItems="center" gap={2}>
          <Img src={user.avatar} width={55} />
          <Box>
            <Text className="user-name" fontWeight={600}>
              {user.name}
            </Text>
            <Flex alignItems="center" gap={2}>
              <Text fontSize={12}>{channel}</Text> <Dot />{" "}
              <Text fontSize={12}>{time}</Text>
            </Flex>
          </Box>
        </Flex>
        <Box className="media-block">
          <SocialMediaBlock size={32} />
        </Box>
      </div>
    </div>
  );
}

export default RelatedPostItem;

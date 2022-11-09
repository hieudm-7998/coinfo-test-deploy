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
    <Flex gap={8} minHeight="300px">
      {hasImage && <Img src="/assets/images/mock-img/graph.png" />}
      <Box
        position="relative"
        bg="#fff"
        w="100%"
        border="1px solid rgba(88, 146, 255, 1)"
        rounded={20}
        p={5}
      >
        <Text color="#165cdd" fontWeight={600} mb={7}>
          {topic}
        </Text>
        <Text
          color="#1B2537"
          fontWeight="bold"
          fontSize="40px"
          lineHeight="44px"
        >
          {title}
        </Text>
        <Box
          className="bottom-block"
          position="absolute"
          bottom={4}
          left={4}
          right={4}
        >
          <Flex alignItems="center" justifyContent="space-between">
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
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default RelatedPostItem;

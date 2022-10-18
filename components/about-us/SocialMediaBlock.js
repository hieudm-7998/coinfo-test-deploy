import React from "react";
import styled from "styled-components";
import { mediaIcons } from "../../constant/news/index";
import {Box, Flex} from '@chakra-ui/react'
const MediaBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 17px;
`;
const IconMedia = styled.img``;

function SocialMediaBlock({ size }) {
  return (
    <Box>
      <Flex justifyContent='center' gap={4}>
        {mediaIcons.map(({ image, name }, index) => (
          <IconMedia key={index} width={size} src={image} alt={name} />
        ))}
      </Flex>
    </Box>
  );
}

export default SocialMediaBlock;

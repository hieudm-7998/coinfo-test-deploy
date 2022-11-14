import React from "react";
import styled from "styled-components";
import { mediaIcons } from "../../constant/news/index";
import { Box, Flex } from "@chakra-ui/react";

const IconMedia = styled.img``;

function SocialMediaBlock({ size }) {
  return (
    <Box>
      <div className="d-flex" style={{ gap: "10px" }}>
        {mediaIcons.map(({ image, name }, index) => (
          <IconMedia key={index} width={size} src={image} alt={name} />
        ))}
      </div>
    </Box>
  );
}

export default SocialMediaBlock;

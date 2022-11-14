import React from "react";
import styled from "styled-components";
import { mediaIcons } from "../../constant/news";
import { Box, Text } from "@chakra-ui/react";

const IconMedia = styled.img``;

const StayInTouch = () => {
  return (
    <Box textAlign="center" p={6} bg="#f8fafc" rounded={20}>
      <Text mb={4} fontWeight="bold" fontSize={32}>
        Stay in touch
      </Text>
      <Box p={8} borderTop="1px solid #d8dde3">
        <Box>
          <div
            className="d-flex justify-content-center"
            style={{ gap: "10px" }}
          >
            {mediaIcons.map(({ image, name }, index) => (
              <IconMedia key={index} width={50} src={image} alt={name} />
            ))}
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default StayInTouch;

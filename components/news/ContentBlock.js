import React from "react";
import { Box, Text } from "@chakra-ui/react";

function ContentBlock(props) {
  return (
    <Box px={8} py={2} rounded={20} bg="#F8FAFC" color='rgba(0, 0, 0, 1)' minHeight={170}>
      <Text fontSize={24} fontWeight={800} mb={5}>
        Content:
      </Text>
      <Box px={2}>
        <div>1. What is crypto?</div>
        <div>2. How Bitcoin work?</div>
        <div>3. Who created Bitcoin?</div>
      </Box>
    </Box>
  );
}

export default ContentBlock;

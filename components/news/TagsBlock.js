import React from "react";
import { Box, Text, Flex, Badge } from "@chakra-ui/react";

const data = ["Crypto", "Fantom", "Downtrend", "FTM", "Crypto", "Fantom"];

function TagsBlock(props) {
  return (
    <Box px={6} py={2} rounded={20} bg="#F8FAFC" minHeight={170}>
      <Text fontSize={24} fontWeight={800} mb={25}>
        Tags:
      </Text>
      <Flex flexWrap="wrap" gap={2} className="tags-block">
        {data.map((item) => {
          return (
            <Badge
              fontSize={14}
              fontWeight={600}
              textTransform="capitalize"
              bg="#F3F3F3"
              px={2}
              py={1}
              rounded={50}
            >
              {item}
            </Badge>
          );
        })}
      </Flex>
    </Box>
  );
}

export default TagsBlock;

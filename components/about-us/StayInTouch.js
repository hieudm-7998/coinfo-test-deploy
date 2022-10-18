import React from "react";
import SocialMediaBlock from "./SocialMediaBlock";
import { Box, Text, Flex, Grid, GridItem, Img } from "@chakra-ui/react";


const StayInTouch = () => {
  return (
    <Box textAlign='center' p={6} bg='#f8fafc' rounded={20} >
      <Text mb={4} fontWeight='bold' fontSize={32}>Stay in touch</Text>
      <Box p={8} borderTop='1px solid #d8dde3'>
        <SocialMediaBlock size={50} />
      </Box>
    </Box>
  );
};

export default StayInTouch;

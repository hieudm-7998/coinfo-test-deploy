import React from "react";
import styled from "styled-components";
// import RelatedPostItem from "../item/RelatedPostItem";
import SocialMediaBlock from "../../SocialMediaBlock";
import Pagination from "../../../common/Pagination.tsx";
import { Flex, Box, Img, Tag, Text } from "@chakra-ui/react";

const Dot = styled.div`
  width: 4px;
  height: 4px;
  background: #8e9bae;
  border-radius: 50%;
`;

function ListRelatedPost({ listData }) {
  return (
    <div>
      <Box position="relative" mb={10}>
        <Img src="/assets/images/mock-img/ads-img.png" w="100%" />
        <Tag
          position="absolute"
          top={4}
          right={4}
          p={3}
          rounded={10}
          variant="solid"
          bg="rgba(22, 92, 221, 1)"
          fontSize="18px"
        >
          Ads
        </Tag>
      </Box>
      <div>
        {listData.map((item, index) => {
          return (
            <div className="row bg-white py-3 px-2 mb-3" key={index}>
              <div className="col-md-4 col-12">
                <Img
                  className="img-fluid d-block mx-auto mb-mobile"
                  src="/assets/images/mock-img/graph.png"
                />
              </div>
              <div
                className="col-md-8 col-12 py-3"
                style={{
                  border: "1px solid rgba(88, 146, 255, 1)",
                  borderRadius: "20px",
                }}
              >
                <div className="d-flex flex-column justify-content-between h-100">
                  <div>
                    <Text color="#165cdd" fontWeight={600} className="mb-2">
                      {item.topic}
                    </Text>
                    <Text color="#1B2537" fontWeight="700" fontSize="2rem">
                      {item.title}
                    </Text>
                  </div>
                  <div className="news-top-new-postitem">
                    <Flex className="user-info" alignItems="center" gap={2}>
                      <Img src={item.user.avatar} width={55} />
                      <Box>
                        <Text className="user-name" fontWeight={600}>
                          {item.user.name}
                        </Text>
                        <Flex alignItems="center" gap={2}>
                          <Text fontSize={12}>{item.channel}</Text> <Dot />{" "}
                          <Text fontSize={12}>{item.time}</Text>
                        </Flex>
                      </Box>
                    </Flex>
                    <Box className="media-block">
                      <SocialMediaBlock size={32} />
                    </Box>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination />
    </div>
  );
}

export default ListRelatedPost;

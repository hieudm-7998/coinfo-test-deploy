import React from "react";
import { Flex, Box, Text, Img } from "@chakra-ui/react";

function Pagination({ current = 1, totalPage = 6, perPage }) {
  return (
    <Flex justifyContent="end" alignItems="center" gap={5}>
      <div className="pre-pagination">
        <Img src="/assets/images/icon/PrePageIcon.png" />
      </div>
      <Flex gap={3} className="pagination-items">
        {Array.from(Array(totalPage), (_, index) => {
          return (
            <Flex
              key={index}
              width={55}
              height={55}
              alignItems="center"
              justifyContent="center"
              border="1px solid rgba(22, 92, 221, 1)"
              rounded="50%"
              bg={current === index + 1 ? "#165CDD" : ""}
              color={current === index + 1 ? "#fff" : "#165CDD"}
            >
              <Text fontSize={18}>{index + 1}</Text>
            </Flex>
          );
        })}
      </Flex>
      <div className="next-pagination">
        <Img src="/assets/images/icon/NextPageIcon.png" />
      </div>
    </Flex>
  );
}

export default Pagination;

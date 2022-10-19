import React from "react";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import SocialMediaBlock from "../news-detail/SocialMediaBlock";
function NewsDescription(props) {
  return (
    <Box color="rgba(0, 0, 0, 1)">
      <Box bg="#F8FAFC" rounded={20} p={35} mb={9}>
        <Img src="/assets/images/mock-img/news-des.png" rounded={20} mb={7} />

        <Flex
          className=""
          justifyContent="space-between"
          alignItems="center"
          mb={7}
        >
          <Text color="#165cdd" fontSize={14} fontWeight={600}>
            Bitcoin, Defi, NFT
          </Text>
          <SocialMediaBlock size={32} />
        </Flex>

        <Text className="title-block" fontWeight="bold" fontSize={32} mb={7}>
          Competitive Advantage in a Commoditized Industry
        </Text>

        <Text className="content-block" color="rgba(0, 0, 0, 1)">
          California Governor Gavin Newsom has vetoed a statewide bill that
          would have established a regulatory framework for cryptocurrency
          regulation—and crypto proponents are thrilled. In a Friday memo
          detailing the veto decision, Newsom called Assembly Bill 2269
          “premature” and said a “more flexible approach” was essential for the
          state because he believes blockchain technology is still evolving. The
          veto came despite strong support in the state legislature, where the
          bill secured 71 “yes” votes, 0 “no” votes, and nine abstentions. If it
          had been signed into law, crypto firms would have been required to
          acquire a state-approved license to operate in California. In his veto
          message, Newsom also cited the substantial cost of implementing the
          bill, sharing that the passage of AB2269 would require a loan in “the
          tens of millions of dollars” for the state. Notably, Newsom also wants
          to wait until the federal government’s stance on crypto regulation is
          solidified and the results of his May Executive Order on
          cryptocurrency are presented. Earlier this year, Newsom signed
          Executive Order N-9-22 for his administration to research
          cryptocurrency and “establish a transparent regulatory environment”
          for it in California. “It is premature to lock a licensing structure
          in statute without considering both this work and forthcoming federal
          actions,” Newsom wrote in the memo. Newsom isn’t the only one who had
          concerns about AB 2269. The Chamber of Progress—a pro-crypto
          technology policy coalition with partners like Amazon, Apple, Circle,
          FTX US, and Meta—also took issue with aspects of the bill and
          requested multiple revisions back in June, which were incorporated
          into the final draft. Chamber of Progress then issued a new memo
          approving of the latest version of the bill, pending a few additional
          revisions. Specifically, it did not want California to ban algorithmic
          stablecoin licenses and requested clarification on which
          cryptocurrencies would fall under the purview of the Department of
          Financial Protection and Innovation. But Chamber of Progress CEO Adam
          Kovacevich is actually pleased with Newsom’s veto decision. “This
          gives the California legislature a chance to take a less rushed, more
          inclusive approach to developing crypto regulations that protect
          consumers and allow for innovation,” Kovacevich said in a statement.
          “There’s a huge opportunity in the next few years for California and
          other states to get crypto regulation right.” Attorney Hailey Lennon
          was also pleased with Newsom’s decision, calling it “good news” for
          the crypto industry. Likewise, the crypto lobbying group the
          Blockchain Association was thrilled with the veto news, calling the
          bill “misguided.” “We applaud Gov Gavin Newsom’s veto of California
          Assembly Bill 2269, which threatened to choke innovation and stop
          California’s burgeoning crypto industry in its tracks,” the group
          wrote in a statement. The accolades continued to flow, as Jake
          Chervinsky, head of policy for Blockchain Association, said Newsom
          “deserves serious respect” for rejecting AB 2269.
        </Text>
      </Box>

      <Box
        className="summary-block"
        px={20}
        py={8}
        bg="#F8FAFC"
        rounded={20}
        mb={7}
      >
        <Text className="user-name" fontSize={20} fontWeight={800}>
          Disclaimer:
        </Text>
        <Text className="user-name" fontSize={18}>
          The accolades continued to flow, as Jake Chervinsky, head of policy
          for Blockchain Association, said Newsom “deserves serious respect” for
          rejecting AB 2269.
        </Text>
      </Box>

      <Box className="author-block" px={20} py={8} bg="#F8FAFC" rounded={20}>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex className="user-info" alignItems="center" gap={2}>
            <Img src="/assets/images/mock-img/user-avatar.png" width={55} />
            <Box>
              <Text className="user-name" fontWeight={600}>
                COINFO Author
              </Text>
            </Box>
          </Flex>
          <Box className="media-block">
            <SocialMediaBlock size={32} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default NewsDescription;

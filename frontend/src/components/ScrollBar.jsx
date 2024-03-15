import React from "react";
import { Box, Flex, Spacer, Heading, Button, IconButton, useColorMode, Text, HStack } from "@chakra-ui/react";
import { TriangleUpIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

function ScrollBar({page, setPage, searchTitle}) {

  return (
    <Box bg="gray.400" px={4} py={3} position="sticky" top="0" zIndex="sticky">
      <Flex alignItems="center">
        <Heading size="md">Kontinentalist</Heading>
        <Spacer />
        <HStack spacing={2}>
          <Text>
            Page: {page}
          </Text>
          <button>
            <ArrowLeftIcon onClick={() => setPage(page - 1)} _hover={{ color: "blue.600" }}/>
          </button>
          <button>
            <ArrowRightIcon onClick={() => setPage(page + 1)} _hover={{ color: "blue.600" }}/>
          </button>
        </HStack>
        <Spacer/>
        <Flex>
          <IconButton
            icon=<TriangleUpIcon/>
            onClick={() => searchTitle(0)}
            variant="ghost"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ScrollBar;

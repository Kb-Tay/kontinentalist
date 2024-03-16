import React from "react";
import { Box, Flex, Spacer, Heading, IconButton, Text, HStack } from "@chakra-ui/react";
import { TriangleUpIcon, ArrowRightIcon, ArrowLeftIcon, CloseIcon } from "@chakra-ui/icons";

/*
NavBar for dashboard that allows for scrolling of pages
*/
function ScrollBar({page, setPage, searchTitle, isEnd, isFetching}) {

  return (
    <Box bg="gray.400" px={4} py={3} position="sticky" top="0" zIndex="sticky">
      <Flex alignItems="center">
        <Heading size="md">Kontinentalist</Heading>
        <Spacer />
        <HStack spacing={2}>
          <Text>
            Page: {page}
          </Text>
          <button disabled={isFetching}>
          { 
            page <= 1 
            ? <CloseIcon color='red.500'/>
            : <ArrowLeftIcon 
                onClick={() => setPage(page - 1)} 
                _hover={{ color: "blue.600" }}
              />
          }
          </button>
          <button disabled={isFetching}> 
          {
            isEnd
            ? <CloseIcon color='red.500'/>
            : <ArrowRightIcon onClick={() => setPage(page + 1)} 
            _hover={isEnd ? {color:"red.500"} : { color: "blue.600" }}/>
          }
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

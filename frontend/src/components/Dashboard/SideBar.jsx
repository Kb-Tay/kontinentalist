import React from 'react'
import { Box, Heading, Button, VStack } from '@chakra-ui/react'

/*
Sidebar that displays topic summaries.
@params {function} searchTitle - updates the ref of component which should be scrolled into view
*/
function SideBar({subtitle, searchTitle}) {
  return (
    <Box
        position="fixed"
        top="64px"
        left="0px"
        width="20%"
        maxW="20%"
        height="100vh"
        backgroundColor="gray.100"
        overflowY="auto"
      >
        <Heading pt='10px' as='h3' size='md'>
          Topics you might be interested
        </Heading>
        <VStack pt="10px">
          {
          subtitle === undefined 
          ? <>No Title</> 
          : subtitle.filter(data => data[0].length !== 0).map((data, ind) => (
            <Button key={ind} onClick={() => searchTitle(data[1])}
              style={{
                width: "100%",
                height: "60px",
                whiteSpace: "normal",
                wordWrap: "break-word",
              }}
              >
              {data[0]}
            </Button>
          ))
        }
        </VStack>
      </Box>
  )
}

export default SideBar
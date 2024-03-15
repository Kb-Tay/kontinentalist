import React from 'react'
import { Box, Heading, Button, VStack, Text, WrapItem, Wrap } from '@chakra-ui/react'

function SideBar({subtitle, searchTitle}) {
  return (
    <Box
        position="fixed"
        top="64px"
        left="0px"
        width="16%"
        maxW="16%"
        height="100vh"
        backgroundColor="gray.100"
      >
        <Heading pt='10px' as='h3' size='md'>
          Topics you might be interested
        </Heading>
        <VStack pt="10px">
          {
          subtitle === undefined 
          ? <>No Title</> 
          : subtitle.filter(data => data[0].length !== 0).map((data) => (
            <Button onClick={() => searchTitle(data[1])}
              style={{
                width: "100%",
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
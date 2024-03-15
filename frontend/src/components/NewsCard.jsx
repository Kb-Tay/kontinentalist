import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Text, Button } from '@chakra-ui/react'

function NewsCard({title, dek, hero_img}) {

  return (
    <Card
    overflow='hidden'
    variant='outline'
    width='60%'
    maxWidth='60%'
    boxShadow='md'
    >
      <Image       
        src={hero_img.url}
        alt={hero_img.key}
      />

      <Stack>
        <CardBody>
          <Heading size='md'>{title}</Heading>
          <Text dangerouslySetInnerHTML={{ __html: dek }}/>
        </CardBody>
        <CardFooter>
          <Button variant='solid' colorScheme='blue'>
            View More
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default NewsCard
import React from 'react'
import { Card, CardBody, CardFooter, Stack, Image, Heading, Text, Button } from '@chakra-ui/react'

/*
Card component that renders title, short description and hero image to user.
@param {function} props.setArticle - updates the article object state for the NewsModal
@param {function} props.onOpen - updates the NewsModal state to be open  
*/
function NewsCard({title, dek, hero_img, methodology, setArticle, onOpen}) {

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
          <Button variant='solid' colorScheme='blue' onClick={() => {setArticle({
            title: title,
            story: methodology}
            ); onOpen()}}>
            View More
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default NewsCard
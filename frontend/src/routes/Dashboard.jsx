import React from 'react'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import { Box, VStack, Button, Spinner, Heading } from '@chakra-ui/react'
import ScrollBar from '../components/ScrollBar'
import NewsCard from '../components/NewsCard'
import SideBar from '../components/SideBar'

function Dashboard() {
  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)
  const [subtitle, setSubtitle] = useState([])
  const listRef = useRef(null)

  useEffect(() => {
    getNews(page)
  }, [page])
  
  async function getNews(page) {
    try {
      const response = await axios.get(`https://cryptodire.kontinentalist.com/api/v1/stories/?page=${page}`)
      const ApiData = response.data
      const subtitleList = []
      
      setNews(ApiData)

      ApiData.data.map((data, ind) => {
        console.log(data.subtitle)
        subtitleList.push([data.subtitle, ind])
      })
      setSubtitle(subtitleList)

    } catch (error) {
      console.error(error);
    }
  } 

  const searchTitle = (index) => {
    const listItem = listRef.current.children[index]
    if (listItem) {
      listItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <>
      <ScrollBar page={page} setPage={setPage} searchTitle={searchTitle}/>
        <SideBar subtitle={subtitle} searchTitle={searchTitle}/>
        <Box pt="10px" pl="280px" maxW="100%">
          <Heading as='h1' size='lg'>
            Our Stories
          </Heading>
          <VStack pt="10px" spacing={4} ref={listRef}>
            {
            news.length === 0 
            ? <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
              /> 
            : news.data.map((data, ind) => (
              <NewsCard key={ind} title={data.title} hero_img={data.hero_image} dek={data.dek}/>
              ))
            }
          </VStack>
        </Box>
      <Button variant='nav'/>
    </>
  )
}

export default Dashboard
import React from 'react'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import { Box, VStack, Button, Spinner, Heading } from '@chakra-ui/react'
import ScrollBar from '../components/ScrollBar/ScrollBar'
import NewsCard from '../components/NewsCard'
import SideBar from '../components/SideBar'
import {
  useQuery,
} from '@tanstack/react-query'

function Dashboard() {
  const [page, setPage] = useState(1)
  const [isEnd, setIsEnd] = useState(false)
  const [subtitle, setSubtitle] = useState([])
  const listRef = useRef(null)

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  } = useQuery({
    queryKey: ['articles', page],
    queryFn: () => getNews(page),
    keepPreviousData : true
  })

  useEffect(() => {
    if (isLoading) {
      return
    }

    if (data.length === 0) {
      setIsEnd(true)
    } else {
      setIsEnd(false)
    }
  }, [data])
  
  async function getNews(page) {
    try {
      const response = await axios.get(`https://cryptodire.kontinentalist.com/api/v1/stories/?page=${page}`)
      const subtitleList = []
      response.data.data.map((data, ind) => {
        console.log(data.subtitle)
        subtitleList.push([data.subtitle, ind])
      })

      setSubtitle(subtitleList)

      // check if any data from api to render
      if (response.data.data.length === 0) {
        setIsEnd(true)
      }

      return response.data

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
      <ScrollBar page={page} setPage={setPage} searchTitle={searchTitle} isEnd={isEnd}/>
        <SideBar subtitle={subtitle} searchTitle={searchTitle}/>
        <Box pt="10px" pl="280px" maxW="100%">
          <Heading as='h1' size='lg'>
            Our Stories
          </Heading>
          {
            isEnd && <Heading size='md'>End of stories</Heading>
          }
          <VStack pt="10px" spacing={4} ref={listRef}>
            {
            isLoading
            ? <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
              /> 
            : data.data.map((data, ind) => (
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
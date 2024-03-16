import React from 'react'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import { Box, VStack, Button, Spinner, Heading } from '@chakra-ui/react'
import ScrollBar from '../components/Dashboard/ScrollBar'
import NewsCard from '../components/Dashboard/NewsCard'
import SideBar from '../components/Dashboard/SideBar'
import NewsModal from '../components/Dashboard/NewsModal'
import { useDisclosure } from '@chakra-ui/react'
import {
  useQuery,
} from '@tanstack/react-query'

/*
Main Dashboard component that handles the display and scrolling of articles. 
Parent component that query articles from API, and passes data to its child components
*/
function Dashboard() {
  const [page, setPage] = useState(1) // state representing current page of articles
  const [isEnd, setIsEnd] = useState(false) // checks if there in next page
  
  // Array storing a [key, value] pair, with the key being the topic summary, 
  // value being component id of NewsCard
  const [subtitle, setSubtitle] = useState([]) 

  // contains information to be displayed by NewsModal 
  const [article, setArticle] = useState({  
    title: "",
    story: ""
  }) 

  const listRef = useRef(null) //ref of DOM obj to scroll to 
  const { isOpen, onOpen, onClose } = useDisclosure() // state and functions for NewsModal

  // useQuery from React Query caches previously rendered data, allowing for more efficient pagination
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
  
  // API call to get all articles of a specified page from database
  async function getNews(page) {
    try {
      const response = await axios.get(`https://cryptodire.kontinentalist.com/api/v1/stories/?page=${page}`)
      const subtitleList = []
      response.data.data.map((data, ind) => {
        subtitleList.push([data.subtitle, ind])
      })

      setSubtitle(subtitleList)

      if (response.data.data.length === 0) {
        setIsEnd(true)
      }

      return response.data

    } catch (error) {
      console.error(error);
    }
  }

  // Function to update the referenced component, which then scrolls to the component
  const searchTitle = (index) => {
    const listItem = listRef.current.children[index]
    if (listItem) {
      listItem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
    }
  }
  console.log(isFetching)
  return (
    <>
      <ScrollBar page={page} setPage={setPage} searchTitle={searchTitle} isEnd={isEnd} isFetching={isFetching}/>
        <SideBar subtitle={subtitle} searchTitle={searchTitle}/>
        <Box pt="10px" pl="280px" maxW="100%">
          <Heading as='h1' size='lg'>
            Our Stories
          </Heading>
          <NewsModal isOpen={isOpen} onClose={onClose} article={article}/>
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
                <NewsCard key={ind} 
                  title={data.title} 
                  hero_img={data.hero_image} 
                  dek={data.dek}
                  methodology={data.methodology}
                  setArticle={setArticle}
                  onOpen={onOpen}/>
              ))
            }
          </VStack>
        </Box>
      <Button variant='nav'/>
    </>
  )
}

export default Dashboard
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import Button from '../../components/Button/Button';
import Topbar from '../../components/Topbar/Topbar';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import Sidebar from '../../components/SideBard/Sidebar';
import { useQuery } from '@tanstack/react-query';
// import {getNewsOnSearch, getLatestNews} from "../../api/fetchNews"
import { getNewsOnSearch } from '../../api/fetchNews';
import { getLatestNews } from '../../api/fetchNews';
// import getNewsOnSearch from "../../api/fetchNews"
import Results from '../../components/Results/Results';


const Home = () => {

  const [category, setCategory] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [debouncedText] = useDebounce(inputValue, 300);
  const [activeCategory, setActiveCategory] = useState<number | undefined>(undefined);
  const [page, setPage] = useState<number>(1);



  const newsSearchQuery = useQuery({
      queryKey: ['news', debouncedText, category],
      queryFn: () => getNewsOnSearch(category, debouncedText),
      //staleTime: 1000 * 60 * 5, 
      refetchOnWindowFocus: false,
      //refetchInterval: 1000 * 60 * 5,
      
      enabled: debouncedText.length > 2 || debouncedText.length === 0,
      placeholderData: (prev) => prev,
    })


    const getLatestNewsItem = useQuery({
      queryKey: ['latestNews', category],
      queryFn: () => getLatestNews(),
    })


    console.log("Ovo su podaci za latest news:")
    console.log(getLatestNewsItem.data)
    console.log("Ovo su podaci za kartice:")
    console.log(newsSearchQuery?.data)
    


    useEffect(() => {
      setActiveCategory(0);
    }, [])

   

    //console.log(`Ovo je trenutno aktivna kategorija ${activeCategory}`)

    
    //console.log(category)

  return (
    
    <>
      <Topbar />
      <SearchComponent searchTerm={debouncedText} inputValue={inputValue} setSearchTerm={setInputValue} />
      <div className='container flex mx-auto px-[5%] py-[40px] gap-4'>
        <Sidebar setCategory = {setCategory} activeCategory = {activeCategory} setActiveCategory = {setActiveCategory} />
        <Results searchData={newsSearchQuery.data} latestNewsData={getLatestNewsItem.data} /> 
        
        
      </div>
    </>


    






  )
}

export default Home






// <div className='top-bar w-full p-5'>

    //   <h1>Uneseni tekst je: {debouncedText}</h1>
    //   <Button text='Button' color="white" />

    //     <form method='post' style={{marginTop:"20px"}}>
    //       <input type='text' 
    //       placeholder='Search...' 
    //       value={inputValue} 
    //       onChange={(e) => setInputValue(e.target.value)} />
    //     </form>
    // </div>

    
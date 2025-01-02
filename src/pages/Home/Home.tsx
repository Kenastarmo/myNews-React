import React, { useEffect } from 'react'
import { useState } from 'react';
import Topbar from '../../components/Topbar/Topbar';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import Sidebar from '../../components/SideBard/Sidebar';
import Results from '../../components/Results/Results';

const Home = () => {

  const [category, setCategory] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<number | undefined>(undefined);

    useEffect(() => {
      setActiveCategory(0);
    }, [])

  return (
    <>
      <Topbar />
      <SearchComponent  />
      <div className='container flex mx-auto px-[5%] py-[40px] gap-4'>
        <Sidebar setCategory = {setCategory} activeCategory = {activeCategory} setActiveCategory = {setActiveCategory} />
        <Results category={category} /> 
      </div>
    </>
  )
}
export default Home

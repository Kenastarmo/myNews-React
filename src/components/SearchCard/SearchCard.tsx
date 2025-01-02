import React from 'react'
import DefaultMyNewsImage from "../../assets/DefaultMyNews1.png";


type SearchCardPropsType = {
    title: string;
    image: string;
}

const SearchCard = ( {title, image}:SearchCardPropsType ) => {
  return (
    <div className='search-card container p-2 gap-4 flex flex-row justify-start items-center'>
        <img src={image === DefaultMyNewsImage ? image : `https://static01.nyt.com/${image}`} className='w-[80px] max-h-[80px] rounded-[4px] object-cover'></img>
        <h5 className='text-[15px] text-left text-black font-normal'>{title}</h5>
    </div>
  )
}

export default SearchCard
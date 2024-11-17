import React, { Dispatch, SetStateAction } from 'react'
import Button from '../Button/Button'
import Logo from '../../assets/MyNews.svg'
import SearchBar from '../SearchBar/SearchBar'
import { CiSearch } from "react-icons/ci";

type searchTermType = {
    searchTerm: string;
    inputValue: string;
    setSearchTerm: Dispatch<SetStateAction<string>>;
}


const SearchComponent = ({searchTerm, setSearchTerm, inputValue}: searchTermType) => {
    
    return (
        <div className='container mx-auto px-[5%] flex justify-start  gap-[40px]'>
            <div className='w-full flex gap-[70px] py-[50px] border-b'>
            <img src={Logo} className='max-w-[170px]'></img>
            <div className='container search-container max-w-[65%] flex items-center justify-between direction-row 
            py-[6px] pl-[24px] pr-[6px] gap-[30px] bg-white rounded-[8px] '>
                <div className='w-[100%] flex items-center gap-[18px]'>
                    <CiSearch style={{ fontSize: "22px" }} />
                    <SearchBar searchTerm={searchTerm} inputValue={inputValue} setSearchTerm={setSearchTerm}/>
                </div>
                <Button text='SEARCH' color='red' txt_color='white' />
            </div>
            </div>
        </div>
    )
}

export default SearchComponent
import React, { Dispatch, SetStateAction } from 'react'

type SearchBarType = {
  searchTerm: string;
  inputValue: string;
  expanded: boolean;
  setSearchTerm: Dispatch<SetStateAction<string>>
  setExpanded: Dispatch<SetStateAction<boolean>>
}

const SearchBar = ({ inputValue, setSearchTerm, setExpanded }: SearchBarType) => {

  const onInput = (e: any) => {
    const target = e.target;
    setSearchTerm(target.value);
  }

  return (
    <>
      <form method="post" className='w-[100%]'>
        <input type="text"
          className='w-full py-[8px] pr-[14px] rounded-md'
          id='search'
          placeholder='Search news'
          name='query'
          value={inputValue}
          onInput={onInput}
          onFocus={() => {setExpanded(true)}}
        ></input>
      </form>
    </>
  )
}

export default SearchBar
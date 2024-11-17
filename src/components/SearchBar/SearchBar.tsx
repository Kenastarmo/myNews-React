import React, { Dispatch, SetStateAction } from 'react'

type SearchBarType = {
  searchTerm: string;
  inputValue: string;
  setSearchTerm: Dispatch<SetStateAction<string>>
}

const SearchBar = ({ searchTerm, inputValue, setSearchTerm }: SearchBarType) => {

  const onInput = (e: any) => {
    const target = e.target;
    setSearchTerm(target.value);
  }

  return (
    <>
      <form method="post" className='w-[100%]'>
        <input type="search"
          className='w-full py-[8px] pr-[14px] rounded-md'
          id='search'
          placeholder='Search news'
          name='query'
          value={inputValue}
          onInput={onInput}
        ></input>
      </form>
    </>
  )
}

export default SearchBar
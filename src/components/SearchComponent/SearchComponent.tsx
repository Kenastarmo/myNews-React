import React, { useState, useRef } from "react";
import Button from "../Button/Button";
import Logo from "../../assets/MyNews.svg";
import SearchBar from "../SearchBar/SearchBar";
import { CiSearch } from "react-icons/ci";
import { useOnClickOutside } from "usehooks-ts";
import { IoCloseSharp } from "react-icons/io5";
import { AnimatePresence, motion } from "motion/react";
import StartTypingDisplay from "../StartTypingDisplay/StartTypingDisplay";
import { useQueryClient } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import SearchCard from "../SearchCard/SearchCard";
import DefaultMyNewsImage from "../../assets/DefaultMyNews1.png";
import { useSearchNews } from "../../api/useFetchSearchNews";
import LoadingSpinner from "../Loader/LoadingSpinner";
import WarningDisplay from "../WarningDisplay/WarningDisplay";


const searchResultsContainerVariants = {
  expanded: {
    height: "20em",
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
  collapsed: {
    height: "0em",
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

const SearchComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [debouncedText, setDebouncedText] = useDebounce(inputValue, 300);

  // Initializing Query Client
  const queryClient = useQueryClient();

  // Handling click outside element
  const handleClickOutside = () => {
    setIsExpanded(false);
    setInputValue("");
    setDebouncedText("");

    if(inputRef.current){
      inputRef.current.value = "";  
    }

    // Clearing cache 
    queryClient.removeQueries({ queryKey: ["searchNews"], exact: false });
    setTimeout(() => {
      queryClient.setQueryData(["searchNews", ""], []);
    }, 400);
  };

  // Click outside hook
  useOnClickOutside([containerRef], handleClickOutside);

  // Destructuring response from useSearchNews query
  const { data, isLoading, isError } = useSearchNews(debouncedText, isExpanded)

  // Handling warning message
  const isEmpty = !isLoading && data?.length === 0 && debouncedText.length > 0;


  return (
    <div className="outside container mx-auto px-[5%] flex justify-start  gap-[40px]">
      <div className="w-full flex gap-[70px] py-[50px] border-b">
        <img src={Logo} className="max-w-[170px]"></img>
        <div
          className={`container search-container max-w-[65%] flex items-start justify-between 
            py-[6px] pl-[24px] pr-[6px] gap-[30px] bg-white relative transition-all duration-250 ease-in-out border-[#3535351c]
            ${
              isExpanded
                ? "rounded-t-[8px] shadow-[0_3px_8px_-3px_rgba(0,0,0,0.0)] border-t border-l border-r border-b border-[#3535351c] "
                : "rounded-[8px] border-t border-l border-r border-b border-[#3535351c] "
            }`}
          ref={containerRef}
        >
          <div className="container search-wrapper flex w-[100%] flex-col gap-[15px]">
            <div className="w-[100%] flex items-center  gap-[18px]">
              <CiSearch style={{ fontSize: "22px", minWidth: "20px" }} />
              <SearchBar
                searchTerm={debouncedText}
                inputValue={inputValue}
                setSearchTerm={setInputValue}
                expanded={isExpanded}
                setExpanded={setIsExpanded}
              />

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    key="close-icon"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="close-icon flex justify-center items-center p-2">
                    <div onClick={() => handleClickOutside()}>
                      <IoCloseSharp size={15} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Button text="SEARCH" color="red" txt_color="white" />

            </div>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  className={`rezultati-search absolute flex flex-col justify-start items-start p-4 bg-[white] top-[100%] left-[-1px] right-[-1px] overflow-y-scroll rounded-b-[8px]  
                  ${
                    isExpanded
                      ? "shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] border-b border-l border-r border-[#3535351c] border-t-[#ffffff]"
                      : "border-b border-l border-r border-[#ffffff] "
                  }`}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  variants={searchResultsContainerVariants}>

                  { debouncedText.length === 0 && (!data || data?.length === 0) && <StartTypingDisplay />}

                  {isLoading && <LoadingSpinner/>}

                    {!isLoading && !isEmpty && (
                      <>
                        {data?.map(item => {
                          return (
                            <SearchCard
                          title={item.headline.main}
                          image={
                            item.multimedia[0]?.legacy?.xlarge
                              ? item.multimedia[0]?.legacy?.xlarge
                              : DefaultMyNewsImage
                          }
                        />
                          )
                        })}
                      </>
                    )}

                { isError && <WarningDisplay>An error occurred while fetching data. Please refresh and try again. </WarningDisplay> }

                { !isLoading && debouncedText.length > 0 && debouncedText.length < 3 && <WarningDisplay>A minimum of 3 characters is required for the search!</WarningDisplay> }

                { !isLoading && debouncedText.length >= 3 && isEmpty && data.length !== 0 && <WarningDisplay>No results found!</WarningDisplay> }

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;

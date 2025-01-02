import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { sidebarCardsData } from "../../sidebarCards";

type sidebarType = {
  setCategory: Dispatch<SetStateAction<string>>,
  activeCategory: number | undefined,
  setActiveCategory: Dispatch<SetStateAction<number | undefined>>,
}

type cardType = {
  id: number,
  name: string,
  blackImgPath: string,
  whiteImgPath: string
};

const Sidebar = ({activeCategory, setActiveCategory, setCategory}: sidebarType) => {

  const handleClickCategory = (cardId: number, name: string) => {
      setCategory(name)
      setActiveCategory(cardId)
    
  };

  return (
    <div className='sidebar container w-fit flex flex-col gap-[10px]'>
      {sidebarCardsData.map((card: cardType, index: number) => (
        <Link 
          to={`/${card.name}`} 
          key={index} 
          className={`sidebar-card p-[20px] rounded-md ${activeCategory === card.id ? "bg-white" : "bg-transparent"}`} 
          onClick={() => handleClickCategory(card.id, card.name)}
        >
          <img 
            src={activeCategory === card.id ? card.whiteImgPath : card.blackImgPath} 
            className='w-[25px]' 
            alt={card.name} 
          />
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;

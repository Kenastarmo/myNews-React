import React from 'react'

type CardType = {
    title?: string | undefined;
    category?: string;
    author?: string;
    imgSrc?: string;
    imgAlt?: string;
    content?: string;  // for blog posts or news articles
 
}

const Card = ({title, category, author, imgSrc} : CardType) => {
    return (
        // <div className='card1 flex flex-col rounded-lg border-[1px] border-slate-300 border-solid max-h-[350px]'>
        // <div className='card1 flex flex-col rounded-lg border-[1px] border-slate-300 border-solid '> 
        <div className='card1 flex flex-col rounded-lg border-[1px] border-slate-300 border-solid'>
            <img className='card-img rounded-t-lg rounded-tr-lg w-full object-cover' 
            //src='https://assets.lummi.ai/assets/QmTi8MeCiarcQbxmJZYuYFhrPAvqBELgnwYyJKiAihqZVj' 
            src={imgSrc}
            alt='kitten' 
            width={"100%"}
            
            //style={{width:"100% !important", maxWidth:"100%", maxHeight:"60%", objectFit:"cover"}}
            //style={{width:"100% !important", maxWidth:"100%", objectFit:"cover"}}
            />
            <div className='flex flex-col flex-1 items-start p-[20px] bg-white rounded-bl-lg rounded-br-lg' >
                <p className='category mr-auto mb-[8px] text-[14px] uppercase text-indigo-500 font-bold'>{category ? category : "nema kategorije"}</p>
                <h2 className='title flex-1 text-start text-[18px]  text-black font-medium leading-[1.2]'>{title ? title : "nema titlea"}</h2>
                <p className='author text-[14px] mt-[24px] font-light'>{author ? author : "Author not available"}</p>
            </div>

        </div>
    )
}

export default Card
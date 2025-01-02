import React from 'react'

type LatestNewItem = {
  title?: string;
  time?: string;
}

const LatestNewItem = ( {title, time}: LatestNewItem ) => {
  return (
    <>
        <div className="item-latest-news flex items-start justify-start flex-col pt-[15px]
                pb-[20px] border-solid border-b-[1px] border-slate-100">
                  <p className="hours text-[13px] text-sky-500">{time}</p>
                  <h2 className="title-latest-news-item mt-[5px] text-[18px] text-black 
                  text-start font-normal leading-none">{title}</h2>
                </div>
    </>
  )
}

export default LatestNewItem
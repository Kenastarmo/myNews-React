import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import DefaultMyNewsImage from "../../assets/DefaultMyNews1.png";
import LatestNewTitle from "../LatestNewTitle/LatestNewTitle";
import LatestNewItem from "../LatestNewItem/LatestNewItem";

type ResultsType = {
  searchData: any;
  latestNewsData:any;

};

const Results = ({ searchData, latestNewsData }: ResultsType) => {

  const first4Elements = searchData?.slice(0, 4);
  const otherElements = searchData?.slice(4);

  return (
    <>
      <div className="right flex flex-col w-[100%] gap-4">
        
        <div className="container upper-div gap-4" style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", }}>
          
              {first4Elements?.map((item) => {
                
                return (
                  <Card
                    key={item.id}
                    imgSrc={
                      item.urlToImage ? item.urlToImage : DefaultMyNewsImage
                    }
                    category={item.news_desk}
                    title={item.headline.main}
                    author={item.source}
                  />
                );
              })}
            
          <div
            className={`container right-upper-div p-[25px] rounded-lg max-h-full overflow-scroll  bg-[#ffffff] p-4`}
            style={{gridRowStart:"1", gridRowEnd:"3", gridColumnStart:"3", overflowX:"auto"}}>
            <div className="container flex flex-col items-start justify-start ">
              <LatestNewTitle />

              <div className="latest-news-items flex flex-col  mt-[20px] font-bold" style={{maxHeight:"440px"}}>
                {/* <LatestNewItem /> */}
                 {
                  latestNewsData?.map((item) => {
                    return (
                      <LatestNewItem
                        key={item.id}
                        time={item.publishedAt?.substring(11, 16)}
                        title={item.title}
                      />
                    );
                  })
                 ?.slice(0, 10) 
                } 
                
              </div>
            </div>
          </div>
        </div>

        <div
          className="donji_div container grid grid-cols-3
        grid-rows-[minmax(350px,_1fr)_minmax(350px,_1fr)] auto-rows-[minmax(0,_1fr)]  gap-4 "
        >
          {otherElements?.map((item) => {
            return (
              <Card
                key={item.id}
                imgSrc={item.urlToImage ? item.urlToImage : DefaultMyNewsImage}
                category={item.news_desk}
                title={item.headline.main}
                author={item.author}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Results;

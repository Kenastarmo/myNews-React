import DefaultMyNewsImage from "../../assets/DefaultMyNews1.png";

type CardType = {
    title?: string | undefined;
    category?: string;
    author?: string;
    imgSrc?: string;
    imgAlt?: string;
    content?: string;
}

const Card = ({title, category, author, imgSrc} : CardType) => {
    return (

        <div className='card1 flex flex-col rounded-lg border-[1px] border-slate-300 border-solid'>

            <img className='card-img h-[240px] max-h-[240px] rounded-t-lg rounded-tr-lg w-full object-cover' 
            src={imgSrc === DefaultMyNewsImage ? imgSrc : `https://static01.nyt.com/${imgSrc}`}
            alt='kitten' 
            width={"100%"}
            />

            <div className='flex flex-col flex-1 items-start p-[20px] bg-white rounded-bl-lg rounded-br-lg' >
                <p className='category mr-auto mb-[8px] text-[14px] uppercase text-indigo-500 font-bold'>{category ? category : "There is no category"}</p>
                <h2 className='title flex-1 text-start text-[18px]  text-black font-medium leading-[1.2]'>{title ? title : "There is no title"}</h2>
                <p className='author text-[14px] mt-[24px] font-light'>{author ? author : "Author not available"}</p>
            </div>
        </div>
    )
}

export default Card
// import createAxiosInstance from '../createAxiosInstance';

// async function getNewsOnSearch(searchTerm: string){
//     const response = await createAxiosInstance.get(`?q=${searchTerm}&api-key=OSBA9mpPTupnAJ5OvdFjKGtrEhkGN4X0`)
//     if(response.status !== 200){
//         throw new Error('Failed to fetch news');
//     }
//     console.log(response);
//     return response.data;
// }

// export default getNewsOnSearch;

import axiosInstance from "../createAxiosInstance";

type Params = {
  category?: string;
  q?: string | "*";
  pageSize?: number;
  fq?: string;
  page?: number;
  'api-key'?: string; 
};

// async function getNewsOnSearch(categoryString: string, searchTerm?: string, pageSize = 50) {
  async function getNewsOnSearch(categoryString: string, searchTerm?: string) {
  try {
    // const response = await axiosInstance.get('', {
    //     params: {

    //         q: searchTerm,
    //         fq: category,
    //     }
    // });

    const params: Params = {
       // category:categoryString,
        //q: searchTerm ? searchTerm : "*"
        'api-key': 'OSBA9mpPTupnAJ5OvdFjKGtrEhkGN4X0',
    };

    if(categoryString){
      params.fq = categoryString;
    }

    if(searchTerm){
      params.q = searchTerm;
    }


    // const useTopHeadlines = categoryString !== "";
    // console.log(useTopHeadlines);

    // if (!useTopHeadlines) {
    //   params.fq = category.toLowerCase();
    // }

    // if (searchTerm) {
    //   params.q = searchTerm;
    // }

    // if(useTopHeadlines){
    //     params.category = categoryString.toLowerCase();
        
    // }
    // if(useTopHeadlines && searchTerm !== ""){
    //   params.q = searchTerm;
    // }
    // if(!useTopHeadlines){
    //   params.q = searchTerm ? searchTerm : "*";
    // }


    

    //setting page size response
    // params.pageSize = pageSize;

    // const endpoint = useTopHeadlines ? '/top-headlines' : '/everything';

    // const response = await axiosInstance.get(endpoint, {
    //   params: params,
    // });


    const response = await axiosInstance.get('/search/v2/articlesearch.json', {
      params: params,
  });

    if (response.status !== 200) {
      throw new Error("Failed to fetch news with category and search term");
    }
    // return response.data;
    return response.data.response.docs;
  } catch (error) {
    console.error(error);
    throw error; // This will let your React Query catch the error and handle it appropriately
  }
}

// async function getLatestNews(categoryString:string){

//   const useTopHeadlines = categoryString !== "";

//   const params: Params = {
//     category: categoryString.toLowerCase(),
    

//   };

//   const endpoint = useTopHeadlines ? "/top-headlines" : "/everything";
//   const response = await axiosInstance.get(endpoint, {
//     params: params,
//   });

//   if(response.status !== 200) {
//     return new Error("Failed to fetch LATEST NEWS");
//   }

//   return response.data.articles;

// }

// export default getNewsOnSearch, getLatestNews;
// export {getNewsOnSearch, getLatestNews};

async function getLatestNews(){

  const params: Params = {
    
    'api-key': 'OSBA9mpPTupnAJ5OvdFjKGtrEhkGN4X0',
  }

  const response = await axiosInstance.get(`/topstories/v2/home.json`,{
    params: params,
  })

  return response.data.results;


}


export {getNewsOnSearch, getLatestNews};


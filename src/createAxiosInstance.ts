import axios from "axios";

const axiostInctance = axios.create({
    // baseURL: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    baseURL: "https://api.nytimes.com/svc",
    // headers: {
    //     "Authorization" : "OSBA9mpPTupnAJ5OvdFjKGtrEhkGN4X0"
    // }
})

export default axiostInctance;




// import axios from "axios";

// const axiosInstance = axios.create({
    
//     // baseURL: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//     baseURL: "https://newsapi.org/v2/",
//     params: {
//         'apiKey': "9383171735a440dd89e9b261260db1dd"
//     }
// });


// export default axiosInstance;

import axiosInstance from "../createAxiosInstance";

type Params = {
  category?: string;
  q?: string | "*";
  pageSize?: number;
  fq?: string;
  page?: number;
  "api-key"?: string;
};

async function getNewsOnCategory(categoryString: string) {
  try {
    const params: Params = {
      category: categoryString,
      "api-key": "OSBA9mpPTupnAJ5OvdFjKGtrEhkGN4X0",
    };

    if (categoryString) {
      params.fq = categoryString;
    }

    const response = await axiosInstance.get("/search/v2/articlesearch.json", {
      params: params,
    });

    if (response.status !== 200) {
      throw new Error("Failed to fetch news with category and search term");
    }
    return response.data.response.docs;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getNewsOnSearch(searchTerm: string) {
  try {
    const params: Params = {
      q: searchTerm,
      "api-key": "OSBA9mpPTupnAJ5OvdFjKGtrEhkGN4X0",
    };

    const response = await axiosInstance.get("/search/v2/articlesearch.json", {
      params: params,
    });

    if (response.status !== 200) {
      throw new Error("Failed to fetch news with search term");
    }

    return response.data.response.docs;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getLatestNews() {
  const params: Params = {
    "api-key": "OSBA9mpPTupnAJ5OvdFjKGtrEhkGN4X0",
  };

  const response = await axiosInstance.get(`/topstories/v2/home.json`, {
    params: params,
  });

  return response.data.results;
}

export { getNewsOnCategory, getLatestNews, getNewsOnSearch };

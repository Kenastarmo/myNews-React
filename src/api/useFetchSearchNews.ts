import { useQuery } from "@tanstack/react-query";
import { getNewsOnSearch } from "../api/fetchNews";

export const useSearchNews = (searchTerm: string, isExpanded: boolean) => {

  const query = useQuery({
    queryKey: ["searchNews", searchTerm],
    queryFn: () => {
      if (!searchTerm || !searchTerm.trim()) {
        return Promise.resolve([]);
      }
      return getNewsOnSearch(searchTerm);
    },
    enabled: searchTerm.length > 2  && isExpanded,
    refetchOnWindowFocus: false,
    placeholderData: (prev) => prev,
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
  };
};

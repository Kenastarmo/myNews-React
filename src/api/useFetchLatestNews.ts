import { useQuery } from '@tanstack/react-query';
import { getLatestNews } from '../api/fetchNews';

export const useFetchLatestNews = (category: string) => {
  const query = useQuery({
    queryKey: ['latestNews', category],
    queryFn: () => getLatestNews(),
    refetchOnWindowFocus: false,
    placeholderData: (prev) => prev,
  });

  return {
    dataLatestNews: query.data,
    isLoadingLatestNews: query.isLoading,
    isErrorLatestNews: query.isError,
  };
};

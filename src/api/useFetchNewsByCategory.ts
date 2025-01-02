import { useQuery } from '@tanstack/react-query';
import { getNewsOnCategory } from '../api/fetchNews';

export const useFetchNewsByCategory = (category: string) => {
  const query = useQuery({
    queryKey: ['news', category],
    queryFn: () => getNewsOnCategory(category),
    refetchOnWindowFocus: false,
    placeholderData: (prev) => prev,
  });

  return {
    dataCategory: query.data,
    isLoadingCategory: query.isLoading,
    isErrorCategory: query.isError,
  };
};

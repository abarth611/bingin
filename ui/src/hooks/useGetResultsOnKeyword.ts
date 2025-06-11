import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { SearchByKeywordType } from "../api/types/KeywordTypes";

const movieUrl = import.meta.env.VITE_MOVIE_DB_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const searchKeywordEndpoint = "search/multi";
const trendingEndpoint = "trending/all/day";

export const useGetResultsOnKeyword = (keyword: string) => {
  const { data, isLoading, error, fetchNextPage } =
    useInfiniteQuery<SearchByKeywordType>({
      queryKey: ["searchKeyword", keyword],
      staleTime: 5000,
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.page + 1,
      getPreviousPageParam: (lastPage) => lastPage.page - 1,
      queryFn: async ({ pageParam }) => {
        if (keyword) {
          const { data } = await axios.get<SearchByKeywordType>(
            `${movieUrl}/${searchKeywordEndpoint}?query=${keyword}&page=${pageParam}&api_key=${apiKey}`
          );

          return data;
        } else {
          const { data } = await axios.get<SearchByKeywordType>(
            `${movieUrl}/${trendingEndpoint}?page=${pageParam}&api_key=${apiKey}`
          );

          return data;
        }
      },
    });

  return { data, isLoading, error, fetchNextPage };
};

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SearchByKeywordType } from "./types/KeywordTypes";

const movieUrl = import.meta.env.VITE_MOVIE_DB_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const trendingEndpoint = `trending/all/day`;

export const getTrendingResults = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["searchTrending"],
    retry: 1,
    queryFn: async () => {
      const { data } = await axios.get<SearchByKeywordType>(
        `${movieUrl}/${trendingEndpoint}?&api_key=${apiKey}`
      );

      return data;
    },
  });

  return { data, isLoading, error };
};

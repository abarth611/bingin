import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SearchByKeywordType } from "./types/KeywordTypes";

const movieUrl = import.meta.env.VITE_MOVIE_DB_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const searchKeywordEndpoint = `search/multi`;

export const getKeywordSearchValues = (keyword: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["searchKeyword", keyword],
    retry: 1,
    queryFn: async () => {
      const { data } = await axios.get<SearchByKeywordType>(
        `${movieUrl}/${searchKeywordEndpoint}?query=${keyword}&api_key=${apiKey}`
      );

      return data;
    },
    enabled: !!keyword,
  });

  return { data, isLoading, error };
};

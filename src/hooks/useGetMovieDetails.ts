import { useQuery } from "@tanstack/react-query";
import { MovieDetailType } from "../api/types/DetailTypes";
import axios from "axios";

const movieUrl = import.meta.env.VITE_MOVIE_DB_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const useGetMovieDetails = (movie: string | undefined) => {
  const { data, isLoading } = useQuery({
    queryKey: ["useGetMovieDetails", movie],
    queryFn: async () => {
      const { data } = await axios.get<MovieDetailType>(
        `${movieUrl}/movie/${movie}?api_key=${apiKey}`
      );

      return data;
    },
    enabled: !!movie,
  });

  return { data, isLoading };
};

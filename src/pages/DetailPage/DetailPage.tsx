import { useParams } from "react-router";
import { useGetMovieDetails } from "../../hooks/useGetMovieDetails";
import { Card } from "../../components/Card/Card";
import { Poster } from "../../components/Poster/Poster";
import { useGetColorPalette } from "../../hooks/useGetColorPalette";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

type DetailsPageParams = {
  movie: string;
};

export const DetailPage = () => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const { movie } = useParams<DetailsPageParams>();
  const { data } = useGetMovieDetails(movie);

  useDocumentTitle("Details");

  return (
    <div>
      {data && (
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(222, 200, 160, 0.8), rgba(0, 0, 0, 0.9)), url(${imageUrl}/${data.backdrop_path})`,
            width: "100%",
            height: "600px",
            backgroundSize: "cover",
          }}
        ></div>
      )}
    </div>
  );
};

import "./Card.scss";
import { MediaType, MovieAndTVResults } from "../../api/types/KeywordTypes";
import { NoImageHeader } from "./NoImageHeader";

interface CardProps {
  result: MovieAndTVResults;
}

export const Card: React.FC<CardProps> = ({ result }) => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const title =
    result.media_type === MediaType.MOVIE ? result.title : result.name;

  return (
    <div className="card">
      {result.poster_path && (
        <img
          src={`${imageUrl}${result.poster_path}`}
          alt={`${title} poster`}
          className="card__image"
        />
      )}
      {!result.poster_path && <NoImageHeader title={title} />}
    </div>
  );
};

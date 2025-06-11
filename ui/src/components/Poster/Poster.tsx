import "./Poster.scss";
import {
  MediaType,
  SearchKeywordResultsTypes,
} from "../../api/types/KeywordTypes";

interface PosterProps {
  result: SearchKeywordResultsTypes;
}

export const Poster: React.FC<PosterProps> = ({ result }) => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const title =
    result.media_type === MediaType.MOVIE ? result.title : result.name;

  const posterPath =
    result.media_type === MediaType.PERSON
      ? result.profile_path
      : result.poster_path;

  return (
    <div className="poster">
      {posterPath && (
        <img
          src={`${imageUrl}${posterPath}`}
          alt={`${title} poster`}
          className="poster__image"
        />
      )}
      {!posterPath && <div className="poster__noImage">{title}</div>}
    </div>
  );
};

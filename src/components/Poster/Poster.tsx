import "./Poster.scss";

interface PosterProps {
  posterPath: string | null;
  title: string;
}

export const Poster: React.FC<PosterProps> = ({ posterPath, title }) => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;

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

import "./NoImageHeader.scss";

interface NoImageHeader {
  title: string;
}

export const NoImageHeader: React.FC<NoImageHeader> = ({ title }) => {
  return (
    <div className="noImageHeader">
      <div className="noImageHeader__text">{title}</div>
    </div>
  );
};

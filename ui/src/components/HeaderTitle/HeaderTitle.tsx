import "./HeaderTitle.scss";
import { FaFilm } from "react-icons/fa";

export const HeaderTitle = () => {
  return (
    <div className="headerTitle">
      <div className="headerTitle__container">
        <FaFilm size="2rem" className="headerTitle__icon" />
      </div>
      <div className="headerTitle__container">
        <h1 className="headerTitle__title">Bingin</h1>
      </div>
    </div>
  );
};

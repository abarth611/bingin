import "./CardList.scss";
import { useResultsStore } from "../../store/useResultsStore";
import { Card } from "../Card/Card";

export const CardList = () => {
  const results = useResultsStore((state) => state.results);

  const cards = results.map((result) => (
    <li className="cardList__card" key={result.id}>
      <Card result={result} />
    </li>
  ));

  return <ul className="cardList">{cards}</ul>;
};

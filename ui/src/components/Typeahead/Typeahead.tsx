import "./Typeahead.scss";
import { FaSearch } from "react-icons/fa";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect, useState } from "react";
import { getKeywordSearchValues } from "../../api/searchKeyword";
import { useResultsStore } from "../../store/useResultsStore";

interface TypeaheadProps {
  onDebounceChange: (value: string) => Promise<void>;
}

export const Typeahead: React.FC<TypeaheadProps> = ({ onDebounceChange }) => {
  const [inputValue, setInputValue] = useState("");
  const addResults = useResultsStore((state) => state.addResults);

  const debouncedValue = useDebounce(inputValue);
  const { data } = getKeywordSearchValues(debouncedValue);

  useEffect(() => {
    addResults(data?.results ?? []);
  }, [data]);

  return (
    <div className="typeahead">
      <div className="typeahead__container">
        <FaSearch className="typeahead__icon" color="black" />
      </div>
      <div className="typeahead__container typeahead__container-grow">
        <input
          placeholder="Search Movie/TV"
          className="typeahead__input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
};

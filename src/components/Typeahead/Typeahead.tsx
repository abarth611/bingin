import "./Typeahead.scss";
import { FaSearch } from "react-icons/fa";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect, useState } from "react";

interface TypeaheadProps {
  onDebounceValueChange: (debouncedValue: string) => Promise<void>;
  defaultValue?: string;
  placeholder?: string;
  debounceTime?: number;
}

export const Typeahead: React.FC<TypeaheadProps> = ({
  onDebounceValueChange,
  defaultValue = "",
  placeholder = "",
  debounceTime = 500,
}) => {
  const [input, setInput] = useState(defaultValue);

  const debouncedValue = useDebounce(input, debounceTime);

  useEffect(() => {
    onDebounceValueChange(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="typeahead">
      <div className="typeahead__container">
        <FaSearch className="typeahead__icon" color="black" />
      </div>
      <div className="typeahead__container typeahead__container-grow">
        <input
          placeholder={placeholder}
          className="typeahead__input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

import { HeaderTitle } from "../../../components/HeaderTitle/HeaderTitle";
import { Typeahead } from "../../../components/Typeahead/Typeahead";
import "./Navigation.scss";

export const Navigation = () => {
  const onDebounceChange = async (debouncedValue: string) => {
    console.log(debouncedValue);
  };

  return (
    <div className="navigation">
      <HeaderTitle />
      <Typeahead onDebounceValueChange={onDebounceChange} />
      <div></div>
    </div>
  );
};

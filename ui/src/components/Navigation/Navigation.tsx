import "./Navigation.scss";
import { HeaderTitle } from "../HeaderTitle/HeaderTitle";
import { Typeahead } from "../Typeahead/Typeahead";

export const Navigation = () => {
  return (
    <div className="navigation">
      <HeaderTitle />
      <Typeahead
        onDebounceChange={async (value) => {
          console.log(value);
          return;
        }}
      />
      <div></div>
    </div>
  );
};

import "./FrontPage.scss";
import { useState } from "react";
import { useScroll } from "../../hooks/useScroll";
import { HeaderTitle } from "../../components/HeaderTitle/HeaderTitle";
import { Typeahead } from "../../components/Typeahead/Typeahead";
import { useGetResultsOnKeyword } from "../../hooks/useGetResultsOnKeyword";
import { Card } from "../../components/Card/Card";
import { Poster } from "../../components/Poster/Poster";

export const FrontPage = () => {
  const [keyword, setKeyword] = useState("");

  const { data, fetchNextPage } = useGetResultsOnKeyword(keyword);

  const onDebounceValueChange = async (debounceValue: string) => {
    setKeyword(debounceValue);
  };

  useScroll(async () => {
    fetchNextPage();
  });

  return (
    <div className="frontPage">
      <div className="frontPage__navigation">
        <HeaderTitle />
        <Typeahead
          onDebounceValueChange={onDebounceValueChange}
          defaultValue={keyword}
        />
        <div></div>
      </div>
      <div className="frontPage__body">
        <div className="frontPage__grid">
          {data?.pages?.map((result) => {
            return result.results.map((movie) => {
              return (
                <Card>
                  <Poster result={movie} />
                </Card>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
};

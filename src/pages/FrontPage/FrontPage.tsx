import "./FrontPage.scss";
import { useState } from "react";
import { useScroll } from "../../hooks/useScroll";
import { HeaderTitle } from "../../components/HeaderTitle/HeaderTitle";
import { Typeahead } from "../../components/Typeahead/Typeahead";
import { useGetResultsOnKeyword } from "../../hooks/useGetResultsOnKeyword";
import { Card } from "../../components/Card/Card";
import { Poster } from "../../components/Poster/Poster";
import { MediaType } from "../../api/types/KeywordTypes";

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
              const posterPath =
                movie.media_type === MediaType.PERSON
                  ? movie.profile_path
                  : movie.poster_path;

              const title =
                movie.media_type === MediaType.MOVIE ? movie.title : movie.name;

              return (
                <Card>
                  <Poster posterPath={posterPath} title={title} />
                </Card>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
};

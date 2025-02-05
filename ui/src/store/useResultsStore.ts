import { create } from "zustand";
import {
  MediaType,
  MovieAndTVResults,
  SearchKeywordResultsTypes,
} from "../api/types/KeywordTypes";

interface ResultsStoreType {
  results: MovieAndTVResults[];
  addResults: (results: SearchKeywordResultsTypes[]) => void;
}

export const useResultsStore = create<ResultsStoreType>((set) => ({
  results: [],
  addResults: (results) =>
    set({
      results: results.filter(
        (result) => result.media_type !== MediaType.PERSON
      ),
    }),
}));

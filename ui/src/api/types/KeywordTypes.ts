export enum MediaType {
  TV = "tv",
  MOVIE = "movie",
  PERSON = "person",
}

export interface ResultType {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  overview: string;
  poster_path: string | null;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

export interface MovieResultType extends ResultType {
  title: string;
  original_title: string;
  video: boolean;
  media_type: MediaType.MOVIE;
}

export interface TVResultType extends ResultType {
  name: string;
  original_name: string;
  origin_country: string[];
  media_type: MediaType.TV;
}

export type MovieAndTVResults = TVResultType | MovieResultType;

export type SearchKeywordResultsTypes =
  | TVResultType
  | MovieResultType
  | PersonResultType;

export interface PersonResultType {
  id: string;
  name: string;
  original_name: string;
  adult: boolean;
  media_type: MediaType.PERSON;
  gender: number;
  known_for_department: string;
  profile_path: string;
  known_for: MovieAndTVResults[];
}

export interface SearchByKeywordType {
  page: number;
  results: SearchKeywordResultsTypes[];
  total_pages: number;
  total_results: number;
}

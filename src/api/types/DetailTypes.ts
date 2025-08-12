export interface DetailType {
  id: string;
  adult: boolean;
  poster_path: string;
  backdrop_path: string;
  tagline: string;
  overview: string;
}

export interface TVDetailType extends DetailType {
  name: string;
}

export interface MovieDetailType extends DetailType {
  budget: number;
  title: string;
}

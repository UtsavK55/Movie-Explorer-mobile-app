interface MovieCardData {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  genre_ids: number[];
}

type MovieCardDataArr = MovieCardData[];

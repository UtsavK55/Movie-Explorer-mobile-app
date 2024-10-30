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

interface Genre {
  id: number;
  name: string;
}

type Genres = Genre[];

interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  placeHolder: string;
}

interface SearchProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  data: MovieCardDataArr;
  loadMore: () => void;
  initialLoader: boolean;
  refreshing: boolean;
  handleRefresh: () => void;
  loadingMore: boolean;
}

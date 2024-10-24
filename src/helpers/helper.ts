import {fetchData} from '@network/apiMethods';

export const imageUrl = (backdrop_path: string) => {
  return `https://image.tmdb.org/t/p/w500${backdrop_path}`;
};

export const getAllMovies = async (page: number, sortBy: string) => {
  const movies = await fetchData('/discover/movie', {
    params: {page: page, sort_by: sortBy},
  });
  return (
    movies?.results?.map(
      ({
        id,
        title,
        poster_path,
        overview,
        vote_average,
        vote_count,
        release_date,
      }: MovieCardData) => ({
        id,
        title,
        poster_path,
        overview,
        vote_average,
        vote_count,
        release_date,
      }),
    ) || []
  );
};

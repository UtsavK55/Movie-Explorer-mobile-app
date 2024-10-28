import {useEffect, useState} from 'react';
import {Image, ScrollView, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import HorizontalMovieScroll from '@components/horizontalMovieScroll';
import MovieInfo from '@components/movieInfo';
import Loader from '@components/loader';
import {imageUrl} from '@helpers/helper';
import {fetchData} from '@network/apiMethods';
import { colors } from '@theme/themes';


import {styles} from './styles';

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(false);

  const route = useRoute<RouteProp<MovieScreenParamList, 'MOVIE_DETAILS'>>();
  const {movieId} = route?.params;

  const [movieDetails, setMovieDetails] = useState<MovieCardData>({
    id: movieId,
    title: '',
    poster_path: '',
    backdrop_path: '',
    overview: '',
    vote_average: 0,
    vote_count: 0,
    release_date: '',
    genre_ids: [],
    adult: false,
  });

  const [recommendation, setRecommendation] = useState([]);
  const [genreArr, setGenreArr] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const externalId = await fetchData(`/movie/${movieId}/external_ids`);

    const movie = await fetchData(`/find/${externalId?.imdb_id}`, {
      params: {external_source: 'imdb_id'},
    });
    const movieData = movie?.movie_results[0];

    const genre = await fetchData('/genre/movie/list');
    setGenreArr(genre?.genres);

    const reccomendMovies = await fetchData(
      `/movie/${movieId}/recommendations`,
      {params: {page: '1'}},
    );

    const recommendationData =
      reccomendMovies?.results?.map(
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
      ) || [];

    setRecommendation(recommendationData);

    const {
      id,
      title,
      poster_path,
      backdrop_path,
      overview,
      vote_average,
      vote_count,
      release_date,
      adult,
      genre_ids,
    } = movieData;

    const selectedMovieDetails = {
      id,
      title,
      poster_path,
      backdrop_path,
      overview,
      vote_average,
      vote_count,
      release_date,
      adult,
      genre_ids,
    };
    setMovieDetails(selectedMovieDetails);

    setIsLoading(false);
  };

  useEffect(() => {
    if (movieId) {
      getData();
    }
  }, [movieId]);

  const {backdrop_path} = movieDetails;

  if (isLoading) {
    return <Loader size={'large'} color={colors.primary} />;
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{uri: imageUrl(backdrop_path)}}
        resizeMode="contain"
        style={styles.movieImage}
      />
      <MovieInfo movieDetails={movieDetails} genreArr={genreArr} />
      <View style={styles.recommendContainer}>
        <HorizontalMovieScroll
          data={recommendation}
          sectionTitle="Recommendations"
        />
      </View>
    </ScrollView>
  );
};

export default MovieDetails;

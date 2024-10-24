import {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import {imageUrl} from '@helpers/helper';
import {fetchData} from '@network/apiMethods';
import HorizontalMovieScroll from '@components/horizontalMovieScroll/index';
import MovieInfo from '@components/movieInfo/index';

import {styles} from './styles';

const MovieDetails = () => {
  
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
  };

  useEffect(() => {
    if (movieId) {
      getData();
    }
  }, [movieId]);

  const {backdrop_path} = movieDetails;

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

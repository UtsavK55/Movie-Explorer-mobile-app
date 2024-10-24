import {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {imageUrl} from '@helpers/helper';
import {fetchData} from '@network/apiMethods';
import HorizontalMovieScroll from '@components/horizontalMovieScroll/HorizontalMovieScroll';

import {styles} from './styles';

const MovieDetailsComponent = () => {
  const route = useRoute<RouteProp<MovieScreenParamList, 'MOVIE_DETAILS'>>();
  const movieId = route?.params?.movieId;

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
    setRecommendation(
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
      ) || [],
    );

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

    for (const key in movieDetails) {
      setMovieDetails({
        id: id,
        title: title,
        poster_path: poster_path,
        backdrop_path: backdrop_path,
        overview: overview,
        vote_average: vote_average,
        vote_count: vote_count,
        release_date: release_date,
        adult: adult,
        genre_ids: genre_ids,
      });
    }
  };

  useEffect(() => {
    getData();
  }, [movieId]);

  const {
    title,
    backdrop_path,
    overview,
    release_date,
    vote_average,
    vote_count,
    adult,
    genre_ids,
  } = movieDetails;

  const roundedRating = Math.round(vote_average / 2);
  const filledStars = roundedRating;
  const borderStars = 5 - roundedRating;

  const movieGenre = genre_ids.map(genreId => {
    return genreArr.find(({id}) => id === genreId);
  });

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{uri: imageUrl(backdrop_path)}}
        resizeMode="contain"
        style={styles.movieImage}
      />

      <Text style={styles.title}>{title}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>{release_date}</Text>
        <Text>|</Text>
        <Text>
          {Array.from({length: filledStars}).map((_, index) => (
            <Icon
              key={`filled-${index}`}
              name="star"
              size={14}
              color={'black'}
            />
          ))}
          {Array.from({length: borderStars}).map((_, index) => (
            <Icon
              key={`border-${index}`}
              name="star-border"
              size={14}
              color={'black'}
            />
          ))}
        </Text>
        <Text style={styles.info}>({vote_count})</Text>
        <Text>|</Text>
        <Text style={styles.info}>{adult ? 'Adult 18+' : 'U/A 16+'}</Text>
      </View>
      <View style={styles.genreContainer}>
        {movieGenre?.map(({name, id}) => (
          <Text key={id}>{name}</Text>
        ))}
      </View>
      <Text style={styles.overview}>{overview}</Text>
      <View style={styles.recommendContainer}>
        <HorizontalMovieScroll
          data={recommendation}
          sectionTitle="Recommendations"
        />
      </View>
    </ScrollView>
  );
};

export default MovieDetailsComponent;

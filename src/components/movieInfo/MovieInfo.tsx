import {useMemo} from 'react';
import {Text, View} from 'react-native';

import Rating from '@components/rating/index';

import {styles} from './styles';

const MovieInfo = ({
  movieDetails,
  genreArr,
}: {
  movieDetails: MovieCardData;
  genreArr: GenreArr;
}) => {
  const {
    title,
    overview,
    release_date,
    vote_average,
    vote_count,
    adult,
    genre_ids,
  } = movieDetails;

  const movieGenre = useMemo(() => {
    return genre_ids.map(genreId => {
      return genreArr.find(({id}) => id === genreId);
    });
  }, [genre_ids, genreArr]);

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>{release_date}</Text>
        <Text>|</Text>
        <Rating vote_average={vote_average} />
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
    </View>
  );
};

export default MovieInfo;

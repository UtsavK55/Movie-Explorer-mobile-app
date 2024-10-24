import {useMemo} from 'react';
import {Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
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

  const {filledStars, borderStars} = useMemo(() => {
    const roundedRating = Math.round(vote_average / 2);
    return {
      filledStars: roundedRating,
      borderStars: 5 - roundedRating,
    };
  }, [vote_average]);

  const movieGenre = genre_ids?.map(genreId => {
    return genreArr?.find(({id}) => id === genreId);
  });

  return (
    <View>
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
    </View>
  );
};

export default MovieInfo;

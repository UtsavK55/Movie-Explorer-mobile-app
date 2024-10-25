import {Image, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ROUTES} from '@constants/Routes';
import {imageUrl} from '@helpers/helper';

import {styles} from './styles';

const MovieCard = ({data, large}: {data: MovieCardData; large?: boolean}) => {
  const navigation = useNavigation<MovieNavigationType>();
  const {id, poster_path} = data;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push(ROUTES.MOVIES_STACK_SCREEN.MOVIE_DETAILS, {
          movieId: id,
        })
      }>
      <View style={large ? styles.largeContainer : styles.container}>
        <Image
          source={{uri: imageUrl(poster_path)}}
          style={large ? styles.largeMovieImage : styles.movieImage}
        />
      </View>
    </TouchableOpacity>
  );
};
export default MovieCard;

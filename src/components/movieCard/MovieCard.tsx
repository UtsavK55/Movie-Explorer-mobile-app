import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ROUTES} from '@constants/Routes';
import {imageUrl} from '@helpers/helper';

import {styles} from './styles';

const MovieCard = ({data, large}: {data: MovieCardData; large?: boolean}) => {
  
  const navigation = useNavigation<MovieNavigationType>();
  const {id, title, poster_path} = data;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(ROUTES.MOVIES_STACK_SCREEN.MOVIE_DETAILS, {
          movieId: id,
        })
      }>
      <View style={large ? styles.largeContainer : styles.container}>
        <Image
          source={{uri: imageUrl(poster_path)}}
          style={large ? styles.largeMovieImage : styles.movieImage}
        />
        <Text style={large ? styles.largeMovieTitle : styles.movieTitle}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default MovieCard;

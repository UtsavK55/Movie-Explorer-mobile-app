import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import Rating from '@components/rating';
import {colors} from '@theme/themes';
import {ROUTES} from '@constants/Routes';
import {imageUrl} from '@helpers/helper';

import {styles} from './styles';

const FavouriteMovieCard = ({movie}: {movie: MovieCardData}) => {
  const navigation = useNavigation<MovieNavigationType>();
  const {id, title, poster_path, vote_average, vote_count, overview} = movie;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(ROUTES.MOVIES_STACK_SCREEN.MOVIE_DETAILS, {
          movieId: id,
        })
      }>
      <View style={styles.movieItem}>
        <Image
          source={{uri: imageUrl(poster_path)}}
          style={styles.movieImage}
        />
        <View style={styles.movieInfo}>
          <Text style={styles.movieTitle} numberOfLines={1}>
            {title}
          </Text>
          <View style={styles.ratingContainer}>
            <Rating vote_average={vote_average} />
            <Text style={styles.info}>({vote_count})</Text>
          </View>
          <Text style={styles.info} numberOfLines={3}>
            {overview}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ROUTES.MOVIES_STACK_SCREEN.MODAL_SCREEN, {
              movieId: id,
              title: title,
              isAdding: false,
            })
          }
          style={styles.removeButton}>
          <Icon name="trash" size={20} color={colors.danger} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default FavouriteMovieCard;

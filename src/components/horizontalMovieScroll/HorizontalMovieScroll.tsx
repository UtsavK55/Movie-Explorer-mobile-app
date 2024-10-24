import {FlatList, Text, View} from 'react-native';

import MovieCard from '@components/movieCard/MovieCard';

import {styles} from './styles';

const HorizontalMovieScroll = ({
  data,
  sectionTitle,
}: {
  data: MovieCardDataArr;
  sectionTitle: string;
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <MovieCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalMovieScroll;

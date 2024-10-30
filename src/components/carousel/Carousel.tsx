import {useRef, useState} from 'react';
import {FlatList, Text, View, ViewToken} from 'react-native';

import MovieCard from '@components/movieCard';
import NoDataFound from '@components/noDataFound';

import {styles} from './styles';

const Carousel = ({data}: {data: MovieCardDataArr}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const flatListRef = useRef(null);

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken<MovieCardData>[]}) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index);
      }
    },
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={styles().carouselContainer}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={({item}) => <MovieCard data={item} large />}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        ListEmptyComponent={<NoDataFound item="movie" />}
      />
      <View style={styles().pagination}>
        {data?.map((_, index) => (
          <View
            key={index}
            style={[
              styles().paginationDot,
              index === activeIndex && styles().paginationDotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;

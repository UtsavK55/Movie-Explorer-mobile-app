import React from 'react';
import {FlatList, Text, View} from 'react-native';

import MovieCard from '@components/movieCard';
import Loader from '@components/loader';
import usePagination from '@hooks/usePagination';

import {styles} from './styles';

const HorizontalMovieScroll = ({
  url,
  sortBy,
  sectionTitle,
}: {
  url: string;
  sortBy?: string;
  sectionTitle: string;
}) => {
  
  const {data, loadingMore, loadMore} = usePagination(url, sortBy);

  const renderFooter = () => {
    if (!loadingMore || data.length < 20) return null;
    return <Loader size={'small'} />;
  };

  const renderEmptyComponent = () => {
    return (
      <View style={styles.container}>
        <Text>No data found</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <MovieCard data={item} />}
        keyExtractor={({id}) => id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={renderFooter}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        ListEmptyComponent={renderEmptyComponent}
      />
    </View>
  );
};

export default HorizontalMovieScroll;

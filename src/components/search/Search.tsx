import {useEffect, useState} from 'react';
import {FlatList, Text, View, RefreshControl} from 'react-native';

import Loader from '@components/loader';
import MovieCard from '@components/movieCard';
import SearchInput from '@components/searchInput';

import usePagination from '@hooks/usePagination';
import {search} from '@network/apiUrls';
import {colors} from '@theme/themes';
import {styles} from './styles';

const Search = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [url, setUrl] = useState(search);
  const {
    data,
    refreshing,
    loadingMore,
    handleRefresh,
    loadMore,
    initialLoader,
  } = usePagination(url);

  useEffect(() => {
    // Reset pagination state when search term changes
    if (searchTerm) {
      setUrl(`/search/movie?query=${encodeURIComponent(searchTerm)}`);
      handleRefresh();
    }
  }, [searchTerm]);

  return (
    <View style={styles.container}>
      <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        placeHolder="Search movies by name..."
      />

      {initialLoader ? (
        <Loader />
      ) : searchTerm && !data.length ? (
        <Text style={styles.tooltip}>No movie found</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => <MovieCard data={item} />}
          numColumns={2}
          contentContainerStyle={styles.contentContainerStyle}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          ListFooterComponent={
            loadingMore ? (
              <Loader size={'small'} color={colors.primary} />
            ) : null
          }
        />
      )}
    </View>
  );
};

export default Search;

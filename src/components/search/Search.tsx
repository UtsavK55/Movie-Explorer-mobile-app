import {FlatList, Text, View, RefreshControl} from 'react-native';

import Loader from '@components/loader';
import MovieCard from '@components/movieCard';
import SearchInput from '@components/searchInput';
import NoDataFound from '@components/noDataFound';

import {colors} from '@theme/themes';
import {styles} from './styles';

const Search = ({
  searchTerm,
  setSearchTerm,
  data,
  loadMore,
  initialLoader,
  refreshing,
  handleRefresh,
  loadingMore,
}: SearchProps) => {
  return (
    <View style={styles.container}>
      <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        placeHolder="Search movies by name..."
      />

      {initialLoader ? (
        <Loader />
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
          ListEmptyComponent={
            searchTerm && !data?.length ? <NoDataFound /> : null
          }
        />
      )}
    </View>
  );
};

export default Search;

import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';

import BaseContainer from '@components/baseContainer';
import FavouriteMovieCard from '@components/favouriteMovieCard';
import Loader from '@components/loader';
import NoDataFound from '@components/noDataFound';

import {accountId} from '@constants/token';
import usePagination from '@hooks/usePagination';
import {account} from '@network/apiUrls';

import {colors} from '@theme/themes';

const FavouritesScreen = () => {
  
  const {data, refreshing, loadingMore, handleRefresh, loadMore} =
    usePagination(account(accountId), 'created_at.desc');

  const renderFooter = () => {
    if (!loadingMore || data.length < 20) return null;
    return <Loader size={'small'} />;
  };

  return (
    <BaseContainer>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => <FavouriteMovieCard movie={item} />}
          contentContainerStyle={styles.listContainer}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          ListFooterComponent={renderFooter}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
          ListEmptyComponent={<NoDataFound item="favourite movies" />}
        />
      </View>
    </BaseContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.search,
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: 20,
  },
});

export default FavouritesScreen;

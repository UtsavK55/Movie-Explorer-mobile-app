import {FlatList, RefreshControl, View} from 'react-native';

import BaseContainer from '@components/baseContainer';
import FavouriteMovieCard from '@components/favouriteMovieCard';
import Loader from '@components/loader';
import NoDataFound from '@components/noDataFound';

import {accountId} from '@constants/token';
import usePagination from '@hooks/usePagination';
import {account} from '@network/apiUrls';

import {styles} from './styles';

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

export default FavouritesScreen;

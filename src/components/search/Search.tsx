import {Text, TextInput, View, FlatList, ActivityIndicator} from 'react-native';
import {useEffect, useState} from 'react';

import MovieCard from '@components/movieCard';
import Loader from '@components/loader';
import SearchInput from '@components/searchInput';
import {fetchData} from '@network/apiMethods';
import {colors} from '@theme/themes';

import {styles} from './styles';

const Search = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [data, setData] = useState<MovieCardDataArr>([]);
  const [page, setPage] = useState(1);

  const loadMoreMovies = async () => {
    if (isDataLoading) return;
    setIsDataLoading(true);

    const newMovies = await fetchData(`/search/movie`, {
      params: {query: searchTerm, page: page + 1},
    });

    // Combine the current data with new data, ensuring no duplicates
    setData(prevData => {
      const existingIds = prevData.map(movie => movie.id);
      const uniqueNewMovies = newMovies?.results?.filter(
        ({id}: {id: number}) => !existingIds?.includes(id),
      );

      return [...prevData, ...uniqueNewMovies];
    });

    setPage(prevPage => prevPage + 1);
    setIsDataLoading(false);
  };

  const handleEndReached = () => {
    loadMoreMovies();
  };

  const getData = async () => {
    setIsLoading(true);

    const searchedMovies = await fetchData(`/search/movie`, {
      params: {query: searchTerm, page: '1'},
    });

    const searchedData =
      searchedMovies?.results?.map(
        ({
          id,
          title,
          poster_path,
          overview,
          vote_average,
          vote_count,
          release_date,
        }: MovieCardData) => ({
          id,
          title,
          poster_path,
          overview,
          vote_average,
          vote_count,
          release_date,
        }),
      ) || [];

    setData(searchedData);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [searchTerm]);

  return (
    <View style={styles.container}>
      <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        placeHolder="Search movies by name..."
      />

      {isLoading ? (
        <Loader size={'large'} color={colors.primary} />
      ) : searchTerm != '' && !data.length ? (
        <Text style={styles.tooltip}>No movie found</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => <MovieCard data={item} />}
          numColumns={2}
          contentContainerStyle={styles.contentContainerStyle}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isDataLoading ? (
              <Loader size={'small'} color={colors.primary} />
            ) : null
          }
        />
      )}
    </View>
  );
};

export default Search;

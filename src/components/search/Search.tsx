import {Text, TextInput, View, FlatList} from 'react-native';
import {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {theme} from '@theme/themes';
import {fetchData} from '@network/apiMethods';
import MovieCard from '@components/movieCard';
import {useLoadingContext} from '@contexts/LoadingContext';
import Loader from '@components/loader';

import {styles} from './styles';

const Search = () => {
  const {isLoading, setIsLoading} = useLoadingContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedData, setsearchedData] = useState([]);

  const getData = async () => {
    setIsLoading(true);

    const searchedMovies = await fetchData(`/search/movie`, {
      params: {query: searchTerm, page: '1'},
    });

    setsearchedData(
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
      ) || [],
    );
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [searchTerm]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon
          name="search"
          size={16}
          color={theme.colors.textSecondary}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search movies by name..."
          placeholderTextColor={theme.colors.textSecondary}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      {searchTerm != '' && !searchedData.length ? (
        <Text style={styles.tooltip}>No movie found</Text>
      ) : (
        <FlatList
          data={searchedData}
          renderItem={({item}) => <MovieCard data={item} />}
          numColumns={2}
          contentContainerStyle={{alignSelf: 'center'}}
        />
      )}
    </View>
  );
};

export default Search;

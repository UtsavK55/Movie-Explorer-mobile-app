import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import Carousel from '@components/carousel';
import HorizontalMovieScroll from '@components/horizontalMovieScroll';
import BaseContainer from '@components/baseContainer';
import Loader from '@components/loader';
import { discover } from '@network/apiUrls';
import { fetchData } from '@network/apiMethods';
import { movieSections } from '@constants/constants';
import { useThemeColors } from '@theme/themes';

import { styles } from './styles';

const MoviesScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [carouselData, setCarouselData] = useState([]);
  const colors = useThemeColors();

  const getData = async () => {
    setIsLoading(true);
    const movies = await fetchData(discover, {
      params: { page: 1, sort_by: 'revenue.desc' },
    });
    const carouselMovies =
      movies?.results?.map(
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

    setCarouselData(carouselMovies);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <BaseContainer>
      <ScrollView style={styles().container}>
        <Carousel data={carouselData} />
        {movieSections.map(({ id, sortBy, sectionTitle }) => (
          <HorizontalMovieScroll
            key={id}
            url={discover}
            sortBy={sortBy}
            sectionTitle={sectionTitle}
          />
        ))}
      </ScrollView>
    </BaseContainer>
  );
};
export default MoviesScreen;

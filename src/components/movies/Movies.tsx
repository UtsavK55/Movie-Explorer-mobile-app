import {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

import Carousel from '@components/carousel';
import HorizontalMovieScroll from '@components/horizontalMovieScroll';
import Loader from '@components/loader';

import {getAllMovies} from '@helpers/helper';
import {discover} from '@network/apiUrls';
import {colors} from '@theme/themes';

import {styles} from './styles';

const Movies = () => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [carouselData, setCarouselData] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const carouselMovies = await getAllMovies(1, 'revenue.desc');
    setCarouselData(carouselMovies);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loader size={'large'} color={colors.primary} />;
  }
  return (
    <ScrollView style={styles.container}>
      <Carousel data={carouselData} />
      <HorizontalMovieScroll
        url={discover}
        sortBy="popularity.desc"
        sectionTitle="Popular movies"
      />
      <HorizontalMovieScroll
        url={discover}
        sortBy="vote_count.desc"
        sectionTitle="Most viewed"
      />
      <HorizontalMovieScroll
        url={discover}
        sortBy="primary_release_date.asc"
        sectionTitle="Old is Gold"
      />
    </ScrollView>
  );
};
export default Movies;

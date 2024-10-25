import {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

import Carousel from '@components/carousel';
import HorizontalMovieScroll from '@components/horizontalMovieScroll';
import {getAllMovies} from '@helpers/helper';
import Loader from '@components/loader';
import {useLoadingContext} from '@contexts/LoadingContext';

import {styles} from './styles';

const Movies = () => {
  const {isLoading, setIsLoading} = useLoadingContext();

  const [carouselData, setCarouselData] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const [oldData, setOldData] = useState([]);
  const [mostViewedData, setMostViewedData] = useState([]);

  const getData = async () => {
    setIsLoading(true);
    const carouselMovies = await getAllMovies(1, 'revenue.desc');
    setCarouselData(carouselMovies);

    const popularMovies = await getAllMovies(1, 'popularity.desc');
    setPopularData(popularMovies);

    const oldMovies = await getAllMovies(1, 'primary_release_date.asc');
    setOldData(oldMovies);

    const mostViewedMovies = await getAllMovies(1, 'vote_count.desc');
    setMostViewedData(mostViewedMovies);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ScrollView style={styles.container}>
      <Carousel data={carouselData} />
      <HorizontalMovieScroll data={popularData} sectionTitle="Popular movies" />
      <HorizontalMovieScroll data={mostViewedData} sectionTitle="Most viewed" />
      <HorizontalMovieScroll data={oldData} sectionTitle="Old is Gold" />
    </ScrollView>
  );
};

export default Movies;

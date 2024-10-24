import {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';

import Carousel from '@components/carousel/Carousel';
import HorizontalMovieScroll from '@components/horizontalMovieScroll/HorizontalMovieScroll';
import {getAllMovies} from '@helpers/helper';

import {styles} from './styles';

const MoviesComponent = () => {
  
  const [carouselData, setCarouselData] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const [oldData, setOldData] = useState([]);
  const [mostViewedData, setMostViewedData] = useState([]);

  const getData = async () => {
    const carouselMovies = await getAllMovies(1, 'revenue.desc');
    setCarouselData(carouselMovies);

    const popularMovies = await getAllMovies(1, 'popularity.desc');
    setPopularData(popularMovies);

    const oldMovies = await getAllMovies(1, 'primary_release_date.asc');
    setOldData(oldMovies);

    const mostViewedMovies = await getAllMovies(1, 'vote_count.desc');
    setMostViewedData(mostViewedMovies);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Carousel data={carouselData} />
      <HorizontalMovieScroll data={popularData} sectionTitle="Popular movies" />
      <HorizontalMovieScroll data={mostViewedData} sectionTitle="Most viewed" />
      <HorizontalMovieScroll data={oldData} sectionTitle="Old is Gold" />
    </ScrollView>
  );
};

export default MoviesComponent;

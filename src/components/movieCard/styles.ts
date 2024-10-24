import {Dimensions, StyleSheet} from 'react-native';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.35,
    marginHorizontal: 8,
  },
  largeContainer: {
    height: windowHeight * 0.6,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieImage: {
    width: '100%',
    height: windowHeight * 0.22,
    borderRadius: 8,
  },
  largeMovieImage: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.5,
    borderRadius: 10,
  },
  movieTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  largeMovieTitle: {
    fontSize: 24,
    marginTop: 10,
    marginHorizontal: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

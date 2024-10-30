import {StyleSheet} from 'react-native';
import {breakpoints, spacing, useThemeColors} from '@theme/themes';
import {windowHeight, windowWidth} from '@constants/dimensions';

export const styles = () => {
  const colors = useThemeColors();
  return StyleSheet.create({
    container: {
      width:
        windowWidth > breakpoints.phone
          ? windowWidth * 0.15
          : windowWidth * 0.35,
      marginHorizontal: 8,
      marginVertical: 10,
    },
    largeContainer: {
      height:
        windowWidth > breakpoints.phone
          ? windowHeight * 0.75
          : windowHeight * 0.6,
      width: windowWidth,
      justifyContent: 'center',
      alignItems: 'center',
    },
    movieImage: {
      width: '100%',
      height:
        windowWidth > breakpoints.phone
          ? windowHeight * 0.47
          : windowHeight * 0.22,
      borderRadius: 8,
    },
    largeMovieImage: {
      width:
        windowWidth > breakpoints.phone ? windowWidth * 0.2 : windowWidth * 0.9,
      height:
        windowWidth > breakpoints.phone
          ? windowHeight * 0.6
          : windowHeight * 0.5,
      borderRadius: 10,
    },
  });
};

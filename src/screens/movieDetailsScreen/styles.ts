import {StyleSheet} from 'react-native';
import {breakpoints, spacing, useThemeColors} from '@theme/themes';
import {windowHeight, windowWidth} from '@constants/dimensions';

export const movieDetailsStyles = () => {
  const colors = useThemeColors();
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    movieImage: {
      width: windowWidth,
      height:
        windowWidth > breakpoints.phone
          ? windowHeight * 0.6
          : windowHeight * 0.3,
    },
    sectionTitle: {
      marginVertical: 20,
      fontSize: spacing.m,
      fontWeight: 'bold',
      marginHorizontal: 10,
    },
    recommendContainer: {
      marginTop: 40,
    },
    favouriteIcon: {
      position: 'absolute',
      right: 20,
      top: 20,
      backgroundColor: colors.background,
      borderRadius: 20,
      padding: 4,
    },
  });
};

import {StyleSheet} from 'react-native';

import {breakpoints, useThemeColors} from '@theme/themes';
import {windowHeight, windowWidth} from '@constants/dimensions';

export const styles = () => {
  const colors = useThemeColors();
  return StyleSheet.create({
    carouselContainer: {
      height:
        windowWidth > breakpoints.phone
          ? windowHeight * 0.75
          : windowHeight * 0.6,
      width: windowWidth,
      marginBottom: 10,
    },
    pagination: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
    },
    paginationDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: colors.light,
      marginHorizontal: 4,
    },
    paginationDotActive: {
      backgroundColor: colors.primaryText,
    },
    emptyContainer: {
      flex: 1,
      justifyContent: 'center',
    },
  });
};

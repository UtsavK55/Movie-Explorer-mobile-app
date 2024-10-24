import {StyleSheet} from 'react-native';

import {windowHeight} from '@constants/dimensions';
import {theme} from '@theme/themes';

export const styles = StyleSheet.create({
  carouselContainer: {
    height: windowHeight * 0.6,
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
    backgroundColor: theme.colors.light,
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: theme.colors.foreground,
  },
});

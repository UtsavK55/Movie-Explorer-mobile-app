import {StyleSheet} from 'react-native';

import {windowHeight, windowWidth} from '@constants/dimensions';
import {theme} from '@theme/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  movieImage: {
    width: windowWidth,
    height: windowHeight * 0.3,
    aspectRatio: 1.75,
  },
  title: {
    fontSize: 28,
    marginTop: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    paddingBottom: 20,
    gap: 4,
    borderBottomColor: theme.colors.light,
    borderBottomWidth: 1,
  },
  info: {
    color: theme.colors.textSecondary,
    fontWeight: 'bold',
  },
  sectionTitle: {
    marginVertical: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  overview: {
    marginHorizontal: 10,
    marginVertical: 10,
    textAlign: 'center',
    color: theme.colors.textSecondary,
  },
  genreContainer: {
    marginTop: 20,
    color: theme.colors.foreground,
    flexDirection: 'row',
    gap: 8,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  recommendContainer:{
    marginTop:40
  }
});

import {StyleSheet} from 'react-native';

import {windowHeight, windowWidth} from '@constants/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  movieImage: {
    width: windowWidth,
    height: windowHeight * 0.3,
    aspectRatio: 1.75,
  },
  sectionTitle: {
    marginVertical: 20,
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  recommendContainer: {
    marginTop: 40,
  },
});

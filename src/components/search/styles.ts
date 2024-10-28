import {StyleSheet} from 'react-native';

import {colors} from '@theme/themes';

export const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },
  tooltip: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textSecondary,
  },
  contentContainerStyle: {
    alignSelf: 'center',
  },
});

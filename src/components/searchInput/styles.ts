import {StyleSheet} from 'react-native';
import {colors} from '@theme/themes';

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.search,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
  },

  searchIcon: {
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    height: 40,
    color: colors.foreground,
  },
});

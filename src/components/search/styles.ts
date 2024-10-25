import {theme} from '@src/theme/themes';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
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
    color: 'black',
  },
  tooltip: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight:'bold',
    color: theme.colors.textSecondary,
  },
});

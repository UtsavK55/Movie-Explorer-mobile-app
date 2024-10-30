import {StyleSheet} from 'react-native';
import {colors} from '@theme/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.search,
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.textSecondary,
    marginTop: 20,
  },
});

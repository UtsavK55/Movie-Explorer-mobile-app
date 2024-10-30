import {StyleSheet} from 'react-native';
import {spacing, useThemeColors} from '@theme/themes';

export const styles = () => {
  const colors = useThemeColors();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.search,
      paddingTop: 20,
    },
    header: {
      fontSize: spacing.l,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    listContainer: {
      paddingHorizontal: 16,
    },
    emptyText: {
      textAlign: 'center',
      fontSize: spacing.m,
      color: colors.textSecondary,
      marginTop: 20,
    },
  });
};

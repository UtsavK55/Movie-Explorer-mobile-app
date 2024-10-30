import {StyleSheet} from 'react-native';
import {fontSize, useThemeColors} from '@theme/themes';

export const styles = () => {
  const colors = useThemeColors();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.gray,
      paddingTop: 20,
    },
    header: {
      fontSize: fontSize.l,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    listContainer: {
      paddingHorizontal: 16,
    },
    emptyText: {
      textAlign: 'center',
      fontSize: fontSize.m,
      color: colors.textSecondary,
      marginTop: 20,
    },
  });
};

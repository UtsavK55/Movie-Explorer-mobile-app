import {StyleSheet} from 'react-native';
import {spacing, useThemeColors} from '@theme/themes';

export const styles = () => {
  const colors = useThemeColors();
  return StyleSheet.create({
    container: {
      marginHorizontal: 10,
      marginVertical: 20,
      flex: 1,
    },
    sectionTitle: {
      marginBottom: 10,
      fontSize: spacing.m,
      fontWeight: 'bold',
      marginHorizontal: 10,
      color: colors.foreground,
    },
  });
};

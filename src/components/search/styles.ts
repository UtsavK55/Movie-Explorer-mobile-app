import {StyleSheet} from 'react-native';
import {spacing, useThemeColors} from '@theme/themes';

export const searchStyles = () => {
  const colors = useThemeColors();
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    tooltip: {
      textAlign: 'center',
      fontSize: spacing.m,
      fontWeight: 'bold',
      color: colors.textSecondary,
    },
    contentContainerStyle: {
      alignSelf: 'center',
    },
  });
};

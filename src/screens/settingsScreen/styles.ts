import {StyleSheet} from 'react-native';
import {spacing, useThemeColors} from '@theme/themes';

export const settingStyles = () => {
  const colors = useThemeColors();
  return StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
    },
    title: {
      fontSize: spacing.l,
      color: colors.foreground,
      marginVertical: 10,
    },
  });
};

import {StyleSheet} from 'react-native';
import {fontSize, useThemeColors} from '@theme/themes';

export const settingStyles = () => {
  const colors = useThemeColors();
  return StyleSheet.create({
    container: {
      flex: 1,
      margin: 10,
    },
    title: {
      fontSize: fontSize.l,
      color: colors.primaryText,
      marginVertical: 10,
    },
  });
};

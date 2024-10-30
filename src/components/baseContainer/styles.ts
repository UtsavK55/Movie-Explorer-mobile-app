import {StyleSheet} from 'react-native';
import {useThemeColors} from '@theme/themes';

export const baseContainerStyles = () => {
  const colors = useThemeColors();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
  });
};

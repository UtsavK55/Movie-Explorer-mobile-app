import {StyleSheet} from 'react-native';
import {useThemeColors} from '@theme/themes';

export const styles = () => {
  const colors = useThemeColors();
  return StyleSheet.create({
    container: {
      flex: 1,
    },
  });
};

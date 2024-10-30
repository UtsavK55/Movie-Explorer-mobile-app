import {StyleSheet} from 'react-native';

import {windowHeight, windowWidth} from '@constants/dimensions';
import {spacing, useThemeColors} from '@theme/themes';

export const styles = () => {
  const colors = useThemeColors();
  return StyleSheet.create({
    image: {
      height: windowHeight * 0.2,
      width: windowWidth * 0.85,
      alignSelf: 'center',
      marginTop: 60,
      marginBottom: 20,
    },

    buttonContainer: {
      marginTop: 4,
    },

    text: {
      fontSize: spacing.xxl,
      marginHorizontal: 10,
      textAlign: 'center',
      color: colors.primary,
      marginBottom: 32,
    },
  });
};

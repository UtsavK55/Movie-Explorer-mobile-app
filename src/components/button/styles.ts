import {StyleSheet} from 'react-native';
import {spacing, useThemeColors} from '@theme/themes';

export const buttonStyles = () => {
  const colors = useThemeColors();

  return StyleSheet.create({
    button: {
      borderRadius: 8,
      padding: 8,
      backgroundColor: colors.primary,
      display: 'flex',
      alignSelf: 'center',
      paddingHorizontal: 28,
      paddingVertical: 10,
      zIndex: 1,
    },

    flat: {
      backgroundColor: 'transparent',
      paddingHorizontal: 8,
      paddingVertical: 8,
    },

    buttonText: {
      color: colors.background,
      textAlign: 'center',
      fontSize: spacing.m,
    },

    flatText: {
      color: colors.primary,
    },

    pressed: {
      opacity: 0.75,
      borderRadius: 4,
    },
  });
};

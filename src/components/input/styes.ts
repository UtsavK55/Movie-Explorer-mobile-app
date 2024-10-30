import {StyleSheet} from 'react-native';
import {fontSize, useThemeColors} from '@theme/themes';

export const styles = () => {
  const colors = useThemeColors();
  return StyleSheet.create({
    inputContainer: {
      marginHorizontal: 32,
      marginVertical: 10,
      position: 'relative',
    },

    label: {
      fontSize: fontSize.m,
      color: colors.textSecondary,
      marginBottom: 4,
    },

    input: {
      backgroundColor: colors.gray,
      color: colors.textSecondary,
      padding: 6,
      borderRadius: 8,
      fontSize: fontSize.m,
    },

    inputMultiline: {
      minHeight: 100,
      textAlignVertical: 'top',
    },

    invalidLabel: {
      fontSize: fontSize.m,
      color: colors.error,
    },

    invalidInput: {
      backgroundColor: colors.error,
    },
    icon: {
      position: 'absolute',
      bottom: 8,
      right: 10,
    },
  });
};

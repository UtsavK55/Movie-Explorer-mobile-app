import {StyleSheet} from 'react-native';
import {spacing, useThemeColors} from '@theme/themes';

export const styles = () => {
  const colors = useThemeColors();
  return StyleSheet.create({
    inputContainer: {
      marginHorizontal: 32,
      marginVertical: 10,
      position: 'relative',
    },

    label: {
      fontSize: spacing.m,
      color: colors.textSecondary,
      marginBottom: 4,
    },

    input: {
      backgroundColor: colors.search,
      color: colors.textSecondary,
      padding: 6,
      borderRadius: 8,
      fontSize: spacing.m,
    },

    inputMultiline: {
      minHeight: 100,
      textAlignVertical: 'top',
    },

    invalidLabel: {
      fontSize: spacing.m,
      color: colors.danger,
    },

    invalidInput: {
      backgroundColor: colors.danger,
    },
    icon: {
      position: 'absolute',
      bottom: 8,
      right: 10,
    },
  });
};

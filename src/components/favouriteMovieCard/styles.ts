import {StyleSheet} from 'react-native';
import {spacing, useThemeColors} from '@theme/themes';

export const styles = () => {
  const colors = useThemeColors();

  return StyleSheet.create({
    movieItem: {
      flexDirection: 'row',
      backgroundColor: colors.background,
      borderRadius: 10,
      marginBottom: 12,
      padding: 12,
      shadowColor: colors.foreground,
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.2,
      shadowRadius: 1,
      elevation: 2,
      position: 'relative',
    },
    movieImage: {
      width: 80,
      height: 120,
      borderRadius: 8,
      marginRight: 12,
    },
    movieInfo: {
      flex: 1,
      gap: 10,
      marginRight: 10,
    },
    movieTitle: {
      fontSize: spacing.l,
      fontWeight: '600',
      marginBottom: 4,
      marginRight: 10,
      color: colors.foreground,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    removeButton: {
      position: 'absolute',
      right: 10,
      top: 14,
    },
    info: {
      color: colors.textSecondary,
      fontWeight: 'bold',
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
};

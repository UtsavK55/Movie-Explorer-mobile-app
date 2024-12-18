import {StyleSheet} from 'react-native';
import {fontSize, useThemeColors} from '@theme/themes';

export const styles = () => {
  const colors = useThemeColors();
  return StyleSheet.create({
    title: {
      fontSize: fontSize.xl,
      marginTop: 20,
      marginHorizontal: 10,
      fontWeight: 'bold',
      textAlign: 'center',
      color: colors.primaryText,
    },
    infoContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: 10,
      paddingBottom: 20,
      gap: 4,
      borderBottomColor: colors.light,
      borderBottomWidth: 1,
    },
    info: {
      color: colors.textSecondary,
      fontWeight: 'bold',
    },
    overview: {
      marginHorizontal: 10,
      marginVertical: 10,
      textAlign: 'center',
      color: colors.textSecondary,
    },
    genreContainer: {
      marginTop: 20,
      color: colors.primaryText,
      flexDirection: 'row',
      gap: 8,
      alignSelf: 'center',
      justifyContent: 'center',
    },
    genreTitleContainer: {backgroundColor: colors.primaryText, padding: 6},
    genreTitle: {color: colors.background},
  });
};

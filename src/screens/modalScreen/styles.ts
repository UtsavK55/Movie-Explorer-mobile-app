import {StyleSheet} from 'react-native';
import {fontSize, useThemeColors} from '@theme/themes';

export const styles = () => {
  const colors = useThemeColors();
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      backgroundColor: colors.gray,
      borderRadius: 10,
      padding: 20,
      width: '90%',
      maxWidth: 400,
      alignItems: 'center',
    },
    title: {
      fontSize: fontSize.l,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    iconContainer: {
      marginBottom: 20,
    },
    message: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 30,
    },
    itemName: {
      fontWeight: 'bold',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    button: {
      padding: 15,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    cancelButton: {
      backgroundColor: colors.textSecondary,
    },
    confirmButton: {
      backgroundColor: colors.primary,
    },
    buttonText: {
      color: colors.background,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });
};

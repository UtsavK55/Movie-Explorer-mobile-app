import {StyleSheet} from 'react-native';
import {useThemeColors} from '@theme/themes';

export const styles = () => {
  const colors = useThemeColors();
  return StyleSheet.create({
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.gray,
      borderRadius: 10,
      paddingHorizontal: 12,
      marginBottom: 16,
    },

    searchIcon: {
      marginRight: 8,
    },

    searchInput: {
      flex: 1,
      height: 40,
      color: colors.primaryText,
    },
  });
};

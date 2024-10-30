import {ActivityIndicator, View} from 'react-native';

import {useThemeColors} from '@theme/themes';
import {styles} from './styles';

const Loader = ({
  size,
  color,
}: {
  size?: number | 'small' | 'large';
  color?: string;
}) => {
  const colors = useThemeColors();
  return (
    <View style={styles().container}>
      <ActivityIndicator
        size={size || 'large'}
        color={color || colors.primary}
      />
    </View>
  );
};

export default Loader;

import {ActivityIndicator, View} from 'react-native';

import {colors} from '@theme/themes';
import {styles} from './styles';

const Loader = ({
  size,
  color,
}: {
  size?: number | 'small' | 'large';
  color?: string;
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={size || 'large'}
        color={color || colors.primary}
      />
    </View>
  );
};

export default Loader;

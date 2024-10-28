import {ActivityIndicator, View} from 'react-native';

import {styles} from './styles';

const Loader = ({
  size,
  color,
}: {
  size: number | 'small' | 'large';
  color: string;
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loader;

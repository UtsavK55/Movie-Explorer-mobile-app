import {Text, View} from 'react-native';
import {styles} from './styles';

const NoDataFound = ({item}: {item?: string}) => {
  return (
    <View style={styles.container}>
      <Text>No {item || 'data'} found</Text>
    </View>
  );
};

export default NoDataFound;

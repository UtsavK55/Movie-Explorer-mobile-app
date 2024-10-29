import {Text, View} from 'react-native';
import {styles} from './styles';

const NoDataFound = () => {
  return (
    <View style={styles.container}>
      <Text>No data found</Text>
    </View>
  );
};

export default NoDataFound;

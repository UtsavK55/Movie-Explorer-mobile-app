import {SafeAreaView} from 'react-native';
import {baseContainerStyles} from './styles';

const BaseContainer = ({children}: {children: React.ReactNode}) => {
  
  const styles = baseContainerStyles();
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default BaseContainer;

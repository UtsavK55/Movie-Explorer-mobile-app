import {SafeAreaView} from 'react-native';

import {styles} from './styles';

const BaseContainer = ({children}: {children: React.ReactNode}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default BaseContainer;

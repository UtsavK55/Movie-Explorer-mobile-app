import React from 'react';
import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import Navigator from '@navigation/Navigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

export default App;

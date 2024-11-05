import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '@screens/login/Login';
import { ROUTES } from '@constants/Routes';

const AuthStack = createNativeStackNavigator<AuthScreenParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={ROUTES.Auth.LOGIN}
        component={Login}
        options={{ title: 'Login', gestureEnabled: false }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

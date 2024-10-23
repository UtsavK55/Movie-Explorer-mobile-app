import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomTabNavigator from '@navigation/BottomTabNavigator';
import Profile from '@screens/profile/Profile';
import {ROUTES} from '@constants/Routes';

const Navigator = () => {
    
  const Drawer = createDrawerNavigator<DrawerScreenParamList>();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name={ROUTES.Drawer.HOME} component={BottomTabNavigator} />
      <Drawer.Screen name={ROUTES.Drawer.PROFILE} component={Profile} />
    </Drawer.Navigator>
  );
};

export default Navigator;

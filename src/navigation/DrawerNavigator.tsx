import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomTabNavigator from '@navigation/BottomTabNavigator';
import ProfileScreen from '@screens/profileScreen/ProfileScreen';
import SettingsScreen from '@screens/settingsScreen/SettingsScreen';

import {ROUTES} from '@constants/Routes';
import {useThemeColors} from '@theme/themes';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator<DrawerScreenParamList>();
  const colors = useThemeColors();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {backgroundColor: colors.background},
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.primaryText,
      }}>
      <Drawer.Screen
        name={ROUTES.Drawer.HOME}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={ROUTES.Drawer.PROFILE}
        component={ProfileScreen}
        options={{
          headerStyle: {backgroundColor: colors.background},
          headerTintColor: colors.primaryText,
        }}
      />
      <Drawer.Screen
        name={ROUTES.Drawer.SETTINGS}
        component={SettingsScreen}
        options={{
          headerStyle: {backgroundColor: colors.background},
          headerTintColor: colors.primaryText,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

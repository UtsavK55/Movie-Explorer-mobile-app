import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Favourites from '@screens/favourites/Favourites';
import MoviesStackScreen from '@navigation/MoviesStackScreen';
import {ROUTES} from '@constants/Routes';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator<BottomTabScreenParamList>();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ROUTES.BOTTOM_TAB.MOVIES}
        component={MoviesStackScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={ROUTES.BOTTOM_TAB.FAVOURITES}
        component={Favourites}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import FavouritesScreen from '@screens/favouritesScreen/FavouritesScreen';
import MoviesStackScreen from '@navigation/MoviesStackScreen';

import {ROUTES} from '@constants/Routes';
import {useThemeColors} from '@theme/themes';

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator<BottomTabScreenParamList>();
  const navigation = useNavigation<DrawerNavigationType>();
  const colors = useThemeColors();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: colors.background},
        headerStyle: {backgroundColor: colors.background},
        headerTintColor: colors.primaryText,
      }}>
      <Tab.Screen
        name={ROUTES.BOTTOM_TAB.MOVIES}
        component={MoviesStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="movie" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.BOTTOM_TAB.FAVOURITES}
        component={FavouritesScreen}
        options={{
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{marginLeft: 10}}
                onPress={() => navigation.toggleDrawer()}>
                <Icon name="menu" size={20} color={colors.primaryText} />
              </TouchableOpacity>
            );
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="star" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

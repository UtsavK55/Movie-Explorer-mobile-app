import { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import {
  getFocusedRouteNameFromRoute,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import MovieDetailsScreen from '@screens/movieDetailsScreen/MovieDetailsScreen';
import MoviesScreen from '@screens/moviesScreen/MovieScreen';
import ModalScreen from '@screens/modalScreen/ModalScreen';
import SearchScreen from '@screens/searchScreen/SearchScreen';

import { ROUTES } from '@constants/Routes';
import { useThemeColors } from '@theme/themes';

const MoviesStackScreen = () => {
  const MovieStack = createNativeStackNavigator<MovieScreenParamList>();
  const drawerNavigation = useNavigation<DrawerNavigationType>();
  const tabNavigation = useNavigation<BottomTabNavigationType>();
  const movieStackNavigation = useNavigation<MovieNavigationType>();

  const route = useRoute<RouteProp<MovieScreenParamList>>();
  const colors = useThemeColors();

  useLayoutEffect(() => {
    const routeName =
      getFocusedRouteNameFromRoute(route) ??
      ROUTES.MOVIES_STACK_SCREEN.MOVIES_SCREEN;

    const shouldHideTabBar =
      routeName === ROUTES.MOVIES_STACK_SCREEN.MOVIE_DETAILS ||
      routeName === ROUTES.MOVIES_STACK_SCREEN.SEARCH_SCREEN ||
      routeName === ROUTES.MOVIES_STACK_SCREEN.MODAL_SCREEN;

    tabNavigation.setOptions({
      tabBarStyle: {
        backgroundColor: colors.background,
        display: shouldHideTabBar ? 'none' : 'flex',
      },
    });
  }, [tabNavigation, route, colors.background]);

  const onPressDrawer = () => {
    drawerNavigation.toggleDrawer();
  };

  const onPressSearch = () => {
    movieStackNavigation.navigate(ROUTES.MOVIES_STACK_SCREEN.SEARCH_SCREEN);
  };

  return (
    <MovieStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.primaryText,
      }}>
      <MovieStack.Group>
        <MovieStack.Screen
          name={ROUTES.MOVIES_STACK_SCREEN.MOVIES_SCREEN}
          component={MoviesScreen}
          options={{
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={onPressDrawer}>
                  <Icon name="menu" size={20} color={colors.primaryText} />
                </TouchableOpacity>
              );
            },
            headerTitle: 'Movies',
            headerRight: () => {
              return (
                <TouchableOpacity onPress={onPressSearch}>
                  <Icon name="search" size={20} color={colors.primaryText} />
                </TouchableOpacity>
              );
            },
          }}
        />
        <MovieStack.Screen
          name={ROUTES.MOVIES_STACK_SCREEN.MOVIE_DETAILS}
          component={MovieDetailsScreen}
          options={{ headerBackTitle: 'Back', headerTitle: '' }}
        />
        <MovieStack.Screen
          name={ROUTES.MOVIES_STACK_SCREEN.SEARCH_SCREEN}
          component={SearchScreen}
          options={{ headerBackTitle: 'Back', headerTitle: 'Search' }}
        />
      </MovieStack.Group>
      <MovieStack.Group screenOptions={{ presentation: 'modal' }}>
        <MovieStack.Screen
          name={ROUTES.MOVIES_STACK_SCREEN.MODAL_SCREEN}
          component={ModalScreen}
          options={{ headerBackTitle: 'Back', headerTitle: 'Confirmation' }}
        />
      </MovieStack.Group>
    </MovieStack.Navigator>
  );
};
export default MoviesStackScreen;

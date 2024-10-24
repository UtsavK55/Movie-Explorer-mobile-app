import {ROUTES} from '@constants/Routes';

declare global {
  type DrawerScreenNames = keyof typeof ROUTES.Drawer;
  type DrawerScreenParamList = Record<DrawerScreenNames, undefined>;
  type DrawerNavigationType = NavigationProp<DrawerScreenParamList>;

  type BottomTabScreenNames = keyof typeof ROUTES.BOTTOM_TAB;
  type BottomTabScreenParamList = Record<BottomTabScreenNames, undefined>;
  type BottomTabNavigationType = NavigationProp<BottomTabScreenParamList>;

  type MovieScreenNames = keyof typeof ROUTES.MOVIES_STACK_SCREEN;
  type MovieScreenParamList = {
    MOVIES_SCREEN: undefined;
    MOVIE_DETAILS: {movieId: number};
  };
  type MovieNavigationType = NavigationProp<MovieScreenParamList>;
}

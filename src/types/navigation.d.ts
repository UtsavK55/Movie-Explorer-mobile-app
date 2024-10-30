import {ROUTES} from '@constants/Routes';

declare global {
  type AuthScreenNames = keyof typeof ROUTES.Auth;
  type AuthScreenParamList = Record<AuthScreenNames, undefined>;
  type AuthNavigationType = NavigationProp<AuthScreenParamList>;

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
    SEARCH_SCREEN: undefined;
    MODAL_SCREEN: {movieId: number; title: string; isAdding: boolean};
  };
  type MovieNavigationType = NavigationProp<MovieScreenParamList>;
}

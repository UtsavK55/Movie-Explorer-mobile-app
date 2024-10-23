import {ROUTES} from '@constants/Routes';

declare global {

  type DrawerScreenNames = keyof typeof ROUTES.Drawer;
  type DrawerScreenParamList = Record<DrawerScreenNames, undefined>;
  type DrawerNavigationType = NavigationProp<DrawerScreenParamList>;

  type BottomTabScreenNames = keyof typeof ROUTES.BOTTOM_TAB;
  type BottomTabScreenParamList = Record<BottomTabScreenNames, undefined>;
  type BottomTabNavigationType = NavigationProp<BottomTabScreenParamList>;

  type MovieScreenNames = keyof typeof ROUTES.MOVIES_STACK_SCREEN;
  type MovieScreenParamList = Record<MovieScreenNames, undefined>;
  type MovieNavigationType = NavigationProp<MovieScreenParamList>;
}

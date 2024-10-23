import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MovieDetailsScreen from '@screens/movieDetails/MovieDetailsScreen';
import MoviesScreen from '@screens/movies/MovieScreen';
import {ROUTES} from '@constants/Routes';

const MoviesStackScreen = () => {
  const MovieStack = createNativeStackNavigator<MovieScreenParamList>();

  return (
    <MovieStack.Navigator>
      <MovieStack.Screen
        name={ROUTES.MOVIES_STACK_SCREEN.MOVIES_SCREEN}
        component={MoviesScreen}
        options={{headerShown: false}}
      />
      <MovieStack.Screen
        name={ROUTES.MOVIES_STACK_SCREEN.MOVIE_DETAILS}
        component={MovieDetailsScreen}
        options={{headerShown: false}}
      />
    </MovieStack.Navigator>
  );
};
export default MoviesStackScreen;

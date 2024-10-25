import {useMemo} from 'react';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {theme} from '@theme/themes';

const Rating = ({vote_average}: {vote_average: number}) => {
  const {filledStars, borderStars} = useMemo(() => {
    const roundedRating = Math.round(vote_average / 2);
    return {
      filledStars: roundedRating,
      borderStars: 5 - roundedRating,
    };
  }, [vote_average]);

  return (
    <Text>
      {Array.from({length: filledStars}).map((_, index) => (
        <Icon
          key={`filled-${index}`}
          name="star"
          size={14}
          color={theme.colors.foreground}
        />
      ))}
      {Array.from({length: borderStars}).map((_, index) => (
        <Icon
          key={`border-${index}`}
          name="star-border"
          size={14}
          color={theme.colors.foreground}
        />
      ))}
    </Text>
  );
};
export default Rating;

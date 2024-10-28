import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import {addData} from '@network/apiMethods';
import {colors} from '@theme/themes';

import {styles} from './styles';

const FavouritesConfirmation = () => {
  const navigation = useNavigation<MovieNavigationType>();
  const route = useRoute<RouteProp<MovieScreenParamList, 'MODAL_SCREEN'>>();
  const {movieId, title, isAdding} = route?.params;
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    setIsLoading(true);
    await addData({media_id: movieId, media_type: 'movie', favorite: isAdding});
    setIsLoading(false);
    navigation.goBack();
  };

  const onCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          {isAdding ? 'Add to Favorites' : 'Remove from Favorites'}
        </Text>
        <View style={styles.iconContainer}>
          <Icon
            name={isAdding ? 'heart' : 'close-circle'}
            size={64}
            color={isAdding ? colors.danger : colors.textSecondary}
          />
        </View>
        <Text style={styles.message}>
          Are you sure you want to {isAdding ? 'add' : 'remove'}
          <Text style={styles.itemName}>{title}</Text>
          {isAdding ? 'to' : 'from'} your favorites?
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={onCancel}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.confirmButton]}
            onPress={handleConfirm}
            disabled={isLoading}>
            <Text style={styles.buttonText}>
              {isAdding ? 'Add to Favorites' : 'Remove from Favorites'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FavouritesConfirmation;

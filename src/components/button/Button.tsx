import {Pressable, Text, View} from 'react-native';
import {ButtonModes} from '@constants/constants';
import {buttonStyles} from './styles';

function Button({label, onPress, mode}: ButtonProps) {
  const styles = buttonStyles();

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={[styles.button, mode === ButtonModes.FLAT && styles.flat]}>
        <Text
          style={[
            styles.buttonText,
            mode === ButtonModes.FLAT && styles.flatText,
          ]}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
}
export default Button;

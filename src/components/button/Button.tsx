import {Pressable, Text, View} from 'react-native';

import {buttonStyles} from './styles';

function Button({label, onPress, mode}: ButtonProps) {
  const styles = buttonStyles();
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={[styles.button, mode === 'flat' && styles.flat]}>
        <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

export default Button;

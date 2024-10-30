import { Text, TextInput, View } from 'react-native';
import { styles } from './styes';

const Input = ({
  label,
  invalid,
  style,
  value,
  onChangeText,
  textInputConfig,
  required,
  errorMessage = 'Please enter a valid value',
}: InputProps) => {
    
  return (
    <View style={[styles().inputContainer, style]}>
      <Text style={[styles().label]}>
        {label}
        {required && <Text style={styles().invalidLabel}> *</Text>}
      </Text>
      <TextInput
        style={styles().input}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
        {...textInputConfig}
      />
      {invalid && <Text style={styles().invalidLabel}>{errorMessage}</Text>}
    </View>
  );
};

export default Input;

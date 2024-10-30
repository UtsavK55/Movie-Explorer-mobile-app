import { TextStyle, ViewStyle } from 'react-native';

declare global {
  interface InputProps {
    label: string;
    invalid?: boolean;
    style?: TextStyle | ViewStyle;
    value: string;
    onChangeText: (value: string) => void;
    textInputConfig?: {};
    required?: boolean;
    errorMessage?: string;
  }

  type InputState = {
    value: string;
    isValid: boolean;
    errorMessage: string;
  };

  type Inputs = {
    userName: InputState;
    password: InputState;
  };
}

import { useState } from 'react';
import { Image, Text, View } from 'react-native';

import Button from '@components/button';
import Input from '@components/input';
import { passwordRegex, userNameRegex } from '@constants/regex';
import { STORAGE_KEYS } from '@constants/storageKeys';
import { useUserLoginContext } from '@contexts/LoginContext';
import { logoImg, validateInput } from '@helpers/helper';
import { addData, fetchData } from '@network/apiMethods';
import { newSession, newToken, validateLogin } from '@network/apiUrls';
import { storeData } from '@storage/storage';

import { styles } from './styles';

const LoginScreen = () => {
    
  const { setLoginId } = useUserLoginContext();
  const [inputs, setInputs] = useState<Inputs>({
    username: {
      value: '',
      isValid: true,
      errorMessage: '',
    },
    password: {
      value: '',
      isValid: true,
      errorMessage: '',
    },
  });

  const inputConfig = [
    {
      id: 'username' as const,
      label: 'username',
      regex: usernameRegex,
      errorMessage: {
        required: 'username is required.',
        invalid: 'Please enter a valid username.',
      },
    },
    {
      id: 'password' as const,
      label: 'Password',
      regex: passwordRegex,
      errorMessage: {
        required: 'Password is required.',
        invalid: "Entered password doesn't match the password format.",
      },
    },
  ];

  const handleInputChange = (
    inputIdentifier: keyof Inputs,
    enteredValue: string,
  ) => {
    setInputs(currentInputs => ({
      ...currentInputs,
      [inputIdentifier]: {
        value: enteredValue,
        isValid: true,
        errorMessage: '',
      },
    }));
  };

  const handleSubmit = async () => {
    try {
      const loginData = {
        username: inputs.username.value,
        password: inputs.password.value,
      };

      let hasError = false;

      const updatedInputs = inputConfig.map(input => {
        const userInputError = validateInput(
          loginData[input.id],
          input.regex,
          input.errorMessage.required,
          input.errorMessage.invalid,
        );

        if (userInputError) {
          hasError = true;
        }

        return {
          ...inputs[input.id],
          isValid: !userInputError,
          errorMessage: userInputError,
        };
      });

      if (hasError) {
        setInputs({
          username: updatedInputs[0],
          password: updatedInputs[1],
        });
        return;
      }

      const {username, password} = loginData
      const reqToken = await fetchData(newToken);
      const requestToken = reqToken?.request_token;
      const validLogin = await addData(validateLogin, {
        request_token: requestToken,
        username,
        password,
      });

      if (validLogin?.status === 200) {
        const session = await addData(newSession, {
          request_token: requestToken,
        });
        setLoginId(session?.data?.session_id);
        storeData(session?.data?.session_id, STORAGE_KEYS.LOGIN_ID);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Image style={styles().image} source={logoImg} />
      <Text style={styles().text}>Welcome to MovieMap</Text>
      {inputConfig.map(input => (
        <Input
          key={input.id}
          label={input.label}
          invalid={!inputs[input.id].isValid}
          value={inputs[input.id].value}
          onChangeText={value => handleInputChange(input.id, value)}
          required
          errorMessage={inputs[input.id].errorMessage}
        />
      ))}
      <View style={styles().buttonContainer}>
        <Button mode="default" label="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default LoginScreen;

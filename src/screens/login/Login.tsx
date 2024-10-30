import { useState } from 'react';
import { Image, Text, View } from 'react-native';

import Button from '@components/button';
import Input from '@components/input';
import { passwordRegex, userNameRegex } from '@constants/regex';
import { storageKeys } from '@constants/storageKeys';
import { useUserLoginContext } from '@contexts/LoginContext';
import { logoImg, validateInput } from '@helpers/helper';
import { addData, fetchData } from '@network/apiMethods';
import { newSession, newToken, validateLogin } from '@network/apiUrls';
import { storeData } from '@storage/storage';

import { styles } from './styles';

const LoginScreen = () => {
  const { setLoginId } = useUserLoginContext();
  const [inputs, setInputs] = useState({
    userName: {
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

  const handleInputChange = (inputIdentifier: string, enteredValue: string) => {
    setInputs(currentInputs => {
      return {
        ...currentInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  };

  const handleSubmit = async () => {
    try {
      const loginData = {
        userName: inputs.userName.value,
        password: inputs.password.value,
      };

      const userNameError = validateInput(
        loginData.userName,
        userNameRegex,
        'userName is required.',
        'Please enter a valid userName.',
      );

      const passwordError = validateInput(
        loginData.password,
        passwordRegex,
        'Password is required.',
        "Entered password doesn't match the password format.",
      );

      if (userNameError || passwordError) {
        setInputs(currentInputs => ({
          userName: {
            ...currentInputs.userName,
            isValid: !userNameError,
            errorMessage: userNameError,
          },
          password: {
            ...currentInputs.password,
            isValid: !passwordError,
            errorMessage: passwordError,
          },
        }));

        return;
      }

      const reqToken = await fetchData(newToken);
      const request_token = reqToken?.request_token;
      const validLogin = await addData(validateLogin, {
        request_token: request_token,
        username: loginData.userName,
        password: loginData.password,
      });

      if (validLogin?.status === 200) {
        const session = await addData(newSession, {
          request_token: request_token,
        });
        setLoginId(session?.data?.session_id);
        storeData(session?.data?.session_id, storageKeys.loginId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Image style={styles().image} source={logoImg} />
      <Text style={styles().text}>Welcome to MovieMap</Text>
      <Input
        label="Username"
        invalid={!inputs.userName.isValid}
        value={inputs.userName.value}
        onChangeText={(value: string) => handleInputChange('userName', value)}
        required
        errorMessage={inputs.userName.errorMessage}
      />
      <Input
        label="Password"
        invalid={!inputs.password.isValid}
        value={inputs.password.value}
        onChangeText={(value: string) => handleInputChange('password', value)}
        required
        errorMessage={inputs.password.errorMessage}
      />
      <View style={styles().buttonContainer}>
        <Button mode="default" label="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default LoginScreen;

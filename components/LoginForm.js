import React, {useContext} from 'react';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuthentication} from '../hooks/ApiHooks';
import {Button, Text, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {Card, Input} from '@rneui/themed';

const LoginForm = (props) => {
  const {setIsLoggedIn, setUser} = useContext(MainContext);
  const {postLogin} = useAuthentication();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {username: '', password: ''},
  });
  const logIn = async (loginData) => {
    console.log('Login button pressed', loginData);
    // const data = {username: 'ilkkamtk', password: 'q1w2e3r4'};
    try {
      const loginResult = await postLogin(loginData);
      console.log('logIn', loginResult);
      await AsyncStorage.setItem('userToken', loginResult.token);
      setUser(loginResult.setUser);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('logIn', error);
      // TODO: notify user about failed login attempt
    }
  };

  return (
    <View style={{width: 400}}>
      <Card>
        <Card.Title>Login</Card.Title>
        <Controller
          control={control}
          rules={{required: true, minLength: 3}}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              errorMessage={errors.username && errors.username.message}
              autoCapitalize="none"
            />
          )}
          name="username"
        />
        {errors.username?.type === 'required' && <Text>is required</Text>}
        {errors.username?.type === 'minLength' && (
          <Text>min length is 3 characters</Text>
        )}
        <Controller
          control={control}
          rules={{required: {value: true, message: 'is required'}}}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
              errorMessage={errors.password && errors.password.message}
            />
          )}
          name="password"
        />
        <Button title="Log in" onPress={handleSubmit(logIn)} />
      </Card>
    </View>
  );
};

export default LoginForm;

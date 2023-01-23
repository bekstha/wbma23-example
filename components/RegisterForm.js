// import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
// import {MainContext} from '../contexts/MainContext';
import {useUser} from '../hooks/ApiHooks';
import {Controller, useForm} from 'react-hook-form';
import {Card, Input} from '@rneui/themed';

const RegisterForm = (props) => {
  // const {setIsLoggedIn} = useContext(MainContext);
  // const {postLogin} = useAuthentication();
  const {postUser} = useUser();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {username: '', password: '', email: '', fullname: ''},
  });
  const register = async (registerData) => {
    console.log('Register button pressed', registerData);
    // const data = {username: 'bibekShrestha', password: 'examplepass'};
    try {
      const registerResult = await postUser(registerData);
      console.log('register', registerResult);
      // await AsyncStorage.setItem('userToken', registerResult.token);
      // setIsLoggedIn(true);
    } catch (error) {
      console.error('register', error);
      // TODO: notify user about failed login attempt
    }
  };

  return (
    <View style={{width: 400}}>
      <Card>
        <Card.Title>Register</Card.Title>
        <Controller
          control={control}
          rules={{required: true, minLength: 3}}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
        />
        {errors.username?.type === 'required' && (
          <Text>Username is required! </Text>
        )}
        {errors.username?.type === 'minLength' && (
          <Text>Min length is 3 characters! </Text>
        )}
        <Controller
          control={control}
          rules={{required: true, minLength: 5}}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
            />
          )}
          name="password"
        />
        {errors.password && <Text>Password (min. 5) is required! </Text>}

        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email?.type === 'required' && <Text>Email is required! </Text>}

        <Controller
          control={control}
          rules={{minLength: 3}}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Fullname"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="full_name"
        />
        {errors.full_name?.type === 'minLength' && (
          <Text>Min length is 3 characters! </Text>
        )}
        <Button title="Sign in!" onPress={handleSubmit(register)} />
      </Card>
    </View>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;

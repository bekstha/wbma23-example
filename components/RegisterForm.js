// import React, {useContext} from 'react';
import {View} from 'react-native';
// import {MainContext} from '../contexts/MainContext';
import {useUser} from '../hooks/ApiHooks';
import {Controller, useForm} from 'react-hook-form';
import {Card, Input, Button, Text} from '@rneui/themed';
const RegisterForm = (props) => {
  // const {setIsLoggedIn} = useContext(MainContext);
  // const {postLogin} = useAuthentication();
  const {postUser, checkUsername} = useUser();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {username: '', password: '', email: '', fullname: ''},
    mode: 'onBlur',
  });
  const register = async (registerData) => {
    console.log('Register button pressed', registerData);
    // const data = {username: 'bibekShrestha', password: 'examplepass'};
    try {
      if (!(await checkUser())) return;
      const registerResult = await postUser(registerData);
      console.log('register', registerResult);
      // await AsyncStorage.setItem('userToken', registerResult.token);
      // setIsLoggedIn(true);
    } catch (error) {
      console.error('register', error);
      // TODO: notify user about failed login attempt
    }
  };

  const checkUser = async (username) => {
    try {
      const userAvailable = await checkUsername(username);
      console.log('checkUSer', userAvailable);
      return userAvailable ? userAvailable : 'username is already taken';
    } catch (error) {
      console.log('checkUser', error.message);
    }
  };

  return (
    <View style={{width: 400}}>
      <Card>
        <Card.Title>Register</Card.Title>
        <Controller
          control={control}
          rules={{
            required: {value: true, message: 'This is required.'},
            minLength: 3,
            validate: checkUser,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
              errorMessage={errors.username && errors.username.message}
            />
          )}
          name="username"
        />
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message:
                'min 5 characters, needs one number, one uppercase letter',
            },
            pattern: {
              value: /(?=.*\p{Lu})(?=.*[0-9]).{5,}/u,
              message:
                'min 5 characters, needs one number, one uppercase letter',
            },
          }}
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

        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="none"
            />
          )}
          name="email"
        />
        {errors.email?.type === 'required' && <Text>is required</Text>}
        <Controller
          control={control}
          rules={{minLength: 3}}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Full name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize="words"
            />
          )}
          name="full_name"
        />
        {errors.full_name?.type === 'minLength' && (
          <Text>min length is 3 characters</Text>
        )}

        <Button title="Register" onPress={handleSubmit(register)} />
      </Card>
    </View>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import {MainContext} from '../contexts/MainContext';

const Profile = () => {
  const {setIsLoggedIn, user, setUser} = useContext(MainContext);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <Text>username: {user.username}</Text>
      <Text>email: {user.email}</Text>
      <Text>Full name: {user.fullname}</Text>
      <Button
        title="Logout!"
        onPress={async () => {
          console.log('Logging Out!');
          setUser({});
          setIsLoggedIn(false);
          try {
            await AsyncStorage.clear();
          } catch (error) {
            console.error('clearing asyncStorage failed', error);
          }
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

export default Profile;

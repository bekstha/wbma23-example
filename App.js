import {StyleSheet, SafeAreaView} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import List from './components/List';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header />
        <List />
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
});

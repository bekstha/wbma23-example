import {StatusBar} from 'expo-status-bar';
import Navigator from './navigators/Navigator.js';

const App = () => {
  return (
    <>
      <Navigator />
      <StatusBar style="auto" />
    </>
  );
};

export default App;

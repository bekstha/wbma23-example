import {StatusBar} from 'expo-status-bar';
import {MainProvider} from './contexts/MainContext.js';
import Navigator from './navigators/Navigator.js';

const App = () => {
  return (
    <MainProvider>
      <Navigator />
      <StatusBar style="auto" />
    </MainProvider>
  );
};
export default App;

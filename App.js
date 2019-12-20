import {
  createAppContainer
} from 'react-navigation';
import {
  createStackNavigator
} from 'react-navigation-stack';

import StartScreen from './screens/StartScreen';
import Onboarding from './screens/Onboarding';
import Menu from './screens/Menu/Menu';

const MainNavigator = createStackNavigator({
  startscreen: {
    screen: StartScreen,
  },
  onboarding: {
    screen: Onboarding,
    navigationOptions: {
      header: null,
    },
  },
  menu: {
    screen: Menu,
    navigationOptions: {
      header: null,
    },

  },
});

const App = createAppContainer(MainNavigator);

export default App;
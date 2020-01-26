import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SimpleLogin from './src/components/auth/SimpleLogin';

const DrawerNavigator = createDrawerNavigator(
  {
    AUTH: {screen: SimpleLogin, navigationOptions: {title: 'Login/Signup'}},
  },
  {},
);

const Navigator = createAppContainer(DrawerNavigator);

export {Navigator};

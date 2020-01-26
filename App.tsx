import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Navigator} from './Navigation';
import {Provider as PaperProvider} from 'react-native-paper';
import {THEME} from './Styles';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <PaperProvider theme={THEME}>
        <Navigator />
      </PaperProvider>
    </Fragment>
  );
};

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { registerRootComponent } from 'expo';

import store from './store/index';

import LoadingGateway from './gateways/Loading';

// import Dashboard from './screens/Dashboard/index';
import Login from './screens/Login/index';

import colors from './theme/colors';

if (__DEV__) {
  import('../ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

const App = () => (
  <Provider store={store}>
    <LoadingGateway />
    <View style={styles.app}>
      <Login />
    </View>
  </Provider>
);

registerRootComponent(App);

export default App;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { registerRootComponent } from 'expo';

import Dashboard from './screens/Dashboard/index';
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

export default function App() {
  return (
    <View style={styles.app}>
      <Login />
    </View>
  );
}

registerRootComponent(App);

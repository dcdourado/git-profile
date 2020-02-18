import React from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { registerRootComponent } from 'expo';

import store from './store/index';

import LoadingGateway from './gateways/Loading';

// import Dashboard from './screens/Dashboard/index';
import Login from './screens/Login/index';
import Teste from './screens/Teste/index';

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

const Stack = createStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <View style={styles.app}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Teste" component={Teste} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
    <LoadingGateway />
  </Provider>
);

registerRootComponent(App);

export default App;

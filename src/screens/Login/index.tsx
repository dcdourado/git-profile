import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import api from '../../services/api';

import Avatar from '../../components/Avatar/index';
import TextInput from '../../components/TextInput/index';
import Button from '../../components/Button/index';

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    height: 230,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Login = () => {
  const [user, setUser] = useState<string>('');

  const handleUserChange = (text: string) => {
    setUser(text);
  };

  const handleUserSearchPress = async () => {
    const response = await api.get(`/users/${user}`);
    console.log(response.data);
  };

  return (
    <View style={styles.container}>
      <Avatar source={require('../../assets/github-logo.png')} />
      <View style={styles.inputContainer}>
        <Text>Enter username</Text>
        <TextInput text={user} onChangeText={text => handleUserChange(text)} />
      </View>
      <Button title="Search" onPress={handleUserSearchPress} />
    </View>
  );
};

export default Login;

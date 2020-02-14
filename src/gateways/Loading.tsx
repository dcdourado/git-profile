import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { RootState } from '../store/index';

import LoadingWheel from '../components/LoadingWheel';

const styles = StyleSheet.create({
  center: {},
});

const Loading: React.FC = () => {
  const isLoading = useSelector((state: RootState) => state.loading.loading);

  return isLoading ? (
    <View style={styles.center}>
      <LoadingWheel />
    </View>
  ) : null;
};

export default Loading;

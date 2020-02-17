import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import colors from '../../theme/colors';

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.secondary,
    width: 45,
    height: 45,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LoadingWheel: React.FC = () => (
  <View style={styles.background}>
    <ActivityIndicator color={colors.primary} size="large" />
  </View>
);

export default LoadingWheel;

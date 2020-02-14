import React from 'react';
import { ActivityIndicator } from 'react-native';

import colors from '../../theme/colors';

const LoadingWheel: React.FC = () => <ActivityIndicator color={colors.primary} size="large" />;

export default LoadingWheel;

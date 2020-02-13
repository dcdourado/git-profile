import React from 'react';
import { Button as ButtonRN } from 'react-native';

import colors from '../../theme/colors';

export interface ButtonProps {
  title: string;
  onPress: () => void;
}
const Button: React.FC<ButtonProps> = props => {
  return <ButtonRN {...props} color={colors.primary} />;
};

export default Button;

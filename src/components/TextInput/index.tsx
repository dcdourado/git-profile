import React from 'react';
import { TextInput as TextInputRN, StyleSheet } from 'react-native';

import colors from '../../theme/colors';

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 7,
    width: 200,
    backgroundColor: colors.secondary,
  },
});

export interface TextInputProps {
  text: string;
  onChangeText: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = props => {
  return <TextInputRN {...props} editable maxLength={40} style={styles.textInput} />;
};

export default TextInput;

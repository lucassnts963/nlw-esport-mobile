import React from 'react';
import { View, TextInput, Text, TextInputProps } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

interface Props extends TextInputProps {
  title: string;
}

export function Input({ title, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        {...rest}
        style={styles.input}
        placeholderTextColor={THEME.COLORS.CAPTION_500}
      />
    </View>
  );
}

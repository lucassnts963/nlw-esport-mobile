import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

export function SelectTime() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual o horário do dia?</Text>
      <View style={styles.content}>
        <TextInput
          placeholder="De"
          placeholderTextColor={THEME.COLORS.CAPTION_500}
          style={styles.pickerTime}
        />
        <View style={styles.separator} />
        <TextInput
          placeholder="Até"
          placeholderTextColor={THEME.COLORS.CAPTION_500}
          style={styles.pickerTime}
        />
      </View>
    </View>
  );
}

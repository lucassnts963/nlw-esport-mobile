import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import { ButtonCard } from '../ButtonCard';

export function SelectWeekDays() {
  return (
    <View style={styles.container}>
      <ButtonCard title="D" />
      <ButtonCard title="S" />
      <ButtonCard title="T" />
      <ButtonCard title="Q" />
      <ButtonCard title="Q" />
      <ButtonCard title="S" />
      <ButtonCard title="S" />
    </View>
  );
}

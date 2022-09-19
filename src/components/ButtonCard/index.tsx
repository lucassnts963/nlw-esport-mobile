import React, { useState } from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  checked?: boolean;
}

export function ButtonCard({ title, ...rest }: Props) {
  const [checked, setChecked] = useState(false);
  return (
    <TouchableOpacity
      {...rest}
      style={[
        styles.container,
        {
          backgroundColor: checked
            ? THEME.COLORS.PRIMARY
            : THEME.COLORS.BACKGROUND_800,
        },
      ]}
      onPress={() => setChecked(!checked)}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

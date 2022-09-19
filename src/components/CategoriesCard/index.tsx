import { IconProps } from 'phosphor-react-native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

interface CategoryCard {
  id: string;
  title: string;
  icon: ({ color, mirrored, size, style, weight }: IconProps) => JSX.Element;
}

interface Props {
  data: CategoryCard;
}

export function CategoriesCard({ data }: Props) {
  const { title, icon: Icon } = data;
  return (
    <TouchableOpacity style={styles.container}>
      <Icon size={32} color={THEME.COLORS.PRIMARY} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

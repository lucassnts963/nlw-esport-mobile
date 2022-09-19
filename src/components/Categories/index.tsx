import React from 'react';
import { View, FlatList, Text } from 'react-native';

import { styles } from './styles';

import { CategoriesCard } from '../CategoriesCard';
import {
  Baby,
  GameController,
  PuzzlePiece,
  User,
  Users,
} from 'phosphor-react-native';

const categories = [
  {
    id: '1',
    title: 'Ranqueada',
    icon: GameController,
  },
  {
    id: '2',
    title: 'Duelo 1x1',
    icon: Users,
  },
  {
    id: '3',
    title: 'Diversão',
    icon: Baby,
  },
  {
    id: '4',
    title: 'Treino',
    icon: PuzzlePiece,
  },
];

export function Categories() {
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => <CategoriesCard data={item} />}
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    />
  );
}

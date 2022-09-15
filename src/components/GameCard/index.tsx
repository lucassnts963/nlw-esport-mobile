import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  TouchableOpacity,
  ImageBackground,
  TouchableOpacityProps,
  Text,
} from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface GameCardProps {
  id: string;
  title: string;
  _count: {
    ads: number;
  };
  bannerUrl: string;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
  const navigation = useNavigation();

  function handleOpenScreenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl });
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleOpenScreenGame(data)}
      {...rest}
    >
      <ImageBackground source={{ uri: data.bannerUrl }} style={styles.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{data._count.ads} anúncio(s)</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}

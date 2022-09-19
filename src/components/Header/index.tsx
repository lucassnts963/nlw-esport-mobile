import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Plus } from 'phosphor-react-native';

import { styles } from './styles';
import { THEME } from '../../theme';
import { useNavigation } from '@react-navigation/native';

export function Header() {
  const navigation = useNavigation();

  function handleOpenNewAd() {
    navigation.navigate('newAd');
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/16074674?v=4' }}
        style={styles.profileImg}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Olá, Lucas</Text>
        <Text style={styles.subtitle}>Hoje é dia de vitória</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleOpenNewAd}>
        <Plus size={24} color={THEME.COLORS.TEXT} weight="bold" />
      </TouchableOpacity>
    </View>
  );
}

import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Background } from '../../../components/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DiscordLogo } from 'phosphor-react-native';

import { styles } from './styles';

import logoImg from '../../../assets/logo-nlw-esports.png';
import { THEME } from '../../../theme';

export function SignIn() {
  async function handleSignIn() {}
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <DiscordLogo color={THEME.COLORS.TEXT} size={20} />
          <Text style={styles.buttonTitle}>Entrar com discord</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
}

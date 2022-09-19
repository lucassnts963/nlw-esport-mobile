import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Background } from '../../../components/Background';
import { Input } from '../../../components/Input';
import { SelectTime } from '../../../components/SelectTime';
import { SelectWeekDays } from '../../../components/SelectWeekDays';

import { styles } from './styles';

export function NewAd() {
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Publique um anúncio</Text>
        <Input
          title="Qual o game? "
          placeholder="Selecione o game que deseja jogar"
        />
        <Input
          title="Seu nome (ou nickname)"
          placeholder="Como te chamam dentro do game?"
        />
        <View style={styles.content}>
          <Input
            title="Joga há quanto tempo?"
            placeholder="Tudo bem ser ZERO"
            keyboardType="numeric"
          />
          <View style={styles.separator} />
          <Input title="Qual o seu discord?" placeholder="Usuário#0000" />
        </View>
        <View style={styles.content}>
          <SelectWeekDays />
          <SelectTime />
        </View>
        <TouchableOpacity style={styles.checkbox}>
          <Text style={styles.checkboxTitle}>
            Costumo me conectar ao chat de voz
          </Text>
        </TouchableOpacity>
        <View style={styles.content}>
          <TouchableOpacity style={styles.buttonCancel}>
            <Text style={styles.buttonTitle}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonFindDuo}>
            <Text style={styles.buttonTitle}>Encontrar duo</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Background>
  );
}

import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import logoImg from '../../../assets/logo-nlw-esports.png';

import { Heading } from '../../../components/Heading';
import { GameCard, GameCardProps } from '../../../components/GameCard';
import { Background } from '../../../components/Background';
import { Header } from '../../../components/Header';
import { Categories } from '../../../components/Categories';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch('http://192.168.254.132:3333/games')
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch(console.error);
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Header />
        <Categories />
        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />
        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <GameCard data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}

import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

import logoImage from '../../../assets/logo-nlw-esports.png';
import { Background } from '../../../components/Background';

import { styles } from './styles';
import { GameParams } from '../../../@types/navigation';
import { THEME } from '../../../theme';
import { Heading } from '../../../components/Heading';
import { DuoCard, DuoCardProps } from '../../../components/DuoCard';
import { DuoMatch } from '../../../components/DuoMatch';

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  function handleGoBack() {
    navigation.goBack();
  }

  async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.254.132:3333/ads/${adsId}/discord`)
      .then((response) => response.json())
      .then((data) => setDiscordDuoSelected(data.discord))
      .catch(console.error);
  }

  useEffect(() => {
    fetch(`http://192.168.254.132:3333/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setDuos(data))
      .catch(console.error);
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image source={logoImage} style={styles.logo} />
          <View style={styles.right} />
        </View>
        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />
        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />
        <FlatList
          data={duos}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.containerList}
          contentContainerStyle={
            duos.length > 0 ? styles.contentList : styles.emptyListContent
          }
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>Ainda não há anúncio.</Text>
          )}
        />
        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected('')}
        />
      </SafeAreaView>
    </Background>
  );
}

export default Game;

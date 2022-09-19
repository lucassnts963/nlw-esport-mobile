import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../../screens/private/Home';
import { Game } from '../../screens/private/Game';
import { NewAd } from '../../screens/private/NewAd';

const { Navigator, Screen } = createNativeStackNavigator();

export function PrivateNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="game" component={Game} />
      <Screen name="newAd" component={NewAd} />
    </Navigator>
  );
}

export default PrivateNavigator;

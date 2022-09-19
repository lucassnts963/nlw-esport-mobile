import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../../screens/public/SignIn';
import { SignUp } from '../../screens/public/SignUp';

const { Navigator, Screen } = createNativeStackNavigator();

export function PublicNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  );
}

export default PublicNavigator;

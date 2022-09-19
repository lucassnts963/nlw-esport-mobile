import { NavigationContainer } from '@react-navigation/native';

import { RootNavigator } from './_rootNavigator';

export function Routes() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default Routes;

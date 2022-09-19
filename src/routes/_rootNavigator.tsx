import { PublicNavigator } from './public/publicNavigator';
import { PrivateNavigator } from './private/privateNavigator';

export function RootNavigator() {
  const auth = true;
  return <>{auth ? <PrivateNavigator /> : <PublicNavigator />}</>;
}

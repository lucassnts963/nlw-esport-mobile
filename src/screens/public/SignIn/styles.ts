import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {},
  button: {
    flexDirection: 'row',
    width: '100%',
    height: 48,
    borderRadius: 6,
    backgroundColor: THEME.COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    marginLeft: 8,
  },
});

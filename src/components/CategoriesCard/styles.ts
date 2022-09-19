import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.SHAPE,
    width: 100,
    height: 120,
    marginRight: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: THEME.COLORS.TEXT,
    marginTop: 16,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});

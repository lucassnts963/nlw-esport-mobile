import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    marginRight: 8,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  title: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
});

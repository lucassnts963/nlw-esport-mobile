import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  content: {
    flexDirection: 'row',
    width: '100%',
  },
  title: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.LG,
    marginBottom: 16,
  },
  separator: {
    width: 8,
  },
  checkbox: {},
  checkboxTitle: {},
  buttonCancel: {
    backgroundColor: THEME.COLORS.CAPTION_400,
    padding: 16,
    borderRadius: 8,
    marginRight: 16,
  },
  buttonFindDuo: {
    backgroundColor: THEME.COLORS.PRIMARY,
    padding: 16,
    borderRadius: 8,
  },
  buttonTitle: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
});

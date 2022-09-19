import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {},
  title: {
    color: THEME.COLORS.CAPTION_300,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  pickerTime: {
    padding: 16,
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    color: THEME.COLORS.TEXT,
    flex: 1,
  },
  separator: {
    width: 8,
  },
});

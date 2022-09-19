import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    maxHeight: 100,
    flex: 1,
  },
  label: {
    color: THEME.COLORS.CAPTION_300,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
    marginTop: 8,
  },
  input: {
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    color: THEME.COLORS.TEXT,
    padding: 16,
    borderRadius: 8,
    marginTop: 8,
  },
});

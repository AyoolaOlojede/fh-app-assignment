import { StyleSheet } from 'react-native';
import { FONT_FAMILIES, FONT_SIZES } from '../../themes/fonts';

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    marginTop: 20,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    flexDirection: 'row'
  },
  text: {
    fontFamily: FONT_FAMILIES.interSemiBold,
    fontSize: FONT_SIZES.large,
  },
});

export default styles;

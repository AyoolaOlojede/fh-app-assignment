import { StyleSheet } from 'react-native';
import { FONT_FAMILIES, FONT_SIZES } from 'src/themes/fonts';
import { COLORS } from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  stepperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  otherTitle: {
    fontFamily: FONT_FAMILIES.interSemiBold,
    fontSize: FONT_SIZES.large,
    color: COLORS.black,
    },
});

export default styles;
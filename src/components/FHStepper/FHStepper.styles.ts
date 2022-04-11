import { StyleSheet } from 'react-native';
import { FONT_FAMILIES, FONT_SIZES } from 'src/themes/fonts';
import { COLORS } from '../../themes/colors';

const styles = StyleSheet.create({
  adultContainer: {
    flexDirection: 'row'
  },
  stepperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  stepper: {
    width: 40,
    height: 40,
    borderColor:'#0071F3',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '#F7FBFF'
  },
  numericText: {
    width: 60,
    height: 20,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#2A333D',
    fontSize: FONT_SIZES.large,
    fontFamily: FONT_FAMILIES.interSemiBold,
  },
});

export default styles;

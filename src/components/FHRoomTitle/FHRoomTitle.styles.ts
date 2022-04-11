import { StyleSheet } from 'react-native';
import { COLORS } from 'src/themes/colors';
import { FONT_FAMILIES, FONT_SIZES } from '../../themes/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  roomTitle: {
    fontFamily: FONT_FAMILIES.interSemiBold,
    fontSize: FONT_SIZES.xlarge,
    color: COLORS.black,
    marginTop: 20,
    },
    removeText: {
      color: '#D83B3B',
      fontFamily: FONT_FAMILIES.interSemiBold,
      fontSize: FONT_SIZES.large,
      marginTop: 30,
    }
});

export default styles;

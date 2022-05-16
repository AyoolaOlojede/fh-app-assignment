import { StyleSheet } from 'react-native';
import { COLORS } from 'src/themes/colors';
import { FONT_FAMILIES, FONT_SIZES } from '../../themes/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    zIndex: 1,
    justifyContent: 'space-between',
    flex: 1
  },
  childContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  roomTitle: {
    fontFamily: FONT_FAMILIES.interSemiBold,
    fontSize: FONT_SIZES.medium,
    color: COLORS.black,
    marginTop: 20,
    flex: 1,
    marginLeft : 20
    },
    removeText: {
      color: '#D83B3B',
      fontFamily: FONT_FAMILIES.interSemiBold,
      fontSize: FONT_SIZES.large,
      marginTop: 30,
    },
    seperator: {
      width : 1,
      height: "100%",
      backgroundColor: "#EFF2F6"
    },
    dropDown: {
      borderColor: '#BED2E9'
    },
    dropDownContent : {
      height: 300,
      borderColor: '#BED2E9'
    },
    placeHolder: {
      fontFamily: FONT_FAMILIES.interSemiBold,
      fontSize: FONT_SIZES.medium,
      color: '#2A333D'
    }
});

export default styles;

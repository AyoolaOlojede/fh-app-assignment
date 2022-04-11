import { StyleSheet } from 'react-native';
import { COLORS } from 'src/themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignContent: 'center',
    paddingHorizontal: 10,
  },

  imageBackground: {
    flex: 1,
    overlayColor: COLORS.white,
  },
  card: {
    marginTop: -400,
    padding: 10,
    backgroundColor: COLORS.white,
    marginVertical: 100,
    borderColor: '#ccc',
  },
});

export default styles;

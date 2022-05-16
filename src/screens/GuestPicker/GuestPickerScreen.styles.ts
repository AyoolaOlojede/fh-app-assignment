import { StyleSheet } from 'react-native';
import { COLORS } from 'src/themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignContent: 'center',
    paddingHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 30
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
  addButton: {
    borderColor:'#DAE9FA',
    borderWidth: 1,
    backgroundColor:'#F7FBFF'
  },
 searchButton: {
    backgroundColor: COLORS.primary
  },
  seperator: {
    height: 1,
    width: "100%",
    backgroundColor: "#EFF2F6",
    marginVertical: 20
  }
});

export default styles;

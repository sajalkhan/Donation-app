import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../utils/helper';

const style = StyleSheet.create({
  homePage: {
    flex: 1,
    backgroundColor: 'white',
  },
  homePageWrapper: {
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24,
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: getFontFamily('Inter', 900),
  },
});

export default style;

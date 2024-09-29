import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../utils/helper';

const style = StyleSheet.create({
  homePage: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  homePageWrapper: {
    flex: 1,
    gap: 8,
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    fontFamily: getFontFamily('Inter', 900),
  },
});

export default style;

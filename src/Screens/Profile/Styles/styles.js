import {COLORS} from '../../../BusinessLogics/Constants';
import {
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../../BusinessLogics/Utils/helpers';

const {StyleSheet, Dimensions} = require('react-native');

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  userInfoCard: {
    width: WIDTH_BASE_RATIO(353),
    height: HEIGHT_BASE_RATIO(122),
    backgroundColor: COLORS.CARD_BG,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: COLORS.CARD_BORDER,
    marginTop: HEIGHT_BASE_RATIO(10),
    paddingHorizontal: WIDTH_BASE_RATIO(15),
    paddingVertical: HEIGHT_BASE_RATIO(12),
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  linkButton: {
    width: WIDTH_BASE_RATIO(27),
    height: HEIGHT_BASE_RATIO(27),
    borderRadius: 13.5,
    borderWidth: 0.5,
    borderColor: COLORS.GRAY_3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: HEIGHT_BASE_RATIO(200),
    marginTop: HEIGHT_BASE_RATIO(15),
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    width: width / 2 - 39,
    height: HEIGHT_BASE_RATIO(118),
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  itemContainer2: {
    // width:WIDTH_BASE_RATIO(442),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item2: {
    width: WIDTH_BASE_RATIO(242),
    height: HEIGHT_BASE_RATIO(242),
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,

  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
  activeDot: {
    backgroundColor: COLORS.PRIMARY,
  },
  inactiveDot: {
    backgroundColor: COLORS.BORDER,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enabledButton: {
    backgroundColor: COLORS.PRIMARY,
  },
  disabledButton: {
    backgroundColor: COLORS.GRAY_3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

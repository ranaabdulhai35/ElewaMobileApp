import {COLORS, FONTS} from '../../BusinessLogics/Constants';
import {WIDTH_BASE_RATIO} from '../../BusinessLogics/Utils/helpers';
import {HEIGHT_BASE_RATIO} from '../Utils/helpers';

const {StyleSheet} = require('react-native');

export const GeneralStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  Header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: HEIGHT_BASE_RATIO(30),
  },
  errorStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: HEIGHT_BASE_RATIO(5),
  },
  imageContainer1: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: WIDTH_BASE_RATIO(15),
    // marginTop: HEIGHT_BASE_RATIO(30),
  },

  imageContainer2: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: WIDTH_BASE_RATIO(15),
  },
  generalPadding: {
    paddingHorizontal: WIDTH_BASE_RATIO(20),
  },
  Paragraph: {
    ...FONTS.NormalText,
    color: COLORS.ParagrapghText,
    width: WIDTH_BASE_RATIO(353),
    textAlign: 'center',
    marginTop: HEIGHT_BASE_RATIO(10),
    letterSpacing: 0.2,
  },
  line: {
    backgroundColor: COLORS.BORDER,
    height: 1.5,
    borderRadius: 10,
    width: WIDTH_BASE_RATIO(160),
  },
});

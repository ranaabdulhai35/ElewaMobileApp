import {StyleSheet} from 'react-native';
import {
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../../../BusinessLogics/Utils/helpers';
import {COLORS, FONTS} from '../../../../BusinessLogics/Constants';

export const styles = StyleSheet.create({
  innerContainer: {
    // alignItems: 'center',
    marginTop: HEIGHT_BASE_RATIO(177),
  },
  line: {
    backgroundColor: COLORS.BORDER,
    height: 1.5,
    borderRadius: 10,
    width: WIDTH_BASE_RATIO(160),
  },
  linkButtons: {
    backgroundColor: COLORS.WHITE,
    width: WIDTH_BASE_RATIO(160),
    height: HEIGHT_BASE_RATIO(60),
    borderRadius: 6,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignChildren: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Paragraph: {
    ...FONTS.NormalText,
    color: COLORS.ParagrapghText,
    width: WIDTH_BASE_RATIO(353),
    textAlign: 'center',
    marginTop: HEIGHT_BASE_RATIO(10),
    letterSpacing: 0.2,
  },
});

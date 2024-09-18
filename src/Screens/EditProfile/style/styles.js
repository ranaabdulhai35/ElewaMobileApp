import {COLORS, FONTS} from '../../../BusinessLogics/Constants';
import {
  FONT_SIZE,
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../../BusinessLogics/Utils/helpers';

const {StyleSheet} = require('react-native');

export const styles = StyleSheet.create({
  imageUploadContainer: {
    alignItems: 'center',
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: HEIGHT_BASE_RATIO(15),
  },
  headingText: {
    ...FONTS.TTBold_20_Black,
    letterSpacing: 0.2,
  },
  uploadButtonText: {
    ...FONTS.TTMedium_14_Black,
    color: COLORS.PRIMARY,
    marginLeft: 5,
  },
  inputHeadingText: {
    ...FONTS.TTMedium_14_Black,
    letterSpacing: 0.2,
    color: COLORS.InputHeading,
    marginBottom: HEIGHT_BASE_RATIO(10),
  },

  container: {
    marginTop: HEIGHT_BASE_RATIO(20),
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: COLORS.LIGHT_GRAY,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: WIDTH_BASE_RATIO(5),
    marginBottom: HEIGHT_BASE_RATIO(15),
  },
  tagText: {
    ...FONTS.TTNormal_14_Black,
    color: COLORS.BLACK,
  },
  tagRemove: {
    marginLeft: 5,
    color: COLORS.BLACK,
    fontWeight: 'medium',
  },
  input: {
    borderWidth: 1.5,
    borderColor: COLORS.BORDER,
    borderRadius: 5,
    paddingHorizontal: WIDTH_BASE_RATIO(20),
    height: HEIGHT_BASE_RATIO(48),
    width: WIDTH_BASE_RATIO(353),
    ...FONTS.TTMedium_14_Black,
  },
  addButton: {
    backgroundColor: COLORS.PRIMARY,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: HEIGHT_BASE_RATIO(20),
  },
  linkButton: {
    width: WIDTH_BASE_RATIO(64),
    height: HEIGHT_BASE_RATIO(28),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 5,
    borderWidth: 0.25,
    borderColor: COLORS.BLACK,
  },
  uploadButtonPortfolio: {
    width: WIDTH_BASE_RATIO(169),
    height: HEIGHT_BASE_RATIO(140),
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

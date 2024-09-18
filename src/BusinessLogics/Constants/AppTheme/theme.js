import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
import {FONT_SIZE} from '../../Utils/helpers';
import {FontFamily} from '../../../Components/Global/generalFonts';
import {Badge} from 'react-native-paper';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export const COLORS = {
  InputHeading: '#252525',
  WHITE: '#FFFFFF',
  BLACK: '#0B0B0B',
  LIGHT_TEXT: '#A0A0A0',
  LIGHT_BLACK: '#242527',
  LIGHT_SILEVR: '#F8F8F8',
  LIGHT_BLUE: '#F7F8FA',
  LIGHT_BROWN: '#EEB786',
  Gray: '#989EAD',
  SEMI_WHITE: '#EEEEEE',
  BLUE: '#008AFB',
  RED: '#EE1C25',
  LIGHT_GRAY: '#EEEEEE',
  LIGHTEST_GRAY: '#F6F6F6',
  LIGHT_GREEN: '#48D06B',
  LIGHTEST_GREEN: '#EBF7EE',
  LIGHTEST_BLUE: '#ECF3FE',
  GRAY_3: '#828282',
  BLACK: '#000817',
  WHITE: '#fff',
  GREEN: '#38aa55',
  LIGHT_BLUE: '#8fb7fc',
  PRIMARY: '#EA5B2C',
  SECONDARY: '#FFFFFF',
  BACKGROUND: '#F1F5FE',
  BUTTON: '#E1ECFF',
  BUTTON_BACKGROUND: '#F4F8FF',
  ORANGE: '#FF9537',
  BACKROUND_BUTTONS: '#DEE9FD',
  LIGHT_RED: '#FDECEB',
  BORDER: '#CDCDCD',
  ParagrapghText: '#606060',
  CARD_BG: '#FEF7F4',
  CARD_BORDER: '#FCE7E0',
  TXT_COLOR: '#727272',
  GREEN_POST: '#72A549',
  ADD_BTN_BG: '#F5E6E2',
  TXT_INPUT_BG: '#FDEFEA',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  logowidth: 176,
  logoheight: 51,
  paddingH: width * 0.086,
  paddingH: width * 0.086,
  iconWidth: width / 30 + 13,
  iconHeight: height / 40 + 13,

  // shadow
  shadowANDROID: {
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 0.1,
    elevation: 10,
    zIndex: 999,
  },
  PinkshadowANDROID: {
    shadowColor: '#fe3f6c',
    shadowOffset: {width: 5, height: 5},

    shadowOpacity: 0.1,
    elevation: -3,
    zIndex: 66,
  },

  shadow_ios_android: {
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 3,
    elevation: 4,
    backgroundColor: 'white',
  },
  lightShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 0.41,

    elevation: 1,
  },

  shadowIOS: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.27,
  },

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  TTLarge_24_Black: {
    fontSize: FONT_SIZE(24),
    fontFamily: FontFamily.ExtraBold,
    color: COLORS.BLACK,
  },
  TTBold_20_Black: {
    fontSize: FONT_SIZE(20),
    fontFamily: FontFamily.Bold,
    color: COLORS.BLACK,
  },
  TTMedium_18_Black: {
    fontSize: FONT_SIZE(18),
    fontFamily: FontFamily.Bold,
    color: COLORS.BLACK,
  },
  TTMedium_14_Black: {
    fontSize: FONT_SIZE(14),
    fontFamily: FontFamily.Medium,
    color: COLORS.BLACK,
  },
  TTNormal_14_Black: {
    fontSize: FONT_SIZE(14),
    fontFamily: FontFamily.Regular,
    color: COLORS.BLACK,
  },
  TTSmall_12_Black: {
    fontSize: FONT_SIZE(12),
    fontFamily: FontFamily.Regular,
    color: COLORS.BLACK,
  },
  TTNormal_12_Black: {
    fontSize: FONT_SIZE(12),
    fontFamily: FontFamily.Medium,
    color: COLORS.BLACK,
  },
  Heading: {
    fontSize: FONT_SIZE(30),
    fontFamily: FontFamily.Bold,
    color: COLORS.BLACK,
  },
  ButtonText: {
    fontSize: FONT_SIZE(16),
    fontFamily: FontFamily.Bold,
    color: COLORS.BLACK,
  },
  TTMedium_16_Black: {
    fontSize: FONT_SIZE(16),
    fontFamily: FontFamily.Medium,
    color: COLORS.BLACK,
  },
  InputFieldText: {
    fontSize: FONT_SIZE(14),
    fontFamily: FontFamily.Medium,
    color: COLORS.BLACK,
  },
  NormalText: {
    fontSize: FONT_SIZE(14),
    fontFamily: FontFamily.Regular,
    color: COLORS.GRAY_3,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;

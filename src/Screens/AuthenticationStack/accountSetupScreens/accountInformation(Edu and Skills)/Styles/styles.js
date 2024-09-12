import { StyleSheet } from "react-native";
import { COLORS } from "../../../../../BusinessLogics/Constants";
import { FONT_SIZE, HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO } from "../../../../../BusinessLogics/Utils/helpers";
import { FontFamily } from "../../../../../Components/Global/generalFonts";

export const styles = StyleSheet.create({
    dropdown: {
      width: WIDTH_BASE_RATIO(353),
      height: HEIGHT_BASE_RATIO(48),
      borderRadius: 6,
      borderWidth: 1.5,
      borderColor: '#CDCDCD',
      justifyContent: 'center',
      marginTop: HEIGHT_BASE_RATIO(15),
      paddingHorizontal: 20,
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: FONT_SIZE(14),
      fontFamily: FontFamily.Medium,
      color: COLORS.GRAY_3,
    },
    selectedTextStyle: {
      fontSize: FONT_SIZE(14),
      color: COLORS.GRAY_3,

    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: FONT_SIZE(14),
      color: COLORS.GRAY_3,

    },
  });